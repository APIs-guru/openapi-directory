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
var PhotoControllerGetPhotoDownloadPathParams = /** @class */ (function (_super) {
    __extends(PhotoControllerGetPhotoDownloadPathParams, _super);
    function PhotoControllerGetPhotoDownloadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shortName" }),
        __metadata("design:type", String)
    ], PhotoControllerGetPhotoDownloadPathParams.prototype, "shortName", void 0);
    return PhotoControllerGetPhotoDownloadPathParams;
}(SpeakeasyBase));
export { PhotoControllerGetPhotoDownloadPathParams };
var PhotoControllerGetPhotoDownloadQueryParams = /** @class */ (function (_super) {
    __extends(PhotoControllerGetPhotoDownloadQueryParams, _super);
    function PhotoControllerGetPhotoDownloadQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=height" }),
        __metadata("design:type", Number)
    ], PhotoControllerGetPhotoDownloadQueryParams.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=photoID" }),
        __metadata("design:type", String)
    ], PhotoControllerGetPhotoDownloadQueryParams.prototype, "photoId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], PhotoControllerGetPhotoDownloadQueryParams.prototype, "token", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=width" }),
        __metadata("design:type", Number)
    ], PhotoControllerGetPhotoDownloadQueryParams.prototype, "width", void 0);
    return PhotoControllerGetPhotoDownloadQueryParams;
}(SpeakeasyBase));
export { PhotoControllerGetPhotoDownloadQueryParams };
var PhotoControllerGetPhotoDownloadRequest = /** @class */ (function (_super) {
    __extends(PhotoControllerGetPhotoDownloadRequest, _super);
    function PhotoControllerGetPhotoDownloadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PhotoControllerGetPhotoDownloadPathParams)
    ], PhotoControllerGetPhotoDownloadRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PhotoControllerGetPhotoDownloadQueryParams)
    ], PhotoControllerGetPhotoDownloadRequest.prototype, "queryParams", void 0);
    return PhotoControllerGetPhotoDownloadRequest;
}(SpeakeasyBase));
export { PhotoControllerGetPhotoDownloadRequest };
var PhotoControllerGetPhotoDownloadResponse = /** @class */ (function (_super) {
    __extends(PhotoControllerGetPhotoDownloadResponse, _super);
    function PhotoControllerGetPhotoDownloadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PhotoControllerGetPhotoDownloadResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PhotoControllerGetPhotoDownloadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PhotoControllerGetPhotoDownloadResponse.prototype, "object", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PhotoControllerGetPhotoDownloadResponse.prototype, "statusCode", void 0);
    return PhotoControllerGetPhotoDownloadResponse;
}(SpeakeasyBase));
export { PhotoControllerGetPhotoDownloadResponse };
