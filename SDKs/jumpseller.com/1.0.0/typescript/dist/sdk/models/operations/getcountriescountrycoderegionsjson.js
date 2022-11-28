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
var GetCountriesCountryCodeRegionsJsonPathParams = /** @class */ (function (_super) {
    __extends(GetCountriesCountryCodeRegionsJsonPathParams, _super);
    function GetCountriesCountryCodeRegionsJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=country_code" }),
        __metadata("design:type", String)
    ], GetCountriesCountryCodeRegionsJsonPathParams.prototype, "countryCode", void 0);
    return GetCountriesCountryCodeRegionsJsonPathParams;
}(SpeakeasyBase));
export { GetCountriesCountryCodeRegionsJsonPathParams };
var GetCountriesCountryCodeRegionsJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetCountriesCountryCodeRegionsJsonQueryParams, _super);
    function GetCountriesCountryCodeRegionsJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" }),
        __metadata("design:type", String)
    ], GetCountriesCountryCodeRegionsJsonQueryParams.prototype, "authtoken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" }),
        __metadata("design:type", String)
    ], GetCountriesCountryCodeRegionsJsonQueryParams.prototype, "login", void 0);
    return GetCountriesCountryCodeRegionsJsonQueryParams;
}(SpeakeasyBase));
export { GetCountriesCountryCodeRegionsJsonQueryParams };
var GetCountriesCountryCodeRegionsJsonRequest = /** @class */ (function (_super) {
    __extends(GetCountriesCountryCodeRegionsJsonRequest, _super);
    function GetCountriesCountryCodeRegionsJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCountriesCountryCodeRegionsJsonPathParams)
    ], GetCountriesCountryCodeRegionsJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCountriesCountryCodeRegionsJsonQueryParams)
    ], GetCountriesCountryCodeRegionsJsonRequest.prototype, "queryParams", void 0);
    return GetCountriesCountryCodeRegionsJsonRequest;
}(SpeakeasyBase));
export { GetCountriesCountryCodeRegionsJsonRequest };
var GetCountriesCountryCodeRegionsJsonResponse = /** @class */ (function (_super) {
    __extends(GetCountriesCountryCodeRegionsJsonResponse, _super);
    function GetCountriesCountryCodeRegionsJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCountriesCountryCodeRegionsJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetCountriesCountryCodeRegionsJsonResponse.prototype, "notFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], GetCountriesCountryCodeRegionsJsonResponse.prototype, "regions", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCountriesCountryCodeRegionsJsonResponse.prototype, "statusCode", void 0);
    return GetCountriesCountryCodeRegionsJsonResponse;
}(SpeakeasyBase));
export { GetCountriesCountryCodeRegionsJsonResponse };
