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
import * as shared from "../shared";
var ReferencesAirportsByAirportCodeGetPathParams = /** @class */ (function (_super) {
    __extends(ReferencesAirportsByAirportCodeGetPathParams, _super);
    function ReferencesAirportsByAirportCodeGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=airportCode" }),
        __metadata("design:type", String)
    ], ReferencesAirportsByAirportCodeGetPathParams.prototype, "airportCode", void 0);
    return ReferencesAirportsByAirportCodeGetPathParams;
}(SpeakeasyBase));
export { ReferencesAirportsByAirportCodeGetPathParams };
var ReferencesAirportsByAirportCodeGetQueryParams = /** @class */ (function (_super) {
    __extends(ReferencesAirportsByAirportCodeGetQueryParams, _super);
    function ReferencesAirportsByAirportCodeGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LHoperated" }),
        __metadata("design:type", Boolean)
    ], ReferencesAirportsByAirportCodeGetQueryParams.prototype, "lHoperated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], ReferencesAirportsByAirportCodeGetQueryParams.prototype, "lang", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", String)
    ], ReferencesAirportsByAirportCodeGetQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], ReferencesAirportsByAirportCodeGetQueryParams.prototype, "offset", void 0);
    return ReferencesAirportsByAirportCodeGetQueryParams;
}(SpeakeasyBase));
export { ReferencesAirportsByAirportCodeGetQueryParams };
var ReferencesAirportsByAirportCodeGetHeaders = /** @class */ (function (_super) {
    __extends(ReferencesAirportsByAirportCodeGetHeaders, _super);
    function ReferencesAirportsByAirportCodeGetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], ReferencesAirportsByAirportCodeGetHeaders.prototype, "accept", void 0);
    return ReferencesAirportsByAirportCodeGetHeaders;
}(SpeakeasyBase));
export { ReferencesAirportsByAirportCodeGetHeaders };
var ReferencesAirportsByAirportCodeGetSecurity = /** @class */ (function (_super) {
    __extends(ReferencesAirportsByAirportCodeGetSecurity, _super);
    function ReferencesAirportsByAirportCodeGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAuth)
    ], ReferencesAirportsByAirportCodeGetSecurity.prototype, "auth", void 0);
    return ReferencesAirportsByAirportCodeGetSecurity;
}(SpeakeasyBase));
export { ReferencesAirportsByAirportCodeGetSecurity };
var ReferencesAirportsByAirportCodeGetRequest = /** @class */ (function (_super) {
    __extends(ReferencesAirportsByAirportCodeGetRequest, _super);
    function ReferencesAirportsByAirportCodeGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReferencesAirportsByAirportCodeGetPathParams)
    ], ReferencesAirportsByAirportCodeGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReferencesAirportsByAirportCodeGetQueryParams)
    ], ReferencesAirportsByAirportCodeGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReferencesAirportsByAirportCodeGetHeaders)
    ], ReferencesAirportsByAirportCodeGetRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReferencesAirportsByAirportCodeGetSecurity)
    ], ReferencesAirportsByAirportCodeGetRequest.prototype, "security", void 0);
    return ReferencesAirportsByAirportCodeGetRequest;
}(SpeakeasyBase));
export { ReferencesAirportsByAirportCodeGetRequest };
var ReferencesAirportsByAirportCodeGetResponse = /** @class */ (function (_super) {
    __extends(ReferencesAirportsByAirportCodeGetResponse, _super);
    function ReferencesAirportsByAirportCodeGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AirportResponse)
    ], ReferencesAirportsByAirportCodeGetResponse.prototype, "airportResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReferencesAirportsByAirportCodeGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReferencesAirportsByAirportCodeGetResponse.prototype, "statusCode", void 0);
    return ReferencesAirportsByAirportCodeGetResponse;
}(SpeakeasyBase));
export { ReferencesAirportsByAirportCodeGetResponse };
