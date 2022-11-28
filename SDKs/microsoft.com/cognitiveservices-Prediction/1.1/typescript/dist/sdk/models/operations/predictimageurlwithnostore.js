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
var PredictImageUrlWithNoStorePathParams = /** @class */ (function (_super) {
    __extends(PredictImageUrlWithNoStorePathParams, _super);
    function PredictImageUrlWithNoStorePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], PredictImageUrlWithNoStorePathParams.prototype, "projectId", void 0);
    return PredictImageUrlWithNoStorePathParams;
}(SpeakeasyBase));
export { PredictImageUrlWithNoStorePathParams };
var PredictImageUrlWithNoStoreQueryParams = /** @class */ (function (_super) {
    __extends(PredictImageUrlWithNoStoreQueryParams, _super);
    function PredictImageUrlWithNoStoreQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=application" }),
        __metadata("design:type", String)
    ], PredictImageUrlWithNoStoreQueryParams.prototype, "application", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=iterationId" }),
        __metadata("design:type", String)
    ], PredictImageUrlWithNoStoreQueryParams.prototype, "iterationId", void 0);
    return PredictImageUrlWithNoStoreQueryParams;
}(SpeakeasyBase));
export { PredictImageUrlWithNoStoreQueryParams };
var PredictImageUrlWithNoStoreHeaders = /** @class */ (function (_super) {
    __extends(PredictImageUrlWithNoStoreHeaders, _super);
    function PredictImageUrlWithNoStoreHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Prediction-Key" }),
        __metadata("design:type", String)
    ], PredictImageUrlWithNoStoreHeaders.prototype, "predictionKey", void 0);
    return PredictImageUrlWithNoStoreHeaders;
}(SpeakeasyBase));
export { PredictImageUrlWithNoStoreHeaders };
var PredictImageUrlWithNoStoreRequests = /** @class */ (function (_super) {
    __extends(PredictImageUrlWithNoStoreRequests, _super);
    function PredictImageUrlWithNoStoreRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PredictImageUrlWithNoStoreRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ImageUrl)
    ], PredictImageUrlWithNoStoreRequests.prototype, "imageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.ImageUrl)
    ], PredictImageUrlWithNoStoreRequests.prototype, "imageUrl1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ImageUrl)
    ], PredictImageUrlWithNoStoreRequests.prototype, "imageUrl2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PredictImageUrlWithNoStoreRequests.prototype, "textXml", void 0);
    return PredictImageUrlWithNoStoreRequests;
}(SpeakeasyBase));
export { PredictImageUrlWithNoStoreRequests };
var PredictImageUrlWithNoStoreRequest = /** @class */ (function (_super) {
    __extends(PredictImageUrlWithNoStoreRequest, _super);
    function PredictImageUrlWithNoStoreRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PredictImageUrlWithNoStorePathParams)
    ], PredictImageUrlWithNoStoreRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PredictImageUrlWithNoStoreQueryParams)
    ], PredictImageUrlWithNoStoreRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PredictImageUrlWithNoStoreHeaders)
    ], PredictImageUrlWithNoStoreRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PredictImageUrlWithNoStoreRequests)
    ], PredictImageUrlWithNoStoreRequest.prototype, "request", void 0);
    return PredictImageUrlWithNoStoreRequest;
}(SpeakeasyBase));
export { PredictImageUrlWithNoStoreRequest };
var PredictImageUrlWithNoStoreResponse = /** @class */ (function (_super) {
    __extends(PredictImageUrlWithNoStoreResponse, _super);
    function PredictImageUrlWithNoStoreResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PredictImageUrlWithNoStoreResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PredictImageUrlWithNoStoreResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ImagePredictionResultModel)
    ], PredictImageUrlWithNoStoreResponse.prototype, "imagePredictionResultModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PredictImageUrlWithNoStoreResponse.prototype, "statusCode", void 0);
    return PredictImageUrlWithNoStoreResponse;
}(SpeakeasyBase));
export { PredictImageUrlWithNoStoreResponse };
