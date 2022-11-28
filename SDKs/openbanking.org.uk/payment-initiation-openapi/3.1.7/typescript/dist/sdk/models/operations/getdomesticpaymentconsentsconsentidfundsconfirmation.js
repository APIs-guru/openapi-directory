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
var GetDomesticPaymentConsentsConsentIdFundsConfirmationPathParams = /** @class */ (function (_super) {
    __extends(GetDomesticPaymentConsentsConsentIdFundsConfirmationPathParams, _super);
    function GetDomesticPaymentConsentsConsentIdFundsConfirmationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConsentId" }),
        __metadata("design:type", String)
    ], GetDomesticPaymentConsentsConsentIdFundsConfirmationPathParams.prototype, "consentId", void 0);
    return GetDomesticPaymentConsentsConsentIdFundsConfirmationPathParams;
}(SpeakeasyBase));
export { GetDomesticPaymentConsentsConsentIdFundsConfirmationPathParams };
var GetDomesticPaymentConsentsConsentIdFundsConfirmationHeaders = /** @class */ (function (_super) {
    __extends(GetDomesticPaymentConsentsConsentIdFundsConfirmationHeaders, _super);
    function GetDomesticPaymentConsentsConsentIdFundsConfirmationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetDomesticPaymentConsentsConsentIdFundsConfirmationHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], GetDomesticPaymentConsentsConsentIdFundsConfirmationHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], GetDomesticPaymentConsentsConsentIdFundsConfirmationHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], GetDomesticPaymentConsentsConsentIdFundsConfirmationHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], GetDomesticPaymentConsentsConsentIdFundsConfirmationHeaders.prototype, "xFapiInteractionId", void 0);
    return GetDomesticPaymentConsentsConsentIdFundsConfirmationHeaders;
}(SpeakeasyBase));
export { GetDomesticPaymentConsentsConsentIdFundsConfirmationHeaders };
var GetDomesticPaymentConsentsConsentIdFundsConfirmationSecurity = /** @class */ (function (_super) {
    __extends(GetDomesticPaymentConsentsConsentIdFundsConfirmationSecurity, _super);
    function GetDomesticPaymentConsentsConsentIdFundsConfirmationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemePsuoAuth2Security)
    ], GetDomesticPaymentConsentsConsentIdFundsConfirmationSecurity.prototype, "psuoAuth2Security", void 0);
    return GetDomesticPaymentConsentsConsentIdFundsConfirmationSecurity;
}(SpeakeasyBase));
export { GetDomesticPaymentConsentsConsentIdFundsConfirmationSecurity };
var GetDomesticPaymentConsentsConsentIdFundsConfirmationRequest = /** @class */ (function (_super) {
    __extends(GetDomesticPaymentConsentsConsentIdFundsConfirmationRequest, _super);
    function GetDomesticPaymentConsentsConsentIdFundsConfirmationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomesticPaymentConsentsConsentIdFundsConfirmationPathParams)
    ], GetDomesticPaymentConsentsConsentIdFundsConfirmationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomesticPaymentConsentsConsentIdFundsConfirmationHeaders)
    ], GetDomesticPaymentConsentsConsentIdFundsConfirmationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomesticPaymentConsentsConsentIdFundsConfirmationSecurity)
    ], GetDomesticPaymentConsentsConsentIdFundsConfirmationRequest.prototype, "security", void 0);
    return GetDomesticPaymentConsentsConsentIdFundsConfirmationRequest;
}(SpeakeasyBase));
export { GetDomesticPaymentConsentsConsentIdFundsConfirmationRequest };
var GetDomesticPaymentConsentsConsentIdFundsConfirmationResponse = /** @class */ (function (_super) {
    __extends(GetDomesticPaymentConsentsConsentIdFundsConfirmationResponse, _super);
    function GetDomesticPaymentConsentsConsentIdFundsConfirmationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDomesticPaymentConsentsConsentIdFundsConfirmationResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDomesticPaymentConsentsConsentIdFundsConfirmationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetDomesticPaymentConsentsConsentIdFundsConfirmationResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], GetDomesticPaymentConsentsConsentIdFundsConfirmationResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObWriteFundsConfirmationResponse1)
    ], GetDomesticPaymentConsentsConsentIdFundsConfirmationResponse.prototype, "obWriteFundsConfirmationResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDomesticPaymentConsentsConsentIdFundsConfirmationResponse.prototype, "statusCode", void 0);
    return GetDomesticPaymentConsentsConsentIdFundsConfirmationResponse;
}(SpeakeasyBase));
export { GetDomesticPaymentConsentsConsentIdFundsConfirmationResponse };
