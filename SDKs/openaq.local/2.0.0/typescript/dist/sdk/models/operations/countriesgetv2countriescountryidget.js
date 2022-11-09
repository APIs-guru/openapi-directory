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
var CountriesGetV2CountriesCountryIdGetPathParams = /** @class */ (function (_super) {
    __extends(CountriesGetV2CountriesCountryIdGetPathParams, _super);
    function CountriesGetV2CountriesCountryIdGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=country_id" }),
        __metadata("design:type", String)
    ], CountriesGetV2CountriesCountryIdGetPathParams.prototype, "countryId", void 0);
    return CountriesGetV2CountriesCountryIdGetPathParams;
}(SpeakeasyBase));
export { CountriesGetV2CountriesCountryIdGetPathParams };
var CountriesGetV2CountriesCountryIdGetQueryParams = /** @class */ (function (_super) {
    __extends(CountriesGetV2CountriesCountryIdGetQueryParams, _super);
    function CountriesGetV2CountriesCountryIdGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", Array)
    ], CountriesGetV2CountriesCountryIdGetQueryParams.prototype, "country", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], CountriesGetV2CountriesCountryIdGetQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], CountriesGetV2CountriesCountryIdGetQueryParams.prototype, "offset", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=order_by" }),
        __metadata("design:type", String)
    ], CountriesGetV2CountriesCountryIdGetQueryParams.prototype, "orderBy", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], CountriesGetV2CountriesCountryIdGetQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], CountriesGetV2CountriesCountryIdGetQueryParams.prototype, "sort", void 0);
    return CountriesGetV2CountriesCountryIdGetQueryParams;
}(SpeakeasyBase));
export { CountriesGetV2CountriesCountryIdGetQueryParams };
var CountriesGetV2CountriesCountryIdGetRequest = /** @class */ (function (_super) {
    __extends(CountriesGetV2CountriesCountryIdGetRequest, _super);
    function CountriesGetV2CountriesCountryIdGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CountriesGetV2CountriesCountryIdGetPathParams)
    ], CountriesGetV2CountriesCountryIdGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CountriesGetV2CountriesCountryIdGetQueryParams)
    ], CountriesGetV2CountriesCountryIdGetRequest.prototype, "queryParams", void 0);
    return CountriesGetV2CountriesCountryIdGetRequest;
}(SpeakeasyBase));
export { CountriesGetV2CountriesCountryIdGetRequest };
var CountriesGetV2CountriesCountryIdGetResponse = /** @class */ (function (_super) {
    __extends(CountriesGetV2CountriesCountryIdGetResponse, _super);
    function CountriesGetV2CountriesCountryIdGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CountriesGetV2CountriesCountryIdGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.HttpValidationError)
    ], CountriesGetV2CountriesCountryIdGetResponse.prototype, "httpValidationError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.OpenAqCountriesResult)
    ], CountriesGetV2CountriesCountryIdGetResponse.prototype, "openAqCountriesResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CountriesGetV2CountriesCountryIdGetResponse.prototype, "statusCode", void 0);
    return CountriesGetV2CountriesCountryIdGetResponse;
}(SpeakeasyBase));
export { CountriesGetV2CountriesCountryIdGetResponse };
