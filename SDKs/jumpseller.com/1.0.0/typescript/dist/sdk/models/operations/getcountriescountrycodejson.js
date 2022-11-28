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
var GetCountriesCountryCodeJsonPathParams = /** @class */ (function (_super) {
    __extends(GetCountriesCountryCodeJsonPathParams, _super);
    function GetCountriesCountryCodeJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=country_code" }),
        __metadata("design:type", String)
    ], GetCountriesCountryCodeJsonPathParams.prototype, "countryCode", void 0);
    return GetCountriesCountryCodeJsonPathParams;
}(SpeakeasyBase));
export { GetCountriesCountryCodeJsonPathParams };
var GetCountriesCountryCodeJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetCountriesCountryCodeJsonQueryParams, _super);
    function GetCountriesCountryCodeJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" }),
        __metadata("design:type", String)
    ], GetCountriesCountryCodeJsonQueryParams.prototype, "authtoken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" }),
        __metadata("design:type", String)
    ], GetCountriesCountryCodeJsonQueryParams.prototype, "login", void 0);
    return GetCountriesCountryCodeJsonQueryParams;
}(SpeakeasyBase));
export { GetCountriesCountryCodeJsonQueryParams };
var GetCountriesCountryCodeJsonRequest = /** @class */ (function (_super) {
    __extends(GetCountriesCountryCodeJsonRequest, _super);
    function GetCountriesCountryCodeJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCountriesCountryCodeJsonPathParams)
    ], GetCountriesCountryCodeJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCountriesCountryCodeJsonQueryParams)
    ], GetCountriesCountryCodeJsonRequest.prototype, "queryParams", void 0);
    return GetCountriesCountryCodeJsonRequest;
}(SpeakeasyBase));
export { GetCountriesCountryCodeJsonRequest };
var GetCountriesCountryCodeJsonResponse = /** @class */ (function (_super) {
    __extends(GetCountriesCountryCodeJsonResponse, _super);
    function GetCountriesCountryCodeJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCountriesCountryCodeJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetCountriesCountryCodeJsonResponse.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetCountriesCountryCodeJsonResponse.prototype, "notFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCountriesCountryCodeJsonResponse.prototype, "statusCode", void 0);
    return GetCountriesCountryCodeJsonResponse;
}(SpeakeasyBase));
export { GetCountriesCountryCodeJsonResponse };
