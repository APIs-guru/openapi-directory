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
var RetrievePricingAllCountriesPathParams = /** @class */ (function (_super) {
    __extends(RetrievePricingAllCountriesPathParams, _super);
    function RetrievePricingAllCountriesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=type" }),
        __metadata("design:type", String)
    ], RetrievePricingAllCountriesPathParams.prototype, "type", void 0);
    return RetrievePricingAllCountriesPathParams;
}(SpeakeasyBase));
export { RetrievePricingAllCountriesPathParams };
var RetrievePricingAllCountriesQueryParams = /** @class */ (function (_super) {
    __extends(RetrievePricingAllCountriesQueryParams, _super);
    function RetrievePricingAllCountriesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], RetrievePricingAllCountriesQueryParams.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=api_secret" }),
        __metadata("design:type", String)
    ], RetrievePricingAllCountriesQueryParams.prototype, "apiSecret", void 0);
    return RetrievePricingAllCountriesQueryParams;
}(SpeakeasyBase));
export { RetrievePricingAllCountriesQueryParams };
var RetrievePricingAllCountriesRequest = /** @class */ (function (_super) {
    __extends(RetrievePricingAllCountriesRequest, _super);
    function RetrievePricingAllCountriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", RetrievePricingAllCountriesPathParams)
    ], RetrievePricingAllCountriesRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", RetrievePricingAllCountriesQueryParams)
    ], RetrievePricingAllCountriesRequest.prototype, "queryParams", void 0);
    return RetrievePricingAllCountriesRequest;
}(SpeakeasyBase));
export { RetrievePricingAllCountriesRequest };
var RetrievePricingAllCountries400ApplicationJsonInvalidParameters = /** @class */ (function (_super) {
    __extends(RetrievePricingAllCountries400ApplicationJsonInvalidParameters, _super);
    function RetrievePricingAllCountries400ApplicationJsonInvalidParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], RetrievePricingAllCountries400ApplicationJsonInvalidParameters.prototype, "message", void 0);
    __decorate([
        Metadata({ data: "json, name=parameter" }),
        __metadata("design:type", String)
    ], RetrievePricingAllCountries400ApplicationJsonInvalidParameters.prototype, "parameter", void 0);
    return RetrievePricingAllCountries400ApplicationJsonInvalidParameters;
}(SpeakeasyBase));
export { RetrievePricingAllCountries400ApplicationJsonInvalidParameters };
var RetrievePricingAllCountries400ApplicationJson = /** @class */ (function (_super) {
    __extends(RetrievePricingAllCountries400ApplicationJson, _super);
    function RetrievePricingAllCountries400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error_title" }),
        __metadata("design:type", String)
    ], RetrievePricingAllCountries400ApplicationJson.prototype, "errorTitle", void 0);
    __decorate([
        Metadata({ data: "json, name=invalid_parameters" }),
        __metadata("design:type", RetrievePricingAllCountries400ApplicationJsonInvalidParameters)
    ], RetrievePricingAllCountries400ApplicationJson.prototype, "invalidParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RetrievePricingAllCountries400ApplicationJson.prototype, "type", void 0);
    return RetrievePricingAllCountries400ApplicationJson;
}(SpeakeasyBase));
export { RetrievePricingAllCountries400ApplicationJson };
var RetrievePricingAllCountries401ApplicationJson = /** @class */ (function (_super) {
    __extends(RetrievePricingAllCountries401ApplicationJson, _super);
    function RetrievePricingAllCountries401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], RetrievePricingAllCountries401ApplicationJson.prototype, "code", void 0);
    __decorate([
        Metadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], RetrievePricingAllCountries401ApplicationJson.prototype, "currency", void 0);
    __decorate([
        Metadata({ data: "json, name=error-code-label" }),
        __metadata("design:type", String)
    ], RetrievePricingAllCountries401ApplicationJson.prototype, "errorCodeLabel", void 0);
    return RetrievePricingAllCountries401ApplicationJson;
}(SpeakeasyBase));
export { RetrievePricingAllCountries401ApplicationJson };
var RetrievePricingAllCountriesResponse = /** @class */ (function (_super) {
    __extends(RetrievePricingAllCountriesResponse, _super);
    function RetrievePricingAllCountriesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], RetrievePricingAllCountriesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RetrievePricingAllCountriesResponse.prototype, "pricingCountriesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], RetrievePricingAllCountriesResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", RetrievePricingAllCountries400ApplicationJson)
    ], RetrievePricingAllCountriesResponse.prototype, "retrievePricingAllCountries400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", RetrievePricingAllCountries401ApplicationJson)
    ], RetrievePricingAllCountriesResponse.prototype, "retrievePricingAllCountries401ApplicationJsonObject", void 0);
    return RetrievePricingAllCountriesResponse;
}(SpeakeasyBase));
export { RetrievePricingAllCountriesResponse };
