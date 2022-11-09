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
var ReferencesCountriesByCountryCodeGetPathParams = /** @class */ (function (_super) {
    __extends(ReferencesCountriesByCountryCodeGetPathParams, _super);
    function ReferencesCountriesByCountryCodeGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=countryCode" }),
        __metadata("design:type", String)
    ], ReferencesCountriesByCountryCodeGetPathParams.prototype, "countryCode", void 0);
    return ReferencesCountriesByCountryCodeGetPathParams;
}(SpeakeasyBase));
export { ReferencesCountriesByCountryCodeGetPathParams };
var ReferencesCountriesByCountryCodeGetQueryParams = /** @class */ (function (_super) {
    __extends(ReferencesCountriesByCountryCodeGetQueryParams, _super);
    function ReferencesCountriesByCountryCodeGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], ReferencesCountriesByCountryCodeGetQueryParams.prototype, "lang", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", String)
    ], ReferencesCountriesByCountryCodeGetQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], ReferencesCountriesByCountryCodeGetQueryParams.prototype, "offset", void 0);
    return ReferencesCountriesByCountryCodeGetQueryParams;
}(SpeakeasyBase));
export { ReferencesCountriesByCountryCodeGetQueryParams };
var ReferencesCountriesByCountryCodeGetHeaders = /** @class */ (function (_super) {
    __extends(ReferencesCountriesByCountryCodeGetHeaders, _super);
    function ReferencesCountriesByCountryCodeGetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], ReferencesCountriesByCountryCodeGetHeaders.prototype, "accept", void 0);
    return ReferencesCountriesByCountryCodeGetHeaders;
}(SpeakeasyBase));
export { ReferencesCountriesByCountryCodeGetHeaders };
var ReferencesCountriesByCountryCodeGetSecurity = /** @class */ (function (_super) {
    __extends(ReferencesCountriesByCountryCodeGetSecurity, _super);
    function ReferencesCountriesByCountryCodeGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAuth)
    ], ReferencesCountriesByCountryCodeGetSecurity.prototype, "auth", void 0);
    return ReferencesCountriesByCountryCodeGetSecurity;
}(SpeakeasyBase));
export { ReferencesCountriesByCountryCodeGetSecurity };
var ReferencesCountriesByCountryCodeGetRequest = /** @class */ (function (_super) {
    __extends(ReferencesCountriesByCountryCodeGetRequest, _super);
    function ReferencesCountriesByCountryCodeGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ReferencesCountriesByCountryCodeGetPathParams)
    ], ReferencesCountriesByCountryCodeGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ReferencesCountriesByCountryCodeGetQueryParams)
    ], ReferencesCountriesByCountryCodeGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ReferencesCountriesByCountryCodeGetHeaders)
    ], ReferencesCountriesByCountryCodeGetRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ReferencesCountriesByCountryCodeGetSecurity)
    ], ReferencesCountriesByCountryCodeGetRequest.prototype, "security", void 0);
    return ReferencesCountriesByCountryCodeGetRequest;
}(SpeakeasyBase));
export { ReferencesCountriesByCountryCodeGetRequest };
var ReferencesCountriesByCountryCodeGetResponse = /** @class */ (function (_super) {
    __extends(ReferencesCountriesByCountryCodeGetResponse, _super);
    function ReferencesCountriesByCountryCodeGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ReferencesCountriesByCountryCodeGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], ReferencesCountriesByCountryCodeGetResponse.prototype, "referencesCountriesByCountryCodeGet200ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ReferencesCountriesByCountryCodeGetResponse.prototype, "statusCode", void 0);
    return ReferencesCountriesByCountryCodeGetResponse;
}(SpeakeasyBase));
export { ReferencesCountriesByCountryCodeGetResponse };
