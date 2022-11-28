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
var GetAccountsAccountIdTransactionsPathParams = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdTransactionsPathParams, _super);
    function GetAccountsAccountIdTransactionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountId" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdTransactionsPathParams.prototype, "accountId", void 0);
    return GetAccountsAccountIdTransactionsPathParams;
}(SpeakeasyBase));
export { GetAccountsAccountIdTransactionsPathParams };
var GetAccountsAccountIdTransactionsQueryParams = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdTransactionsQueryParams, _super);
    function GetAccountsAccountIdTransactionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromBookingDateTime" }),
        __metadata("design:type", Date)
    ], GetAccountsAccountIdTransactionsQueryParams.prototype, "fromBookingDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toBookingDateTime" }),
        __metadata("design:type", Date)
    ], GetAccountsAccountIdTransactionsQueryParams.prototype, "toBookingDateTime", void 0);
    return GetAccountsAccountIdTransactionsQueryParams;
}(SpeakeasyBase));
export { GetAccountsAccountIdTransactionsQueryParams };
var GetAccountsAccountIdTransactionsHeaders = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdTransactionsHeaders, _super);
    function GetAccountsAccountIdTransactionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdTransactionsHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdTransactionsHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdTransactionsHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdTransactionsHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdTransactionsHeaders.prototype, "xFapiInteractionId", void 0);
    return GetAccountsAccountIdTransactionsHeaders;
}(SpeakeasyBase));
export { GetAccountsAccountIdTransactionsHeaders };
var GetAccountsAccountIdTransactionsSecurity = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdTransactionsSecurity, _super);
    function GetAccountsAccountIdTransactionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemePsuoAuth2Security)
    ], GetAccountsAccountIdTransactionsSecurity.prototype, "psuoAuth2Security", void 0);
    return GetAccountsAccountIdTransactionsSecurity;
}(SpeakeasyBase));
export { GetAccountsAccountIdTransactionsSecurity };
var GetAccountsAccountIdTransactionsRequest = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdTransactionsRequest, _super);
    function GetAccountsAccountIdTransactionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdTransactionsPathParams)
    ], GetAccountsAccountIdTransactionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdTransactionsQueryParams)
    ], GetAccountsAccountIdTransactionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdTransactionsHeaders)
    ], GetAccountsAccountIdTransactionsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdTransactionsSecurity)
    ], GetAccountsAccountIdTransactionsRequest.prototype, "security", void 0);
    return GetAccountsAccountIdTransactionsRequest;
}(SpeakeasyBase));
export { GetAccountsAccountIdTransactionsRequest };
var GetAccountsAccountIdTransactionsResponse = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdTransactionsResponse, _super);
    function GetAccountsAccountIdTransactionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetAccountsAccountIdTransactionsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAccountsAccountIdTransactionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetAccountsAccountIdTransactionsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], GetAccountsAccountIdTransactionsResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObReadTransaction6)
    ], GetAccountsAccountIdTransactionsResponse.prototype, "obReadTransaction6", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAccountsAccountIdTransactionsResponse.prototype, "statusCode", void 0);
    return GetAccountsAccountIdTransactionsResponse;
}(SpeakeasyBase));
export { GetAccountsAccountIdTransactionsResponse };
