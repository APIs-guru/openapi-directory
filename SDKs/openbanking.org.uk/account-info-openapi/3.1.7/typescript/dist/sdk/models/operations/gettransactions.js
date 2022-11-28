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
var GetTransactionsQueryParams = /** @class */ (function (_super) {
    __extends(GetTransactionsQueryParams, _super);
    function GetTransactionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromBookingDateTime" }),
        __metadata("design:type", Date)
    ], GetTransactionsQueryParams.prototype, "fromBookingDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toBookingDateTime" }),
        __metadata("design:type", Date)
    ], GetTransactionsQueryParams.prototype, "toBookingDateTime", void 0);
    return GetTransactionsQueryParams;
}(SpeakeasyBase));
export { GetTransactionsQueryParams };
var GetTransactionsHeaders = /** @class */ (function (_super) {
    __extends(GetTransactionsHeaders, _super);
    function GetTransactionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetTransactionsHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], GetTransactionsHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], GetTransactionsHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], GetTransactionsHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], GetTransactionsHeaders.prototype, "xFapiInteractionId", void 0);
    return GetTransactionsHeaders;
}(SpeakeasyBase));
export { GetTransactionsHeaders };
var GetTransactionsSecurity = /** @class */ (function (_super) {
    __extends(GetTransactionsSecurity, _super);
    function GetTransactionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemePsuoAuth2Security)
    ], GetTransactionsSecurity.prototype, "psuoAuth2Security", void 0);
    return GetTransactionsSecurity;
}(SpeakeasyBase));
export { GetTransactionsSecurity };
var GetTransactionsRequest = /** @class */ (function (_super) {
    __extends(GetTransactionsRequest, _super);
    function GetTransactionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTransactionsQueryParams)
    ], GetTransactionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTransactionsHeaders)
    ], GetTransactionsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTransactionsSecurity)
    ], GetTransactionsRequest.prototype, "security", void 0);
    return GetTransactionsRequest;
}(SpeakeasyBase));
export { GetTransactionsRequest };
var GetTransactionsResponse = /** @class */ (function (_super) {
    __extends(GetTransactionsResponse, _super);
    function GetTransactionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetTransactionsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTransactionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetTransactionsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], GetTransactionsResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObReadTransaction6)
    ], GetTransactionsResponse.prototype, "obReadTransaction6", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTransactionsResponse.prototype, "statusCode", void 0);
    return GetTransactionsResponse;
}(SpeakeasyBase));
export { GetTransactionsResponse };
