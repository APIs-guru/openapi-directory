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
var GetAccountsAccountIdBeneficiariesPathParams = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdBeneficiariesPathParams, _super);
    function GetAccountsAccountIdBeneficiariesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdBeneficiariesPathParams.prototype, "accountId", void 0);
    return GetAccountsAccountIdBeneficiariesPathParams;
}(SpeakeasyBase));
export { GetAccountsAccountIdBeneficiariesPathParams };
var GetAccountsAccountIdBeneficiariesHeaders = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdBeneficiariesHeaders, _super);
    function GetAccountsAccountIdBeneficiariesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=sandbox-id" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdBeneficiariesHeaders.prototype, "sandboxId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdBeneficiariesHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdBeneficiariesHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdBeneficiariesHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdBeneficiariesHeaders.prototype, "xFapiInteractionId", void 0);
    return GetAccountsAccountIdBeneficiariesHeaders;
}(SpeakeasyBase));
export { GetAccountsAccountIdBeneficiariesHeaders };
var GetAccountsAccountIdBeneficiariesSecurity = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdBeneficiariesSecurity, _super);
    function GetAccountsAccountIdBeneficiariesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAuthorizationCodeToken)
    ], GetAccountsAccountIdBeneficiariesSecurity.prototype, "authorizationCodeToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], GetAccountsAccountIdBeneficiariesSecurity.prototype, "clientId", void 0);
    return GetAccountsAccountIdBeneficiariesSecurity;
}(SpeakeasyBase));
export { GetAccountsAccountIdBeneficiariesSecurity };
var GetAccountsAccountIdBeneficiariesRequest = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdBeneficiariesRequest, _super);
    function GetAccountsAccountIdBeneficiariesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdBeneficiariesPathParams)
    ], GetAccountsAccountIdBeneficiariesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdBeneficiariesHeaders)
    ], GetAccountsAccountIdBeneficiariesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdBeneficiariesSecurity)
    ], GetAccountsAccountIdBeneficiariesRequest.prototype, "security", void 0);
    return GetAccountsAccountIdBeneficiariesRequest;
}(SpeakeasyBase));
export { GetAccountsAccountIdBeneficiariesRequest };
var GetAccountsAccountIdBeneficiariesResponse = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdBeneficiariesResponse, _super);
    function GetAccountsAccountIdBeneficiariesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAccountsAccountIdBeneficiariesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetAccountsAccountIdBeneficiariesResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], GetAccountsAccountIdBeneficiariesResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObReadBeneficiary5)
    ], GetAccountsAccountIdBeneficiariesResponse.prototype, "obReadBeneficiary5", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAccountsAccountIdBeneficiariesResponse.prototype, "statusCode", void 0);
    return GetAccountsAccountIdBeneficiariesResponse;
}(SpeakeasyBase));
export { GetAccountsAccountIdBeneficiariesResponse };
