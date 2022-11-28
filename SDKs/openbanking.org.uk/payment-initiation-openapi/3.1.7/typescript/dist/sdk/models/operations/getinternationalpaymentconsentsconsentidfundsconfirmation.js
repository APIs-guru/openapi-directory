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
var GetInternationalPaymentConsentsConsentIdFundsConfirmationPathParams = /** @class */ (function (_super) {
    __extends(GetInternationalPaymentConsentsConsentIdFundsConfirmationPathParams, _super);
    function GetInternationalPaymentConsentsConsentIdFundsConfirmationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConsentId" }),
        __metadata("design:type", String)
    ], GetInternationalPaymentConsentsConsentIdFundsConfirmationPathParams.prototype, "consentId", void 0);
    return GetInternationalPaymentConsentsConsentIdFundsConfirmationPathParams;
}(SpeakeasyBase));
export { GetInternationalPaymentConsentsConsentIdFundsConfirmationPathParams };
var GetInternationalPaymentConsentsConsentIdFundsConfirmationHeaders = /** @class */ (function (_super) {
    __extends(GetInternationalPaymentConsentsConsentIdFundsConfirmationHeaders, _super);
    function GetInternationalPaymentConsentsConsentIdFundsConfirmationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetInternationalPaymentConsentsConsentIdFundsConfirmationHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], GetInternationalPaymentConsentsConsentIdFundsConfirmationHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], GetInternationalPaymentConsentsConsentIdFundsConfirmationHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], GetInternationalPaymentConsentsConsentIdFundsConfirmationHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], GetInternationalPaymentConsentsConsentIdFundsConfirmationHeaders.prototype, "xFapiInteractionId", void 0);
    return GetInternationalPaymentConsentsConsentIdFundsConfirmationHeaders;
}(SpeakeasyBase));
export { GetInternationalPaymentConsentsConsentIdFundsConfirmationHeaders };
var GetInternationalPaymentConsentsConsentIdFundsConfirmationSecurity = /** @class */ (function (_super) {
    __extends(GetInternationalPaymentConsentsConsentIdFundsConfirmationSecurity, _super);
    function GetInternationalPaymentConsentsConsentIdFundsConfirmationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemePsuoAuth2Security)
    ], GetInternationalPaymentConsentsConsentIdFundsConfirmationSecurity.prototype, "psuoAuth2Security", void 0);
    return GetInternationalPaymentConsentsConsentIdFundsConfirmationSecurity;
}(SpeakeasyBase));
export { GetInternationalPaymentConsentsConsentIdFundsConfirmationSecurity };
var GetInternationalPaymentConsentsConsentIdFundsConfirmationRequest = /** @class */ (function (_super) {
    __extends(GetInternationalPaymentConsentsConsentIdFundsConfirmationRequest, _super);
    function GetInternationalPaymentConsentsConsentIdFundsConfirmationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInternationalPaymentConsentsConsentIdFundsConfirmationPathParams)
    ], GetInternationalPaymentConsentsConsentIdFundsConfirmationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInternationalPaymentConsentsConsentIdFundsConfirmationHeaders)
    ], GetInternationalPaymentConsentsConsentIdFundsConfirmationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInternationalPaymentConsentsConsentIdFundsConfirmationSecurity)
    ], GetInternationalPaymentConsentsConsentIdFundsConfirmationRequest.prototype, "security", void 0);
    return GetInternationalPaymentConsentsConsentIdFundsConfirmationRequest;
}(SpeakeasyBase));
export { GetInternationalPaymentConsentsConsentIdFundsConfirmationRequest };
var GetInternationalPaymentConsentsConsentIdFundsConfirmationResponse = /** @class */ (function (_super) {
    __extends(GetInternationalPaymentConsentsConsentIdFundsConfirmationResponse, _super);
    function GetInternationalPaymentConsentsConsentIdFundsConfirmationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetInternationalPaymentConsentsConsentIdFundsConfirmationResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetInternationalPaymentConsentsConsentIdFundsConfirmationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetInternationalPaymentConsentsConsentIdFundsConfirmationResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], GetInternationalPaymentConsentsConsentIdFundsConfirmationResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObWriteFundsConfirmationResponse1)
    ], GetInternationalPaymentConsentsConsentIdFundsConfirmationResponse.prototype, "obWriteFundsConfirmationResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetInternationalPaymentConsentsConsentIdFundsConfirmationResponse.prototype, "statusCode", void 0);
    return GetInternationalPaymentConsentsConsentIdFundsConfirmationResponse;
}(SpeakeasyBase));
export { GetInternationalPaymentConsentsConsentIdFundsConfirmationResponse };
