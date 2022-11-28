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
var GetAccountsAccountIdStatementsPathParams = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdStatementsPathParams, _super);
    function GetAccountsAccountIdStatementsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountId" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdStatementsPathParams.prototype, "accountId", void 0);
    return GetAccountsAccountIdStatementsPathParams;
}(SpeakeasyBase));
export { GetAccountsAccountIdStatementsPathParams };
var GetAccountsAccountIdStatementsQueryParams = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdStatementsQueryParams, _super);
    function GetAccountsAccountIdStatementsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromStatementDateTime" }),
        __metadata("design:type", Date)
    ], GetAccountsAccountIdStatementsQueryParams.prototype, "fromStatementDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toStatementDateTime" }),
        __metadata("design:type", Date)
    ], GetAccountsAccountIdStatementsQueryParams.prototype, "toStatementDateTime", void 0);
    return GetAccountsAccountIdStatementsQueryParams;
}(SpeakeasyBase));
export { GetAccountsAccountIdStatementsQueryParams };
var GetAccountsAccountIdStatementsHeaders = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdStatementsHeaders, _super);
    function GetAccountsAccountIdStatementsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdStatementsHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdStatementsHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdStatementsHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdStatementsHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdStatementsHeaders.prototype, "xFapiInteractionId", void 0);
    return GetAccountsAccountIdStatementsHeaders;
}(SpeakeasyBase));
export { GetAccountsAccountIdStatementsHeaders };
var GetAccountsAccountIdStatementsSecurity = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdStatementsSecurity, _super);
    function GetAccountsAccountIdStatementsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemePsuoAuth2Security)
    ], GetAccountsAccountIdStatementsSecurity.prototype, "psuoAuth2Security", void 0);
    return GetAccountsAccountIdStatementsSecurity;
}(SpeakeasyBase));
export { GetAccountsAccountIdStatementsSecurity };
var GetAccountsAccountIdStatementsRequest = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdStatementsRequest, _super);
    function GetAccountsAccountIdStatementsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdStatementsPathParams)
    ], GetAccountsAccountIdStatementsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdStatementsQueryParams)
    ], GetAccountsAccountIdStatementsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdStatementsHeaders)
    ], GetAccountsAccountIdStatementsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdStatementsSecurity)
    ], GetAccountsAccountIdStatementsRequest.prototype, "security", void 0);
    return GetAccountsAccountIdStatementsRequest;
}(SpeakeasyBase));
export { GetAccountsAccountIdStatementsRequest };
var GetAccountsAccountIdStatementsResponse = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdStatementsResponse, _super);
    function GetAccountsAccountIdStatementsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetAccountsAccountIdStatementsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAccountsAccountIdStatementsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetAccountsAccountIdStatementsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], GetAccountsAccountIdStatementsResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObReadStatement2)
    ], GetAccountsAccountIdStatementsResponse.prototype, "obReadStatement2", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAccountsAccountIdStatementsResponse.prototype, "statusCode", void 0);
    return GetAccountsAccountIdStatementsResponse;
}(SpeakeasyBase));
export { GetAccountsAccountIdStatementsResponse };
