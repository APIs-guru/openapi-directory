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
var QuickTestImageUrlPathParams = /** @class */ (function (_super) {
    __extends(QuickTestImageUrlPathParams, _super);
    function QuickTestImageUrlPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], QuickTestImageUrlPathParams.prototype, "projectId", void 0);
    return QuickTestImageUrlPathParams;
}(SpeakeasyBase));
export { QuickTestImageUrlPathParams };
var QuickTestImageUrlQueryParams = /** @class */ (function (_super) {
    __extends(QuickTestImageUrlQueryParams, _super);
    function QuickTestImageUrlQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=iterationId" }),
        __metadata("design:type", String)
    ], QuickTestImageUrlQueryParams.prototype, "iterationId", void 0);
    return QuickTestImageUrlQueryParams;
}(SpeakeasyBase));
export { QuickTestImageUrlQueryParams };
var QuickTestImageUrlHeaders = /** @class */ (function (_super) {
    __extends(QuickTestImageUrlHeaders, _super);
    function QuickTestImageUrlHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" }),
        __metadata("design:type", String)
    ], QuickTestImageUrlHeaders.prototype, "trainingKey", void 0);
    return QuickTestImageUrlHeaders;
}(SpeakeasyBase));
export { QuickTestImageUrlHeaders };
var QuickTestImageUrlRequests = /** @class */ (function (_super) {
    __extends(QuickTestImageUrlRequests, _super);
    function QuickTestImageUrlRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], QuickTestImageUrlRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ImageUrl)
    ], QuickTestImageUrlRequests.prototype, "imageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.ImageUrl)
    ], QuickTestImageUrlRequests.prototype, "imageUrl1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ImageUrl)
    ], QuickTestImageUrlRequests.prototype, "imageUrl2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], QuickTestImageUrlRequests.prototype, "textXml", void 0);
    return QuickTestImageUrlRequests;
}(SpeakeasyBase));
export { QuickTestImageUrlRequests };
var QuickTestImageUrlRequest = /** @class */ (function (_super) {
    __extends(QuickTestImageUrlRequest, _super);
    function QuickTestImageUrlRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", QuickTestImageUrlPathParams)
    ], QuickTestImageUrlRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", QuickTestImageUrlQueryParams)
    ], QuickTestImageUrlRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", QuickTestImageUrlHeaders)
    ], QuickTestImageUrlRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", QuickTestImageUrlRequests)
    ], QuickTestImageUrlRequest.prototype, "request", void 0);
    return QuickTestImageUrlRequest;
}(SpeakeasyBase));
export { QuickTestImageUrlRequest };
var QuickTestImageUrlResponse = /** @class */ (function (_super) {
    __extends(QuickTestImageUrlResponse, _super);
    function QuickTestImageUrlResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], QuickTestImageUrlResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuickTestImageUrlResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ImagePredictionResult)
    ], QuickTestImageUrlResponse.prototype, "imagePredictionResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuickTestImageUrlResponse.prototype, "statusCode", void 0);
    return QuickTestImageUrlResponse;
}(SpeakeasyBase));
export { QuickTestImageUrlResponse };
