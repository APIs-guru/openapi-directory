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
var OperationsFlightstatusByFlightNumberAndDateGetPathParams = /** @class */ (function (_super) {
    __extends(OperationsFlightstatusByFlightNumberAndDateGetPathParams, _super);
    function OperationsFlightstatusByFlightNumberAndDateGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=date" }),
        __metadata("design:type", String)
    ], OperationsFlightstatusByFlightNumberAndDateGetPathParams.prototype, "date", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=flightNumber" }),
        __metadata("design:type", String)
    ], OperationsFlightstatusByFlightNumberAndDateGetPathParams.prototype, "flightNumber", void 0);
    return OperationsFlightstatusByFlightNumberAndDateGetPathParams;
}(SpeakeasyBase));
export { OperationsFlightstatusByFlightNumberAndDateGetPathParams };
var OperationsFlightstatusByFlightNumberAndDateGetQueryParams = /** @class */ (function (_super) {
    __extends(OperationsFlightstatusByFlightNumberAndDateGetQueryParams, _super);
    function OperationsFlightstatusByFlightNumberAndDateGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", String)
    ], OperationsFlightstatusByFlightNumberAndDateGetQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], OperationsFlightstatusByFlightNumberAndDateGetQueryParams.prototype, "offset", void 0);
    return OperationsFlightstatusByFlightNumberAndDateGetQueryParams;
}(SpeakeasyBase));
export { OperationsFlightstatusByFlightNumberAndDateGetQueryParams };
var OperationsFlightstatusByFlightNumberAndDateGetHeaders = /** @class */ (function (_super) {
    __extends(OperationsFlightstatusByFlightNumberAndDateGetHeaders, _super);
    function OperationsFlightstatusByFlightNumberAndDateGetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], OperationsFlightstatusByFlightNumberAndDateGetHeaders.prototype, "accept", void 0);
    return OperationsFlightstatusByFlightNumberAndDateGetHeaders;
}(SpeakeasyBase));
export { OperationsFlightstatusByFlightNumberAndDateGetHeaders };
var OperationsFlightstatusByFlightNumberAndDateGetSecurity = /** @class */ (function (_super) {
    __extends(OperationsFlightstatusByFlightNumberAndDateGetSecurity, _super);
    function OperationsFlightstatusByFlightNumberAndDateGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAuth)
    ], OperationsFlightstatusByFlightNumberAndDateGetSecurity.prototype, "auth", void 0);
    return OperationsFlightstatusByFlightNumberAndDateGetSecurity;
}(SpeakeasyBase));
export { OperationsFlightstatusByFlightNumberAndDateGetSecurity };
var OperationsFlightstatusByFlightNumberAndDateGetRequest = /** @class */ (function (_super) {
    __extends(OperationsFlightstatusByFlightNumberAndDateGetRequest, _super);
    function OperationsFlightstatusByFlightNumberAndDateGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", OperationsFlightstatusByFlightNumberAndDateGetPathParams)
    ], OperationsFlightstatusByFlightNumberAndDateGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OperationsFlightstatusByFlightNumberAndDateGetQueryParams)
    ], OperationsFlightstatusByFlightNumberAndDateGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OperationsFlightstatusByFlightNumberAndDateGetHeaders)
    ], OperationsFlightstatusByFlightNumberAndDateGetRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OperationsFlightstatusByFlightNumberAndDateGetSecurity)
    ], OperationsFlightstatusByFlightNumberAndDateGetRequest.prototype, "security", void 0);
    return OperationsFlightstatusByFlightNumberAndDateGetRequest;
}(SpeakeasyBase));
export { OperationsFlightstatusByFlightNumberAndDateGetRequest };
var OperationsFlightstatusByFlightNumberAndDateGetResponse = /** @class */ (function (_super) {
    __extends(OperationsFlightstatusByFlightNumberAndDateGetResponse, _super);
    function OperationsFlightstatusByFlightNumberAndDateGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], OperationsFlightstatusByFlightNumberAndDateGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], OperationsFlightstatusByFlightNumberAndDateGetResponse.prototype, "operationsFlightstatusByFlightNumberAndDateGet200ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], OperationsFlightstatusByFlightNumberAndDateGetResponse.prototype, "statusCode", void 0);
    return OperationsFlightstatusByFlightNumberAndDateGetResponse;
}(SpeakeasyBase));
export { OperationsFlightstatusByFlightNumberAndDateGetResponse };
