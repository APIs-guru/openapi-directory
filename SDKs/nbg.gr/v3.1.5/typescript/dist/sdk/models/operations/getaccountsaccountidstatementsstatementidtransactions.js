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
var GetAccountsAccountIdStatementsStatementIdTransactionsPathParams = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdStatementsStatementIdTransactionsPathParams, _super);
    function GetAccountsAccountIdStatementsStatementIdTransactionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdStatementsStatementIdTransactionsPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=statementId" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdStatementsStatementIdTransactionsPathParams.prototype, "statementId", void 0);
    return GetAccountsAccountIdStatementsStatementIdTransactionsPathParams;
}(SpeakeasyBase));
export { GetAccountsAccountIdStatementsStatementIdTransactionsPathParams };
var GetAccountsAccountIdStatementsStatementIdTransactionsHeaders = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdStatementsStatementIdTransactionsHeaders, _super);
    function GetAccountsAccountIdStatementsStatementIdTransactionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=sandbox-id" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdStatementsStatementIdTransactionsHeaders.prototype, "sandboxId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdStatementsStatementIdTransactionsHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdStatementsStatementIdTransactionsHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdStatementsStatementIdTransactionsHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdStatementsStatementIdTransactionsHeaders.prototype, "xFapiInteractionId", void 0);
    return GetAccountsAccountIdStatementsStatementIdTransactionsHeaders;
}(SpeakeasyBase));
export { GetAccountsAccountIdStatementsStatementIdTransactionsHeaders };
var GetAccountsAccountIdStatementsStatementIdTransactionsSecurity = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdStatementsStatementIdTransactionsSecurity, _super);
    function GetAccountsAccountIdStatementsStatementIdTransactionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAuthorizationCodeToken)
    ], GetAccountsAccountIdStatementsStatementIdTransactionsSecurity.prototype, "authorizationCodeToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], GetAccountsAccountIdStatementsStatementIdTransactionsSecurity.prototype, "clientId", void 0);
    return GetAccountsAccountIdStatementsStatementIdTransactionsSecurity;
}(SpeakeasyBase));
export { GetAccountsAccountIdStatementsStatementIdTransactionsSecurity };
var GetAccountsAccountIdStatementsStatementIdTransactionsRequest = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdStatementsStatementIdTransactionsRequest, _super);
    function GetAccountsAccountIdStatementsStatementIdTransactionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdStatementsStatementIdTransactionsPathParams)
    ], GetAccountsAccountIdStatementsStatementIdTransactionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdStatementsStatementIdTransactionsHeaders)
    ], GetAccountsAccountIdStatementsStatementIdTransactionsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdStatementsStatementIdTransactionsSecurity)
    ], GetAccountsAccountIdStatementsStatementIdTransactionsRequest.prototype, "security", void 0);
    return GetAccountsAccountIdStatementsStatementIdTransactionsRequest;
}(SpeakeasyBase));
export { GetAccountsAccountIdStatementsStatementIdTransactionsRequest };
var GetAccountsAccountIdStatementsStatementIdTransactionsResponse = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdStatementsStatementIdTransactionsResponse, _super);
    function GetAccountsAccountIdStatementsStatementIdTransactionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAccountsAccountIdStatementsStatementIdTransactionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetAccountsAccountIdStatementsStatementIdTransactionsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], GetAccountsAccountIdStatementsStatementIdTransactionsResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObReadTransaction6)
    ], GetAccountsAccountIdStatementsStatementIdTransactionsResponse.prototype, "obReadTransaction6", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAccountsAccountIdStatementsStatementIdTransactionsResponse.prototype, "statusCode", void 0);
    return GetAccountsAccountIdStatementsStatementIdTransactionsResponse;
}(SpeakeasyBase));
export { GetAccountsAccountIdStatementsStatementIdTransactionsResponse };
