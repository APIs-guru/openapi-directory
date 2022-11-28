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
var OperationsFlightstatusRouteDateByOriginAndDestinationGetPathParams = /** @class */ (function (_super) {
    __extends(OperationsFlightstatusRouteDateByOriginAndDestinationGetPathParams, _super);
    function OperationsFlightstatusRouteDateByOriginAndDestinationGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=date" }),
        __metadata("design:type", String)
    ], OperationsFlightstatusRouteDateByOriginAndDestinationGetPathParams.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=destination" }),
        __metadata("design:type", String)
    ], OperationsFlightstatusRouteDateByOriginAndDestinationGetPathParams.prototype, "destination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=origin" }),
        __metadata("design:type", String)
    ], OperationsFlightstatusRouteDateByOriginAndDestinationGetPathParams.prototype, "origin", void 0);
    return OperationsFlightstatusRouteDateByOriginAndDestinationGetPathParams;
}(SpeakeasyBase));
export { OperationsFlightstatusRouteDateByOriginAndDestinationGetPathParams };
var OperationsFlightstatusRouteDateByOriginAndDestinationGetQueryParams = /** @class */ (function (_super) {
    __extends(OperationsFlightstatusRouteDateByOriginAndDestinationGetQueryParams, _super);
    function OperationsFlightstatusRouteDateByOriginAndDestinationGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", String)
    ], OperationsFlightstatusRouteDateByOriginAndDestinationGetQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], OperationsFlightstatusRouteDateByOriginAndDestinationGetQueryParams.prototype, "offset", void 0);
    return OperationsFlightstatusRouteDateByOriginAndDestinationGetQueryParams;
}(SpeakeasyBase));
export { OperationsFlightstatusRouteDateByOriginAndDestinationGetQueryParams };
var OperationsFlightstatusRouteDateByOriginAndDestinationGetHeaders = /** @class */ (function (_super) {
    __extends(OperationsFlightstatusRouteDateByOriginAndDestinationGetHeaders, _super);
    function OperationsFlightstatusRouteDateByOriginAndDestinationGetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], OperationsFlightstatusRouteDateByOriginAndDestinationGetHeaders.prototype, "accept", void 0);
    return OperationsFlightstatusRouteDateByOriginAndDestinationGetHeaders;
}(SpeakeasyBase));
export { OperationsFlightstatusRouteDateByOriginAndDestinationGetHeaders };
var OperationsFlightstatusRouteDateByOriginAndDestinationGetSecurity = /** @class */ (function (_super) {
    __extends(OperationsFlightstatusRouteDateByOriginAndDestinationGetSecurity, _super);
    function OperationsFlightstatusRouteDateByOriginAndDestinationGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAuth)
    ], OperationsFlightstatusRouteDateByOriginAndDestinationGetSecurity.prototype, "auth", void 0);
    return OperationsFlightstatusRouteDateByOriginAndDestinationGetSecurity;
}(SpeakeasyBase));
export { OperationsFlightstatusRouteDateByOriginAndDestinationGetSecurity };
var OperationsFlightstatusRouteDateByOriginAndDestinationGetRequest = /** @class */ (function (_super) {
    __extends(OperationsFlightstatusRouteDateByOriginAndDestinationGetRequest, _super);
    function OperationsFlightstatusRouteDateByOriginAndDestinationGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OperationsFlightstatusRouteDateByOriginAndDestinationGetPathParams)
    ], OperationsFlightstatusRouteDateByOriginAndDestinationGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OperationsFlightstatusRouteDateByOriginAndDestinationGetQueryParams)
    ], OperationsFlightstatusRouteDateByOriginAndDestinationGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OperationsFlightstatusRouteDateByOriginAndDestinationGetHeaders)
    ], OperationsFlightstatusRouteDateByOriginAndDestinationGetRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OperationsFlightstatusRouteDateByOriginAndDestinationGetSecurity)
    ], OperationsFlightstatusRouteDateByOriginAndDestinationGetRequest.prototype, "security", void 0);
    return OperationsFlightstatusRouteDateByOriginAndDestinationGetRequest;
}(SpeakeasyBase));
export { OperationsFlightstatusRouteDateByOriginAndDestinationGetRequest };
var OperationsFlightstatusRouteDateByOriginAndDestinationGetResponse = /** @class */ (function (_super) {
    __extends(OperationsFlightstatusRouteDateByOriginAndDestinationGetResponse, _super);
    function OperationsFlightstatusRouteDateByOriginAndDestinationGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OperationsFlightstatusRouteDateByOriginAndDestinationGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], OperationsFlightstatusRouteDateByOriginAndDestinationGetResponse.prototype, "operationsFlightstatusRouteDateByOriginAndDestinationGet200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OperationsFlightstatusRouteDateByOriginAndDestinationGetResponse.prototype, "statusCode", void 0);
    return OperationsFlightstatusRouteDateByOriginAndDestinationGetResponse;
}(SpeakeasyBase));
export { OperationsFlightstatusRouteDateByOriginAndDestinationGetResponse };
