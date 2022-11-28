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
var RetrievePrefixPricingPathParams = /** @class */ (function (_super) {
    __extends(RetrievePrefixPricingPathParams, _super);
    function RetrievePrefixPricingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=type" }),
        __metadata("design:type", String)
    ], RetrievePrefixPricingPathParams.prototype, "type", void 0);
    return RetrievePrefixPricingPathParams;
}(SpeakeasyBase));
export { RetrievePrefixPricingPathParams };
var RetrievePrefixPricingQueryParams = /** @class */ (function (_super) {
    __extends(RetrievePrefixPricingQueryParams, _super);
    function RetrievePrefixPricingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], RetrievePrefixPricingQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_secret" }),
        __metadata("design:type", String)
    ], RetrievePrefixPricingQueryParams.prototype, "apiSecret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prefix" }),
        __metadata("design:type", String)
    ], RetrievePrefixPricingQueryParams.prototype, "prefix", void 0);
    return RetrievePrefixPricingQueryParams;
}(SpeakeasyBase));
export { RetrievePrefixPricingQueryParams };
var RetrievePrefixPricing400ApplicationJsonInvalidParameters = /** @class */ (function (_super) {
    __extends(RetrievePrefixPricing400ApplicationJsonInvalidParameters, _super);
    function RetrievePrefixPricing400ApplicationJsonInvalidParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], RetrievePrefixPricing400ApplicationJsonInvalidParameters.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameter" }),
        __metadata("design:type", String)
    ], RetrievePrefixPricing400ApplicationJsonInvalidParameters.prototype, "parameter", void 0);
    return RetrievePrefixPricing400ApplicationJsonInvalidParameters;
}(SpeakeasyBase));
export { RetrievePrefixPricing400ApplicationJsonInvalidParameters };
var RetrievePrefixPricing400ApplicationJson = /** @class */ (function (_super) {
    __extends(RetrievePrefixPricing400ApplicationJson, _super);
    function RetrievePrefixPricing400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error_title" }),
        __metadata("design:type", String)
    ], RetrievePrefixPricing400ApplicationJson.prototype, "errorTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invalid_parameters" }),
        __metadata("design:type", RetrievePrefixPricing400ApplicationJsonInvalidParameters)
    ], RetrievePrefixPricing400ApplicationJson.prototype, "invalidParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RetrievePrefixPricing400ApplicationJson.prototype, "type", void 0);
    return RetrievePrefixPricing400ApplicationJson;
}(SpeakeasyBase));
export { RetrievePrefixPricing400ApplicationJson };
var RetrievePrefixPricing401ApplicationJson = /** @class */ (function (_super) {
    __extends(RetrievePrefixPricing401ApplicationJson, _super);
    function RetrievePrefixPricing401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], RetrievePrefixPricing401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], RetrievePrefixPricing401ApplicationJson.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error-code-label" }),
        __metadata("design:type", String)
    ], RetrievePrefixPricing401ApplicationJson.prototype, "errorCodeLabel", void 0);
    return RetrievePrefixPricing401ApplicationJson;
}(SpeakeasyBase));
export { RetrievePrefixPricing401ApplicationJson };
var RetrievePrefixPricingRequest = /** @class */ (function (_super) {
    __extends(RetrievePrefixPricingRequest, _super);
    function RetrievePrefixPricingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetrievePrefixPricingPathParams)
    ], RetrievePrefixPricingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetrievePrefixPricingQueryParams)
    ], RetrievePrefixPricingRequest.prototype, "queryParams", void 0);
    return RetrievePrefixPricingRequest;
}(SpeakeasyBase));
export { RetrievePrefixPricingRequest };
var RetrievePrefixPricingResponse = /** @class */ (function (_super) {
    __extends(RetrievePrefixPricingResponse, _super);
    function RetrievePrefixPricingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RetrievePrefixPricingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RetrievePrefixPricingResponse.prototype, "pricingCountriesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RetrievePrefixPricingResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetrievePrefixPricing400ApplicationJson)
    ], RetrievePrefixPricingResponse.prototype, "retrievePrefixPricing400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetrievePrefixPricing401ApplicationJson)
    ], RetrievePrefixPricingResponse.prototype, "retrievePrefixPricing401ApplicationJsonObject", void 0);
    return RetrievePrefixPricingResponse;
}(SpeakeasyBase));
export { RetrievePrefixPricingResponse };
