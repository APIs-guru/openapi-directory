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
var GetAccountsAccountIdScheduledPaymentsPathParams = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdScheduledPaymentsPathParams, _super);
    function GetAccountsAccountIdScheduledPaymentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdScheduledPaymentsPathParams.prototype, "accountId", void 0);
    return GetAccountsAccountIdScheduledPaymentsPathParams;
}(SpeakeasyBase));
export { GetAccountsAccountIdScheduledPaymentsPathParams };
var GetAccountsAccountIdScheduledPaymentsHeaders = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdScheduledPaymentsHeaders, _super);
    function GetAccountsAccountIdScheduledPaymentsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=sandbox-id" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdScheduledPaymentsHeaders.prototype, "sandboxId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdScheduledPaymentsHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdScheduledPaymentsHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdScheduledPaymentsHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdScheduledPaymentsHeaders.prototype, "xFapiInteractionId", void 0);
    return GetAccountsAccountIdScheduledPaymentsHeaders;
}(SpeakeasyBase));
export { GetAccountsAccountIdScheduledPaymentsHeaders };
var GetAccountsAccountIdScheduledPaymentsSecurity = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdScheduledPaymentsSecurity, _super);
    function GetAccountsAccountIdScheduledPaymentsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAuthorizationCodeToken)
    ], GetAccountsAccountIdScheduledPaymentsSecurity.prototype, "authorizationCodeToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], GetAccountsAccountIdScheduledPaymentsSecurity.prototype, "clientId", void 0);
    return GetAccountsAccountIdScheduledPaymentsSecurity;
}(SpeakeasyBase));
export { GetAccountsAccountIdScheduledPaymentsSecurity };
var GetAccountsAccountIdScheduledPaymentsRequest = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdScheduledPaymentsRequest, _super);
    function GetAccountsAccountIdScheduledPaymentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdScheduledPaymentsPathParams)
    ], GetAccountsAccountIdScheduledPaymentsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdScheduledPaymentsHeaders)
    ], GetAccountsAccountIdScheduledPaymentsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdScheduledPaymentsSecurity)
    ], GetAccountsAccountIdScheduledPaymentsRequest.prototype, "security", void 0);
    return GetAccountsAccountIdScheduledPaymentsRequest;
}(SpeakeasyBase));
export { GetAccountsAccountIdScheduledPaymentsRequest };
var GetAccountsAccountIdScheduledPaymentsResponse = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdScheduledPaymentsResponse, _super);
    function GetAccountsAccountIdScheduledPaymentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAccountsAccountIdScheduledPaymentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetAccountsAccountIdScheduledPaymentsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], GetAccountsAccountIdScheduledPaymentsResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObReadScheduledPayment3)
    ], GetAccountsAccountIdScheduledPaymentsResponse.prototype, "obReadScheduledPayment3", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAccountsAccountIdScheduledPaymentsResponse.prototype, "statusCode", void 0);
    return GetAccountsAccountIdScheduledPaymentsResponse;
}(SpeakeasyBase));
export { GetAccountsAccountIdScheduledPaymentsResponse };
