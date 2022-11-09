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
var OperationsSchedulesFromDateTimeByOriginAndDestinationGetPathParams = /** @class */ (function (_super) {
    __extends(OperationsSchedulesFromDateTimeByOriginAndDestinationGetPathParams, _super);
    function OperationsSchedulesFromDateTimeByOriginAndDestinationGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=destination" }),
        __metadata("design:type", String)
    ], OperationsSchedulesFromDateTimeByOriginAndDestinationGetPathParams.prototype, "destination", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=fromDateTime" }),
        __metadata("design:type", String)
    ], OperationsSchedulesFromDateTimeByOriginAndDestinationGetPathParams.prototype, "fromDateTime", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=origin" }),
        __metadata("design:type", String)
    ], OperationsSchedulesFromDateTimeByOriginAndDestinationGetPathParams.prototype, "origin", void 0);
    return OperationsSchedulesFromDateTimeByOriginAndDestinationGetPathParams;
}(SpeakeasyBase));
export { OperationsSchedulesFromDateTimeByOriginAndDestinationGetPathParams };
var OperationsSchedulesFromDateTimeByOriginAndDestinationGetQueryParams = /** @class */ (function (_super) {
    __extends(OperationsSchedulesFromDateTimeByOriginAndDestinationGetQueryParams, _super);
    function OperationsSchedulesFromDateTimeByOriginAndDestinationGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=directFlights" }),
        __metadata("design:type", Boolean)
    ], OperationsSchedulesFromDateTimeByOriginAndDestinationGetQueryParams.prototype, "directFlights", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", String)
    ], OperationsSchedulesFromDateTimeByOriginAndDestinationGetQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], OperationsSchedulesFromDateTimeByOriginAndDestinationGetQueryParams.prototype, "offset", void 0);
    return OperationsSchedulesFromDateTimeByOriginAndDestinationGetQueryParams;
}(SpeakeasyBase));
export { OperationsSchedulesFromDateTimeByOriginAndDestinationGetQueryParams };
var OperationsSchedulesFromDateTimeByOriginAndDestinationGetHeaders = /** @class */ (function (_super) {
    __extends(OperationsSchedulesFromDateTimeByOriginAndDestinationGetHeaders, _super);
    function OperationsSchedulesFromDateTimeByOriginAndDestinationGetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], OperationsSchedulesFromDateTimeByOriginAndDestinationGetHeaders.prototype, "accept", void 0);
    return OperationsSchedulesFromDateTimeByOriginAndDestinationGetHeaders;
}(SpeakeasyBase));
export { OperationsSchedulesFromDateTimeByOriginAndDestinationGetHeaders };
var OperationsSchedulesFromDateTimeByOriginAndDestinationGetSecurity = /** @class */ (function (_super) {
    __extends(OperationsSchedulesFromDateTimeByOriginAndDestinationGetSecurity, _super);
    function OperationsSchedulesFromDateTimeByOriginAndDestinationGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAuth)
    ], OperationsSchedulesFromDateTimeByOriginAndDestinationGetSecurity.prototype, "auth", void 0);
    return OperationsSchedulesFromDateTimeByOriginAndDestinationGetSecurity;
}(SpeakeasyBase));
export { OperationsSchedulesFromDateTimeByOriginAndDestinationGetSecurity };
var OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest = /** @class */ (function (_super) {
    __extends(OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest, _super);
    function OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", OperationsSchedulesFromDateTimeByOriginAndDestinationGetPathParams)
    ], OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OperationsSchedulesFromDateTimeByOriginAndDestinationGetQueryParams)
    ], OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OperationsSchedulesFromDateTimeByOriginAndDestinationGetHeaders)
    ], OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OperationsSchedulesFromDateTimeByOriginAndDestinationGetSecurity)
    ], OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest.prototype, "security", void 0);
    return OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest;
}(SpeakeasyBase));
export { OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest };
var OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse = /** @class */ (function (_super) {
    __extends(OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse, _super);
    function OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse.prototype, "operationsSchedulesFromDateTimeByOriginAndDestinationGet200ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse.prototype, "statusCode", void 0);
    return OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse;
}(SpeakeasyBase));
export { OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse };
