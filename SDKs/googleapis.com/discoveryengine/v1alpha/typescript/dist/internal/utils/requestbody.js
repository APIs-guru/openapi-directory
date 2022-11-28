var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import FormData from "form-data";
import { createReadStream, writeFileSync } from "fs";
import { join } from "path";
import qs from "qs";
var requestMetadataKey = "request";
var mpFormMetadataKey = "multipart_form";
export function SerializeRequestBody(request) {
    var fieldNames = Object.getOwnPropertyNames(request);
    var _a = [{}, {}], requestHeaders = _a[0], requestBody = _a[1];
    fieldNames.forEach(function (fname) {
        var _a, _b;
        var requestAnn = Reflect.getMetadata(requestMetadataKey, request, fname);
        if (requestAnn == null)
            return;
        var requestDecorator = ParseRequestDecorator(requestAnn);
        switch (requestDecorator.MediaType) {
            case "multipart/form-data":
            case "multipart/mixed":
                requestBody = EncodeMultipartFormData(request[fname]);
                requestHeaders = requestBody.getHeaders();
                break;
            case "application/x-www-form-urlencoded":
                _a = [
                    { "Content-Type": "".concat(requestDecorator.MediaType) },
                    qs.stringify(__assign({}, request[fname])),
                ], requestHeaders = _a[0], requestBody = _a[1];
                break;
            case "application/json":
            case "text/json":
            default:
                _b = [
                    { "Content-Type": "".concat(requestDecorator.MediaType) },
                    __assign({}, request[fname]),
                ], requestHeaders = _b[0], requestBody = _b[1];
        }
    });
    return [requestHeaders, requestBody];
}
function EncodeMultipartFormData(form) {
    var formData = new FormData();
    var fieldNames = Object.getOwnPropertyNames(form);
    fieldNames.forEach(function (fname) {
        var mpFormAnn = Reflect.getMetadata(mpFormMetadataKey, form, fname);
        if (mpFormAnn == null)
            return;
        var mpFormDecorator = ParseMultipartFormDecorator(mpFormAnn);
        if (mpFormDecorator.File)
            return EncodeMultipartFormDataFile(formData, form[fname]);
        else if (mpFormDecorator.JSON) {
            formData.append(mpFormDecorator.Name, __assign({}, form[fname]));
        }
        else {
            if (Array.isArray(form[fname])) {
                form[fname].forEach(function (val) {
                    formData.append(mpFormDecorator.Name + "[]", JSON.stringify(val));
                });
            }
            else {
                formData.append(mpFormDecorator.Name, JSON.stringify(form[fname]));
            }
        }
    });
    return formData;
}
function EncodeMultipartFormDataFile(formData, file) {
    if (typeof file !== "object" || Array.isArray(file) || file == null) {
        throw new Error("invalid type for multipart/form-data file");
    }
    var fieldNames = Object.getOwnPropertyNames(file);
    var content = null;
    var fileName = "";
    var mpFormDecoratorName = "";
    fieldNames.forEach(function (fname) {
        var mpFormAnn = Reflect.getMetadata(mpFormMetadataKey, file, fname);
        if (mpFormAnn == null)
            return;
        var mpFormDecorator = ParseMultipartFormDecorator(mpFormAnn);
        if (!mpFormDecorator.Content && mpFormDecorator.Name == "")
            return;
        if (mpFormDecorator.Content)
            content = file[fname];
        else {
            mpFormDecoratorName = mpFormDecorator.Name;
            fileName = file[fname];
        }
    });
    if (mpFormDecoratorName === "" || fileName === "" || content == null)
        throw new Error("invalid multipart/form-data file");
    writeFileSync(join(__dirname, fileName), content, {
        flag: "w",
    });
    formData.append(mpFormDecoratorName, createReadStream(join(__dirname, fileName)));
    return formData;
}
function ParseMultipartFormDecorator(mpFormAnn) {
    // example "name=file"
    var mpFormDecorator = new MultipartFormDecorator(false, false, false, "");
    mpFormAnn.split(";").forEach(function (mpFormAnnPart) {
        var _a = mpFormAnnPart.split("="), mpFormKey = _a[0], mpFormVal = _a[1];
        switch (mpFormKey) {
            case "file":
                mpFormDecorator.File = mpFormVal == "true";
                break;
            case "content":
                mpFormDecorator.Content = mpFormVal == "true";
                break;
            case "name":
                mpFormDecorator.Name = mpFormVal;
                break;
            case "json":
                mpFormDecorator.JSON = mpFormVal == "true";
        }
    });
    return mpFormDecorator;
}
var MultipartFormDecorator = /** @class */ (function () {
    function MultipartFormDecorator(File, Content, JSON, Name) {
        this.File = File;
        this.Content = Content;
        this.JSON = JSON;
        this.Name = Name;
    }
    return MultipartFormDecorator;
}());
function ParseRequestDecorator(requestAnn) {
    // example "media_type=multipart/form-data"
    var requestDecorator = new RequestDecorator("application/octet-stream");
    var _a = requestAnn.split("="), mediaTypeKey = _a[0], mediaTypeVal = _a[1];
    if (mediaTypeKey === "media_type")
        requestDecorator.MediaType = mediaTypeVal;
    return requestDecorator;
}
var RequestDecorator = /** @class */ (function () {
    function RequestDecorator(MediaType) {
        this.MediaType = MediaType;
    }
    return RequestDecorator;
}());
