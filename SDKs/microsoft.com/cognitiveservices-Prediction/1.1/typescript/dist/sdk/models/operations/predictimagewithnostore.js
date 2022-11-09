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
var PredictImageWithNoStorePathParams = /** @class */ (function (_super) {
    __extends(PredictImageWithNoStorePathParams, _super);
    function PredictImageWithNoStorePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], PredictImageWithNoStorePathParams.prototype, "projectId", void 0);
    return PredictImageWithNoStorePathParams;
}(SpeakeasyBase));
export { PredictImageWithNoStorePathParams };
var PredictImageWithNoStoreQueryParams = /** @class */ (function (_super) {
    __extends(PredictImageWithNoStoreQueryParams, _super);
    function PredictImageWithNoStoreQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=application" }),
        __metadata("design:type", String)
    ], PredictImageWithNoStoreQueryParams.prototype, "application", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=iterationId" }),
        __metadata("design:type", String)
    ], PredictImageWithNoStoreQueryParams.prototype, "iterationId", void 0);
    return PredictImageWithNoStoreQueryParams;
}(SpeakeasyBase));
export { PredictImageWithNoStoreQueryParams };
var PredictImageWithNoStoreHeaders = /** @class */ (function (_super) {
    __extends(PredictImageWithNoStoreHeaders, _super);
    function PredictImageWithNoStoreHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Prediction-Key" }),
        __metadata("design:type", String)
    ], PredictImageWithNoStoreHeaders.prototype, "predictionKey", void 0);
    return PredictImageWithNoStoreHeaders;
}(SpeakeasyBase));
export { PredictImageWithNoStoreHeaders };
var PredictImageWithNoStoreRequestBodyImageData = /** @class */ (function (_super) {
    __extends(PredictImageWithNoStoreRequestBodyImageData, _super);
    function PredictImageWithNoStoreRequestBodyImageData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], PredictImageWithNoStoreRequestBodyImageData.prototype, "content", void 0);
    __decorate([
        Metadata({ data: "multipart_form, name=imageData" }),
        __metadata("design:type", String)
    ], PredictImageWithNoStoreRequestBodyImageData.prototype, "imageData", void 0);
    return PredictImageWithNoStoreRequestBodyImageData;
}(SpeakeasyBase));
export { PredictImageWithNoStoreRequestBodyImageData };
var PredictImageWithNoStoreRequestBody = /** @class */ (function (_super) {
    __extends(PredictImageWithNoStoreRequestBody, _super);
    function PredictImageWithNoStoreRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", PredictImageWithNoStoreRequestBodyImageData)
    ], PredictImageWithNoStoreRequestBody.prototype, "imageData", void 0);
    return PredictImageWithNoStoreRequestBody;
}(SpeakeasyBase));
export { PredictImageWithNoStoreRequestBody };
var PredictImageWithNoStoreRequest = /** @class */ (function (_super) {
    __extends(PredictImageWithNoStoreRequest, _super);
    function PredictImageWithNoStoreRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PredictImageWithNoStorePathParams)
    ], PredictImageWithNoStoreRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PredictImageWithNoStoreQueryParams)
    ], PredictImageWithNoStoreRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PredictImageWithNoStoreHeaders)
    ], PredictImageWithNoStoreRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PredictImageWithNoStoreRequestBody)
    ], PredictImageWithNoStoreRequest.prototype, "request", void 0);
    return PredictImageWithNoStoreRequest;
}(SpeakeasyBase));
export { PredictImageWithNoStoreRequest };
var PredictImageWithNoStoreResponse = /** @class */ (function (_super) {
    __extends(PredictImageWithNoStoreResponse, _super);
    function PredictImageWithNoStoreResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PredictImageWithNoStoreResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PredictImageWithNoStoreResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ImagePredictionResultModel)
    ], PredictImageWithNoStoreResponse.prototype, "imagePredictionResultModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PredictImageWithNoStoreResponse.prototype, "statusCode", void 0);
    return PredictImageWithNoStoreResponse;
}(SpeakeasyBase));
export { PredictImageWithNoStoreResponse };
