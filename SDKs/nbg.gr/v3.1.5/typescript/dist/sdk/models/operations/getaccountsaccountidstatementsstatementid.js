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
var GetAccountsAccountIdStatementsStatementIdPathParams = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdStatementsStatementIdPathParams, _super);
    function GetAccountsAccountIdStatementsStatementIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdStatementsStatementIdPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=statementId" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdStatementsStatementIdPathParams.prototype, "statementId", void 0);
    return GetAccountsAccountIdStatementsStatementIdPathParams;
}(SpeakeasyBase));
export { GetAccountsAccountIdStatementsStatementIdPathParams };
var GetAccountsAccountIdStatementsStatementIdHeaders = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdStatementsStatementIdHeaders, _super);
    function GetAccountsAccountIdStatementsStatementIdHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=sandbox-id" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdStatementsStatementIdHeaders.prototype, "sandboxId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdStatementsStatementIdHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdStatementsStatementIdHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdStatementsStatementIdHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdStatementsStatementIdHeaders.prototype, "xFapiInteractionId", void 0);
    return GetAccountsAccountIdStatementsStatementIdHeaders;
}(SpeakeasyBase));
export { GetAccountsAccountIdStatementsStatementIdHeaders };
var GetAccountsAccountIdStatementsStatementIdSecurity = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdStatementsStatementIdSecurity, _super);
    function GetAccountsAccountIdStatementsStatementIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAuthorizationCodeToken)
    ], GetAccountsAccountIdStatementsStatementIdSecurity.prototype, "authorizationCodeToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], GetAccountsAccountIdStatementsStatementIdSecurity.prototype, "clientId", void 0);
    return GetAccountsAccountIdStatementsStatementIdSecurity;
}(SpeakeasyBase));
export { GetAccountsAccountIdStatementsStatementIdSecurity };
var GetAccountsAccountIdStatementsStatementIdRequest = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdStatementsStatementIdRequest, _super);
    function GetAccountsAccountIdStatementsStatementIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdStatementsStatementIdPathParams)
    ], GetAccountsAccountIdStatementsStatementIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdStatementsStatementIdHeaders)
    ], GetAccountsAccountIdStatementsStatementIdRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdStatementsStatementIdSecurity)
    ], GetAccountsAccountIdStatementsStatementIdRequest.prototype, "security", void 0);
    return GetAccountsAccountIdStatementsStatementIdRequest;
}(SpeakeasyBase));
export { GetAccountsAccountIdStatementsStatementIdRequest };
var GetAccountsAccountIdStatementsStatementIdResponse = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdStatementsStatementIdResponse, _super);
    function GetAccountsAccountIdStatementsStatementIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAccountsAccountIdStatementsStatementIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetAccountsAccountIdStatementsStatementIdResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], GetAccountsAccountIdStatementsStatementIdResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObReadStatement2)
    ], GetAccountsAccountIdStatementsStatementIdResponse.prototype, "obReadStatement2", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAccountsAccountIdStatementsStatementIdResponse.prototype, "statusCode", void 0);
    return GetAccountsAccountIdStatementsStatementIdResponse;
}(SpeakeasyBase));
export { GetAccountsAccountIdStatementsStatementIdResponse };
