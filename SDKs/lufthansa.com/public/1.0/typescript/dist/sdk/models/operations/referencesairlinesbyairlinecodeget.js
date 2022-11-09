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
var ReferencesAirlinesByAirlineCodeGetPathParams = /** @class */ (function (_super) {
    __extends(ReferencesAirlinesByAirlineCodeGetPathParams, _super);
    function ReferencesAirlinesByAirlineCodeGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=airlineCode" }),
        __metadata("design:type", String)
    ], ReferencesAirlinesByAirlineCodeGetPathParams.prototype, "airlineCode", void 0);
    return ReferencesAirlinesByAirlineCodeGetPathParams;
}(SpeakeasyBase));
export { ReferencesAirlinesByAirlineCodeGetPathParams };
var ReferencesAirlinesByAirlineCodeGetQueryParams = /** @class */ (function (_super) {
    __extends(ReferencesAirlinesByAirlineCodeGetQueryParams, _super);
    function ReferencesAirlinesByAirlineCodeGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", String)
    ], ReferencesAirlinesByAirlineCodeGetQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], ReferencesAirlinesByAirlineCodeGetQueryParams.prototype, "offset", void 0);
    return ReferencesAirlinesByAirlineCodeGetQueryParams;
}(SpeakeasyBase));
export { ReferencesAirlinesByAirlineCodeGetQueryParams };
var ReferencesAirlinesByAirlineCodeGetHeaders = /** @class */ (function (_super) {
    __extends(ReferencesAirlinesByAirlineCodeGetHeaders, _super);
    function ReferencesAirlinesByAirlineCodeGetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], ReferencesAirlinesByAirlineCodeGetHeaders.prototype, "accept", void 0);
    return ReferencesAirlinesByAirlineCodeGetHeaders;
}(SpeakeasyBase));
export { ReferencesAirlinesByAirlineCodeGetHeaders };
var ReferencesAirlinesByAirlineCodeGetSecurity = /** @class */ (function (_super) {
    __extends(ReferencesAirlinesByAirlineCodeGetSecurity, _super);
    function ReferencesAirlinesByAirlineCodeGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAuth)
    ], ReferencesAirlinesByAirlineCodeGetSecurity.prototype, "auth", void 0);
    return ReferencesAirlinesByAirlineCodeGetSecurity;
}(SpeakeasyBase));
export { ReferencesAirlinesByAirlineCodeGetSecurity };
var ReferencesAirlinesByAirlineCodeGetRequest = /** @class */ (function (_super) {
    __extends(ReferencesAirlinesByAirlineCodeGetRequest, _super);
    function ReferencesAirlinesByAirlineCodeGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ReferencesAirlinesByAirlineCodeGetPathParams)
    ], ReferencesAirlinesByAirlineCodeGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ReferencesAirlinesByAirlineCodeGetQueryParams)
    ], ReferencesAirlinesByAirlineCodeGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ReferencesAirlinesByAirlineCodeGetHeaders)
    ], ReferencesAirlinesByAirlineCodeGetRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ReferencesAirlinesByAirlineCodeGetSecurity)
    ], ReferencesAirlinesByAirlineCodeGetRequest.prototype, "security", void 0);
    return ReferencesAirlinesByAirlineCodeGetRequest;
}(SpeakeasyBase));
export { ReferencesAirlinesByAirlineCodeGetRequest };
var ReferencesAirlinesByAirlineCodeGetResponse = /** @class */ (function (_super) {
    __extends(ReferencesAirlinesByAirlineCodeGetResponse, _super);
    function ReferencesAirlinesByAirlineCodeGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ReferencesAirlinesByAirlineCodeGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], ReferencesAirlinesByAirlineCodeGetResponse.prototype, "referencesAirlinesByAirlineCodeGet200ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ReferencesAirlinesByAirlineCodeGetResponse.prototype, "statusCode", void 0);
    return ReferencesAirlinesByAirlineCodeGetResponse;
}(SpeakeasyBase));
export { ReferencesAirlinesByAirlineCodeGetResponse };
