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
var RetrievePricingCountryPathParams = /** @class */ (function (_super) {
    __extends(RetrievePricingCountryPathParams, _super);
    function RetrievePricingCountryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=type" }),
        __metadata("design:type", String)
    ], RetrievePricingCountryPathParams.prototype, "type", void 0);
    return RetrievePricingCountryPathParams;
}(SpeakeasyBase));
export { RetrievePricingCountryPathParams };
var RetrievePricingCountryQueryParams = /** @class */ (function (_super) {
    __extends(RetrievePricingCountryQueryParams, _super);
    function RetrievePricingCountryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], RetrievePricingCountryQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_secret" }),
        __metadata("design:type", String)
    ], RetrievePricingCountryQueryParams.prototype, "apiSecret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], RetrievePricingCountryQueryParams.prototype, "country", void 0);
    return RetrievePricingCountryQueryParams;
}(SpeakeasyBase));
export { RetrievePricingCountryQueryParams };
var RetrievePricingCountry400ApplicationJsonInvalidParameters = /** @class */ (function (_super) {
    __extends(RetrievePricingCountry400ApplicationJsonInvalidParameters, _super);
    function RetrievePricingCountry400ApplicationJsonInvalidParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], RetrievePricingCountry400ApplicationJsonInvalidParameters.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameter" }),
        __metadata("design:type", String)
    ], RetrievePricingCountry400ApplicationJsonInvalidParameters.prototype, "parameter", void 0);
    return RetrievePricingCountry400ApplicationJsonInvalidParameters;
}(SpeakeasyBase));
export { RetrievePricingCountry400ApplicationJsonInvalidParameters };
var RetrievePricingCountry400ApplicationJson = /** @class */ (function (_super) {
    __extends(RetrievePricingCountry400ApplicationJson, _super);
    function RetrievePricingCountry400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error_title" }),
        __metadata("design:type", String)
    ], RetrievePricingCountry400ApplicationJson.prototype, "errorTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invalid_parameters" }),
        __metadata("design:type", RetrievePricingCountry400ApplicationJsonInvalidParameters)
    ], RetrievePricingCountry400ApplicationJson.prototype, "invalidParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RetrievePricingCountry400ApplicationJson.prototype, "type", void 0);
    return RetrievePricingCountry400ApplicationJson;
}(SpeakeasyBase));
export { RetrievePricingCountry400ApplicationJson };
var RetrievePricingCountry401ApplicationJson = /** @class */ (function (_super) {
    __extends(RetrievePricingCountry401ApplicationJson, _super);
    function RetrievePricingCountry401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], RetrievePricingCountry401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], RetrievePricingCountry401ApplicationJson.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error-code-label" }),
        __metadata("design:type", String)
    ], RetrievePricingCountry401ApplicationJson.prototype, "errorCodeLabel", void 0);
    return RetrievePricingCountry401ApplicationJson;
}(SpeakeasyBase));
export { RetrievePricingCountry401ApplicationJson };
var RetrievePricingCountryRequest = /** @class */ (function (_super) {
    __extends(RetrievePricingCountryRequest, _super);
    function RetrievePricingCountryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetrievePricingCountryPathParams)
    ], RetrievePricingCountryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetrievePricingCountryQueryParams)
    ], RetrievePricingCountryRequest.prototype, "queryParams", void 0);
    return RetrievePricingCountryRequest;
}(SpeakeasyBase));
export { RetrievePricingCountryRequest };
var RetrievePricingCountryResponse = /** @class */ (function (_super) {
    __extends(RetrievePricingCountryResponse, _super);
    function RetrievePricingCountryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RetrievePricingCountryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RetrievePricingCountryResponse.prototype, "pricingCountryResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RetrievePricingCountryResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetrievePricingCountry400ApplicationJson)
    ], RetrievePricingCountryResponse.prototype, "retrievePricingCountry400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetrievePricingCountry401ApplicationJson)
    ], RetrievePricingCountryResponse.prototype, "retrievePricingCountry401ApplicationJsonObject", void 0);
    return RetrievePricingCountryResponse;
}(SpeakeasyBase));
export { RetrievePricingCountryResponse };
