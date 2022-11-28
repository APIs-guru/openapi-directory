var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
var UploadFilePathParams = /** @class */ (function (_super) {
    __extends(UploadFilePathParams, _super);
    function UploadFilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" }),
        __metadata("design:type", String)
    ], UploadFilePathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" }),
        __metadata("design:type", String)
    ], UploadFilePathParams.prototype, "workgroupId", void 0);
    return UploadFilePathParams;
}(SpeakeasyBase));
export { UploadFilePathParams };
var UploadFileRequestBody = /** @class */ (function (_super) {
    __extends(UploadFileRequestBody, _super);
    function UploadFileRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], UploadFileRequestBody.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=requestBody" }),
        __metadata("design:type", String)
    ], UploadFileRequestBody.prototype, "requestBody", void 0);
    return UploadFileRequestBody;
}(SpeakeasyBase));
export { UploadFileRequestBody };
var UploadFileRequest = /** @class */ (function (_super) {
    __extends(UploadFileRequest, _super);
    function UploadFileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UploadFilePathParams)
    ], UploadFileRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true, request, media_type=multipart/form-data" }),
        __metadata("design:type", UploadFileRequestBody)
    ], UploadFileRequest.prototype, "request", void 0);
    return UploadFileRequest;
}(SpeakeasyBase));
export { UploadFileRequest };
var UploadFileResponse = /** @class */ (function (_super) {
    __extends(UploadFileResponse, _super);
    function UploadFileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], UploadFileResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UploadFileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UploadFileResponse.prototype, "fileResponseVo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UploadFileResponse.prototype, "httpStatusVo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UploadFileResponse.prototype, "statusCode", void 0);
    return UploadFileResponse;
}(SpeakeasyBase));
export { UploadFileResponse };
