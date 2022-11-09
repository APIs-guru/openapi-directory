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
var CountriesGetV2CountriesGetQueryParams = /** @class */ (function (_super) {
    __extends(CountriesGetV2CountriesGetQueryParams, _super);
    function CountriesGetV2CountriesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", Array)
    ], CountriesGetV2CountriesGetQueryParams.prototype, "country", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=country_id" }),
        __metadata("design:type", String)
    ], CountriesGetV2CountriesGetQueryParams.prototype, "countryId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], CountriesGetV2CountriesGetQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], CountriesGetV2CountriesGetQueryParams.prototype, "offset", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=order_by" }),
        __metadata("design:type", String)
    ], CountriesGetV2CountriesGetQueryParams.prototype, "orderBy", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], CountriesGetV2CountriesGetQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], CountriesGetV2CountriesGetQueryParams.prototype, "sort", void 0);
    return CountriesGetV2CountriesGetQueryParams;
}(SpeakeasyBase));
export { CountriesGetV2CountriesGetQueryParams };
var CountriesGetV2CountriesGetRequest = /** @class */ (function (_super) {
    __extends(CountriesGetV2CountriesGetRequest, _super);
    function CountriesGetV2CountriesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CountriesGetV2CountriesGetQueryParams)
    ], CountriesGetV2CountriesGetRequest.prototype, "queryParams", void 0);
    return CountriesGetV2CountriesGetRequest;
}(SpeakeasyBase));
export { CountriesGetV2CountriesGetRequest };
var CountriesGetV2CountriesGetResponse = /** @class */ (function (_super) {
    __extends(CountriesGetV2CountriesGetResponse, _super);
    function CountriesGetV2CountriesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CountriesGetV2CountriesGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.HttpValidationError)
    ], CountriesGetV2CountriesGetResponse.prototype, "httpValidationError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.OpenAqCountriesResult)
    ], CountriesGetV2CountriesGetResponse.prototype, "openAqCountriesResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CountriesGetV2CountriesGetResponse.prototype, "statusCode", void 0);
    return CountriesGetV2CountriesGetResponse;
}(SpeakeasyBase));
export { CountriesGetV2CountriesGetResponse };
