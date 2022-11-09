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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var PredictImageUrlPathParams = /** @class */ (function (_super) {
    __extends(PredictImageUrlPathParams, _super);
    function PredictImageUrlPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], PredictImageUrlPathParams.prototype, "projectId", void 0);
    return PredictImageUrlPathParams;
}(SpeakeasyBase));
export { PredictImageUrlPathParams };
var PredictImageUrlQueryParams = /** @class */ (function (_super) {
    __extends(PredictImageUrlQueryParams, _super);
    function PredictImageUrlQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=application" }),
        __metadata("design:type", String)
    ], PredictImageUrlQueryParams.prototype, "application", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=iterationId" }),
        __metadata("design:type", String)
    ], PredictImageUrlQueryParams.prototype, "iterationId", void 0);
    return PredictImageUrlQueryParams;
}(SpeakeasyBase));
export { PredictImageUrlQueryParams };
var PredictImageUrlHeaders = /** @class */ (function (_super) {
    __extends(PredictImageUrlHeaders, _super);
    function PredictImageUrlHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Prediction-Key" }),
        __metadata("design:type", String)
    ], PredictImageUrlHeaders.prototype, "predictionKey", void 0);
    return PredictImageUrlHeaders;
}(SpeakeasyBase));
export { PredictImageUrlHeaders };
var PredictImageUrlRequests = /** @class */ (function (_super) {
    __extends(PredictImageUrlRequests, _super);
    function PredictImageUrlRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PredictImageUrlRequests.prototype, "applicationXml", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ImageUrl)
    ], PredictImageUrlRequests.prototype, "imageUrl", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.ImageUrl)
    ], PredictImageUrlRequests.prototype, "imageUrl1", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ImageUrl)
    ], PredictImageUrlRequests.prototype, "imageUrl2", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PredictImageUrlRequests.prototype, "textXml", void 0);
    return PredictImageUrlRequests;
}(SpeakeasyBase));
export { PredictImageUrlRequests };
var PredictImageUrlRequest = /** @class */ (function (_super) {
    __extends(PredictImageUrlRequest, _super);
    function PredictImageUrlRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PredictImageUrlPathParams)
    ], PredictImageUrlRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PredictImageUrlQueryParams)
    ], PredictImageUrlRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PredictImageUrlHeaders)
    ], PredictImageUrlRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PredictImageUrlRequests)
    ], PredictImageUrlRequest.prototype, "request", void 0);
    return PredictImageUrlRequest;
}(SpeakeasyBase));
export { PredictImageUrlRequest };
var PredictImageUrlResponse = /** @class */ (function (_super) {
    __extends(PredictImageUrlResponse, _super);
    function PredictImageUrlResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PredictImageUrlResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PredictImageUrlResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ImagePredictionResultModel)
    ], PredictImageUrlResponse.prototype, "imagePredictionResultModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PredictImageUrlResponse.prototype, "statusCode", void 0);
    return PredictImageUrlResponse;
}(SpeakeasyBase));
export { PredictImageUrlResponse };
