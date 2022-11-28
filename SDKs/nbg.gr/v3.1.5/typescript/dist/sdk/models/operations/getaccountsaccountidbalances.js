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
var GetAccountsAccountIdBalancesPathParams = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdBalancesPathParams, _super);
    function GetAccountsAccountIdBalancesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdBalancesPathParams.prototype, "accountId", void 0);
    return GetAccountsAccountIdBalancesPathParams;
}(SpeakeasyBase));
export { GetAccountsAccountIdBalancesPathParams };
var GetAccountsAccountIdBalancesHeaders = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdBalancesHeaders, _super);
    function GetAccountsAccountIdBalancesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=sandbox-id" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdBalancesHeaders.prototype, "sandboxId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdBalancesHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdBalancesHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdBalancesHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdBalancesHeaders.prototype, "xFapiInteractionId", void 0);
    return GetAccountsAccountIdBalancesHeaders;
}(SpeakeasyBase));
export { GetAccountsAccountIdBalancesHeaders };
var GetAccountsAccountIdBalancesSecurity = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdBalancesSecurity, _super);
    function GetAccountsAccountIdBalancesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAuthorizationCodeToken)
    ], GetAccountsAccountIdBalancesSecurity.prototype, "authorizationCodeToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], GetAccountsAccountIdBalancesSecurity.prototype, "clientId", void 0);
    return GetAccountsAccountIdBalancesSecurity;
}(SpeakeasyBase));
export { GetAccountsAccountIdBalancesSecurity };
var GetAccountsAccountIdBalancesRequest = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdBalancesRequest, _super);
    function GetAccountsAccountIdBalancesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdBalancesPathParams)
    ], GetAccountsAccountIdBalancesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdBalancesHeaders)
    ], GetAccountsAccountIdBalancesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdBalancesSecurity)
    ], GetAccountsAccountIdBalancesRequest.prototype, "security", void 0);
    return GetAccountsAccountIdBalancesRequest;
}(SpeakeasyBase));
export { GetAccountsAccountIdBalancesRequest };
var GetAccountsAccountIdBalancesResponse = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdBalancesResponse, _super);
    function GetAccountsAccountIdBalancesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAccountsAccountIdBalancesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetAccountsAccountIdBalancesResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], GetAccountsAccountIdBalancesResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObReadBalance1)
    ], GetAccountsAccountIdBalancesResponse.prototype, "obReadBalance1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAccountsAccountIdBalancesResponse.prototype, "statusCode", void 0);
    return GetAccountsAccountIdBalancesResponse;
}(SpeakeasyBase));
export { GetAccountsAccountIdBalancesResponse };
