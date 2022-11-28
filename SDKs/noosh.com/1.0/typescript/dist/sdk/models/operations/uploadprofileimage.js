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
var UploadProfileImagePathParams = /** @class */ (function (_super) {
    __extends(UploadProfileImagePathParams, _super);
    function UploadProfileImagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" }),
        __metadata("design:type", String)
    ], UploadProfileImagePathParams.prototype, "workgroupId", void 0);
    return UploadProfileImagePathParams;
}(SpeakeasyBase));
export { UploadProfileImagePathParams };
var UploadProfileImageRequests = /** @class */ (function (_super) {
    __extends(UploadProfileImageRequests, _super);
    function UploadProfileImageRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], UploadProfileImageRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-yaml" }),
        __metadata("design:type", Uint8Array)
    ], UploadProfileImageRequests.prototype, "applicationXYaml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/csv" }),
        __metadata("design:type", Uint8Array)
    ], UploadProfileImageRequests.prototype, "textCsv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], UploadProfileImageRequests.prototype, "textXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/x-yaml" }),
        __metadata("design:type", Uint8Array)
    ], UploadProfileImageRequests.prototype, "textXYaml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=*/*" }),
        __metadata("design:type", Uint8Array)
    ], UploadProfileImageRequests.prototype, "wildcard", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Uint8Array)
    ], UploadProfileImageRequests.prototype, "binaryString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-json-smile" }),
        __metadata("design:type", Uint8Array)
    ], UploadProfileImageRequests.prototype, "binaryString1", void 0);
    return UploadProfileImageRequests;
}(SpeakeasyBase));
export { UploadProfileImageRequests };
var UploadProfileImageRequest = /** @class */ (function (_super) {
    __extends(UploadProfileImageRequest, _super);
    function UploadProfileImageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UploadProfileImagePathParams)
    ], UploadProfileImageRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UploadProfileImageRequests)
    ], UploadProfileImageRequest.prototype, "request", void 0);
    return UploadProfileImageRequest;
}(SpeakeasyBase));
export { UploadProfileImageRequest };
var UploadProfileImageResponse = /** @class */ (function (_super) {
    __extends(UploadProfileImageResponse, _super);
    function UploadProfileImageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], UploadProfileImageResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UploadProfileImageResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UploadProfileImageResponse.prototype, "httpStatusVo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UploadProfileImageResponse.prototype, "profileImageVo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UploadProfileImageResponse.prototype, "statusCode", void 0);
    return UploadProfileImageResponse;
}(SpeakeasyBase));
export { UploadProfileImageResponse };
