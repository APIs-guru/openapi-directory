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
var GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationPathParams = /** @class */ (function (_super) {
    __extends(GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationPathParams, _super);
    function GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConsentId" }),
        __metadata("design:type", String)
    ], GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationPathParams.prototype, "consentId", void 0);
    return GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationPathParams;
}(SpeakeasyBase));
export { GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationPathParams };
var GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationHeaders = /** @class */ (function (_super) {
    __extends(GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationHeaders, _super);
    function GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationHeaders.prototype, "xFapiInteractionId", void 0);
    return GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationHeaders;
}(SpeakeasyBase));
export { GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationHeaders };
var GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationSecurity = /** @class */ (function (_super) {
    __extends(GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationSecurity, _super);
    function GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemePsuoAuth2Security)
    ], GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationSecurity.prototype, "psuoAuth2Security", void 0);
    return GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationSecurity;
}(SpeakeasyBase));
export { GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationSecurity };
var GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationRequest = /** @class */ (function (_super) {
    __extends(GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationRequest, _super);
    function GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationPathParams)
    ], GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationHeaders)
    ], GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationSecurity)
    ], GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationRequest.prototype, "security", void 0);
    return GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationRequest;
}(SpeakeasyBase));
export { GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationRequest };
var GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationResponse = /** @class */ (function (_super) {
    __extends(GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationResponse, _super);
    function GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObWriteFundsConfirmationResponse1)
    ], GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationResponse.prototype, "obWriteFundsConfirmationResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationResponse.prototype, "statusCode", void 0);
    return GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationResponse;
}(SpeakeasyBase));
export { GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationResponse };
