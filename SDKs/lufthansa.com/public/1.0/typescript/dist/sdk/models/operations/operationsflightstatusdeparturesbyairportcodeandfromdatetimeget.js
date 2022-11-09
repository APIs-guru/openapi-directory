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
var OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetPathParams = /** @class */ (function (_super) {
    __extends(OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetPathParams, _super);
    function OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=airportCode" }),
        __metadata("design:type", String)
    ], OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetPathParams.prototype, "airportCode", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=fromDateTime" }),
        __metadata("design:type", String)
    ], OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetPathParams.prototype, "fromDateTime", void 0);
    return OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetPathParams;
}(SpeakeasyBase));
export { OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetPathParams };
var OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetQueryParams = /** @class */ (function (_super) {
    __extends(OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetQueryParams, _super);
    function OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", String)
    ], OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetQueryParams.prototype, "offset", void 0);
    return OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetQueryParams;
}(SpeakeasyBase));
export { OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetQueryParams };
var OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetHeaders = /** @class */ (function (_super) {
    __extends(OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetHeaders, _super);
    function OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetHeaders.prototype, "accept", void 0);
    return OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetHeaders;
}(SpeakeasyBase));
export { OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetHeaders };
var OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetSecurity = /** @class */ (function (_super) {
    __extends(OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetSecurity, _super);
    function OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAuth)
    ], OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetSecurity.prototype, "auth", void 0);
    return OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetSecurity;
}(SpeakeasyBase));
export { OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetSecurity };
var OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetRequest = /** @class */ (function (_super) {
    __extends(OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetRequest, _super);
    function OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetPathParams)
    ], OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetQueryParams)
    ], OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetHeaders)
    ], OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetSecurity)
    ], OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetRequest.prototype, "security", void 0);
    return OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetRequest;
}(SpeakeasyBase));
export { OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetRequest };
var OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetResponse = /** @class */ (function (_super) {
    __extends(OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetResponse, _super);
    function OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetResponse.prototype, "operationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet200ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetResponse.prototype, "statusCode", void 0);
    return OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetResponse;
}(SpeakeasyBase));
export { OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetResponse };
