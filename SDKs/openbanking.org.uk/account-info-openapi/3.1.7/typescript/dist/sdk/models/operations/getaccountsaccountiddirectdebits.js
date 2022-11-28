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
var GetAccountsAccountIdDirectDebitsPathParams = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdDirectDebitsPathParams, _super);
    function GetAccountsAccountIdDirectDebitsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountId" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdDirectDebitsPathParams.prototype, "accountId", void 0);
    return GetAccountsAccountIdDirectDebitsPathParams;
}(SpeakeasyBase));
export { GetAccountsAccountIdDirectDebitsPathParams };
var GetAccountsAccountIdDirectDebitsHeaders = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdDirectDebitsHeaders, _super);
    function GetAccountsAccountIdDirectDebitsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdDirectDebitsHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdDirectDebitsHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdDirectDebitsHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdDirectDebitsHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdDirectDebitsHeaders.prototype, "xFapiInteractionId", void 0);
    return GetAccountsAccountIdDirectDebitsHeaders;
}(SpeakeasyBase));
export { GetAccountsAccountIdDirectDebitsHeaders };
var GetAccountsAccountIdDirectDebitsSecurity = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdDirectDebitsSecurity, _super);
    function GetAccountsAccountIdDirectDebitsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemePsuoAuth2Security)
    ], GetAccountsAccountIdDirectDebitsSecurity.prototype, "psuoAuth2Security", void 0);
    return GetAccountsAccountIdDirectDebitsSecurity;
}(SpeakeasyBase));
export { GetAccountsAccountIdDirectDebitsSecurity };
var GetAccountsAccountIdDirectDebitsRequest = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdDirectDebitsRequest, _super);
    function GetAccountsAccountIdDirectDebitsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdDirectDebitsPathParams)
    ], GetAccountsAccountIdDirectDebitsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdDirectDebitsHeaders)
    ], GetAccountsAccountIdDirectDebitsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdDirectDebitsSecurity)
    ], GetAccountsAccountIdDirectDebitsRequest.prototype, "security", void 0);
    return GetAccountsAccountIdDirectDebitsRequest;
}(SpeakeasyBase));
export { GetAccountsAccountIdDirectDebitsRequest };
var GetAccountsAccountIdDirectDebitsResponse = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdDirectDebitsResponse, _super);
    function GetAccountsAccountIdDirectDebitsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetAccountsAccountIdDirectDebitsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAccountsAccountIdDirectDebitsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetAccountsAccountIdDirectDebitsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], GetAccountsAccountIdDirectDebitsResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObReadDirectDebit2)
    ], GetAccountsAccountIdDirectDebitsResponse.prototype, "obReadDirectDebit2", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAccountsAccountIdDirectDebitsResponse.prototype, "statusCode", void 0);
    return GetAccountsAccountIdDirectDebitsResponse;
}(SpeakeasyBase));
export { GetAccountsAccountIdDirectDebitsResponse };
