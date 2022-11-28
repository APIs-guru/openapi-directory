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
var GetAccountsAccountIdStatementsStatementIdFilePathParams = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdStatementsStatementIdFilePathParams, _super);
    function GetAccountsAccountIdStatementsStatementIdFilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountId" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdStatementsStatementIdFilePathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=StatementId" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdStatementsStatementIdFilePathParams.prototype, "statementId", void 0);
    return GetAccountsAccountIdStatementsStatementIdFilePathParams;
}(SpeakeasyBase));
export { GetAccountsAccountIdStatementsStatementIdFilePathParams };
var GetAccountsAccountIdStatementsStatementIdFileHeaders = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdStatementsStatementIdFileHeaders, _super);
    function GetAccountsAccountIdStatementsStatementIdFileHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdStatementsStatementIdFileHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdStatementsStatementIdFileHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdStatementsStatementIdFileHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdStatementsStatementIdFileHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdStatementsStatementIdFileHeaders.prototype, "xFapiInteractionId", void 0);
    return GetAccountsAccountIdStatementsStatementIdFileHeaders;
}(SpeakeasyBase));
export { GetAccountsAccountIdStatementsStatementIdFileHeaders };
var GetAccountsAccountIdStatementsStatementIdFileSecurity = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdStatementsStatementIdFileSecurity, _super);
    function GetAccountsAccountIdStatementsStatementIdFileSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemePsuoAuth2Security)
    ], GetAccountsAccountIdStatementsStatementIdFileSecurity.prototype, "psuoAuth2Security", void 0);
    return GetAccountsAccountIdStatementsStatementIdFileSecurity;
}(SpeakeasyBase));
export { GetAccountsAccountIdStatementsStatementIdFileSecurity };
var GetAccountsAccountIdStatementsStatementIdFileRequest = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdStatementsStatementIdFileRequest, _super);
    function GetAccountsAccountIdStatementsStatementIdFileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdStatementsStatementIdFilePathParams)
    ], GetAccountsAccountIdStatementsStatementIdFileRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdStatementsStatementIdFileHeaders)
    ], GetAccountsAccountIdStatementsStatementIdFileRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdStatementsStatementIdFileSecurity)
    ], GetAccountsAccountIdStatementsStatementIdFileRequest.prototype, "security", void 0);
    return GetAccountsAccountIdStatementsStatementIdFileRequest;
}(SpeakeasyBase));
export { GetAccountsAccountIdStatementsStatementIdFileRequest };
var GetAccountsAccountIdStatementsStatementIdFileResponse = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdStatementsStatementIdFileResponse, _super);
    function GetAccountsAccountIdStatementsStatementIdFileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetAccountsAccountIdStatementsStatementIdFileResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAccountsAccountIdStatementsStatementIdFileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetAccountsAccountIdStatementsStatementIdFileResponse.prototype, "file", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetAccountsAccountIdStatementsStatementIdFileResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], GetAccountsAccountIdStatementsStatementIdFileResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAccountsAccountIdStatementsStatementIdFileResponse.prototype, "statusCode", void 0);
    return GetAccountsAccountIdStatementsStatementIdFileResponse;
}(SpeakeasyBase));
export { GetAccountsAccountIdStatementsStatementIdFileResponse };
