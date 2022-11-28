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
import * as shared from "../shared";
export var PostImagesUploadServerList = [
    "https://api.linode.com/v4",
    "https://api.linode.com/v4beta",
];
var PostImagesUploadRequestBody = /** @class */ (function (_super) {
    __extends(PostImagesUploadRequestBody, _super);
    function PostImagesUploadRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PostImagesUploadRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], PostImagesUploadRequestBody.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], PostImagesUploadRequestBody.prototype, "region", void 0);
    return PostImagesUploadRequestBody;
}(SpeakeasyBase));
export { PostImagesUploadRequestBody };
var PostImagesUploadSecurity = /** @class */ (function (_super) {
    __extends(PostImagesUploadSecurity, _super);
    function PostImagesUploadSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], PostImagesUploadSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], PostImagesUploadSecurity.prototype, "oauth", void 0);
    return PostImagesUploadSecurity;
}(SpeakeasyBase));
export { PostImagesUploadSecurity };
var PostImagesUpload200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostImagesUpload200ApplicationJson, _super);
    function PostImagesUpload200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", shared.ImagePrivate)
    ], PostImagesUpload200ApplicationJson.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=upload_to" }),
        __metadata("design:type", String)
    ], PostImagesUpload200ApplicationJson.prototype, "uploadTo", void 0);
    return PostImagesUpload200ApplicationJson;
}(SpeakeasyBase));
export { PostImagesUpload200ApplicationJson };
var PostImagesUploadDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(PostImagesUploadDefaultApplicationJson, _super);
    function PostImagesUploadDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], PostImagesUploadDefaultApplicationJson.prototype, "errors", void 0);
    return PostImagesUploadDefaultApplicationJson;
}(SpeakeasyBase));
export { PostImagesUploadDefaultApplicationJson };
var PostImagesUploadRequest = /** @class */ (function (_super) {
    __extends(PostImagesUploadRequest, _super);
    function PostImagesUploadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostImagesUploadRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostImagesUploadRequestBody)
    ], PostImagesUploadRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostImagesUploadSecurity)
    ], PostImagesUploadRequest.prototype, "security", void 0);
    return PostImagesUploadRequest;
}(SpeakeasyBase));
export { PostImagesUploadRequest };
var PostImagesUploadResponse = /** @class */ (function (_super) {
    __extends(PostImagesUploadResponse, _super);
    function PostImagesUploadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostImagesUploadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostImagesUpload200ApplicationJson)
    ], PostImagesUploadResponse.prototype, "postImagesUpload200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostImagesUploadDefaultApplicationJson)
    ], PostImagesUploadResponse.prototype, "postImagesUploadDefaultApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostImagesUploadResponse.prototype, "statusCode", void 0);
    return PostImagesUploadResponse;
}(SpeakeasyBase));
export { PostImagesUploadResponse };
