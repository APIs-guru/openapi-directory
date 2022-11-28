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
var QuickTestImagePathParams = /** @class */ (function (_super) {
    __extends(QuickTestImagePathParams, _super);
    function QuickTestImagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], QuickTestImagePathParams.prototype, "projectId", void 0);
    return QuickTestImagePathParams;
}(SpeakeasyBase));
export { QuickTestImagePathParams };
var QuickTestImageQueryParams = /** @class */ (function (_super) {
    __extends(QuickTestImageQueryParams, _super);
    function QuickTestImageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=iterationId" }),
        __metadata("design:type", String)
    ], QuickTestImageQueryParams.prototype, "iterationId", void 0);
    return QuickTestImageQueryParams;
}(SpeakeasyBase));
export { QuickTestImageQueryParams };
var QuickTestImageHeaders = /** @class */ (function (_super) {
    __extends(QuickTestImageHeaders, _super);
    function QuickTestImageHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" }),
        __metadata("design:type", String)
    ], QuickTestImageHeaders.prototype, "trainingKey", void 0);
    return QuickTestImageHeaders;
}(SpeakeasyBase));
export { QuickTestImageHeaders };
var QuickTestImageRequestBodyImageData = /** @class */ (function (_super) {
    __extends(QuickTestImageRequestBodyImageData, _super);
    function QuickTestImageRequestBodyImageData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], QuickTestImageRequestBodyImageData.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=imageData" }),
        __metadata("design:type", String)
    ], QuickTestImageRequestBodyImageData.prototype, "imageData", void 0);
    return QuickTestImageRequestBodyImageData;
}(SpeakeasyBase));
export { QuickTestImageRequestBodyImageData };
var QuickTestImageRequestBody = /** @class */ (function (_super) {
    __extends(QuickTestImageRequestBody, _super);
    function QuickTestImageRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", QuickTestImageRequestBodyImageData)
    ], QuickTestImageRequestBody.prototype, "imageData", void 0);
    return QuickTestImageRequestBody;
}(SpeakeasyBase));
export { QuickTestImageRequestBody };
var QuickTestImageRequest = /** @class */ (function (_super) {
    __extends(QuickTestImageRequest, _super);
    function QuickTestImageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", QuickTestImagePathParams)
    ], QuickTestImageRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", QuickTestImageQueryParams)
    ], QuickTestImageRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", QuickTestImageHeaders)
    ], QuickTestImageRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", QuickTestImageRequestBody)
    ], QuickTestImageRequest.prototype, "request", void 0);
    return QuickTestImageRequest;
}(SpeakeasyBase));
export { QuickTestImageRequest };
var QuickTestImageResponse = /** @class */ (function (_super) {
    __extends(QuickTestImageResponse, _super);
    function QuickTestImageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], QuickTestImageResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuickTestImageResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ImagePredictionResult)
    ], QuickTestImageResponse.prototype, "imagePredictionResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuickTestImageResponse.prototype, "statusCode", void 0);
    return QuickTestImageResponse;
}(SpeakeasyBase));
export { QuickTestImageResponse };
