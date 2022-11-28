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
var GetAccountsAccountIdPartiesPathParams = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdPartiesPathParams, _super);
    function GetAccountsAccountIdPartiesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdPartiesPathParams.prototype, "accountId", void 0);
    return GetAccountsAccountIdPartiesPathParams;
}(SpeakeasyBase));
export { GetAccountsAccountIdPartiesPathParams };
var GetAccountsAccountIdPartiesHeaders = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdPartiesHeaders, _super);
    function GetAccountsAccountIdPartiesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=sandbox-id" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdPartiesHeaders.prototype, "sandboxId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdPartiesHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdPartiesHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdPartiesHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdPartiesHeaders.prototype, "xFapiInteractionId", void 0);
    return GetAccountsAccountIdPartiesHeaders;
}(SpeakeasyBase));
export { GetAccountsAccountIdPartiesHeaders };
var GetAccountsAccountIdPartiesSecurity = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdPartiesSecurity, _super);
    function GetAccountsAccountIdPartiesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAuthorizationCodeToken)
    ], GetAccountsAccountIdPartiesSecurity.prototype, "authorizationCodeToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], GetAccountsAccountIdPartiesSecurity.prototype, "clientId", void 0);
    return GetAccountsAccountIdPartiesSecurity;
}(SpeakeasyBase));
export { GetAccountsAccountIdPartiesSecurity };
var GetAccountsAccountIdPartiesRequest = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdPartiesRequest, _super);
    function GetAccountsAccountIdPartiesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdPartiesPathParams)
    ], GetAccountsAccountIdPartiesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdPartiesHeaders)
    ], GetAccountsAccountIdPartiesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdPartiesSecurity)
    ], GetAccountsAccountIdPartiesRequest.prototype, "security", void 0);
    return GetAccountsAccountIdPartiesRequest;
}(SpeakeasyBase));
export { GetAccountsAccountIdPartiesRequest };
var GetAccountsAccountIdPartiesResponse = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdPartiesResponse, _super);
    function GetAccountsAccountIdPartiesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAccountsAccountIdPartiesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetAccountsAccountIdPartiesResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], GetAccountsAccountIdPartiesResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObReadParty3)
    ], GetAccountsAccountIdPartiesResponse.prototype, "obReadParty3", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAccountsAccountIdPartiesResponse.prototype, "statusCode", void 0);
    return GetAccountsAccountIdPartiesResponse;
}(SpeakeasyBase));
export { GetAccountsAccountIdPartiesResponse };
