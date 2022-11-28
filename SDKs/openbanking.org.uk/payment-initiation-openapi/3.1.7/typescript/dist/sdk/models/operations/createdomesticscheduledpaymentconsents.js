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
var CreateDomesticScheduledPaymentConsentsHeaders = /** @class */ (function (_super) {
    __extends(CreateDomesticScheduledPaymentConsentsHeaders, _super);
    function CreateDomesticScheduledPaymentConsentsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], CreateDomesticScheduledPaymentConsentsHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], CreateDomesticScheduledPaymentConsentsHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], CreateDomesticScheduledPaymentConsentsHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], CreateDomesticScheduledPaymentConsentsHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], CreateDomesticScheduledPaymentConsentsHeaders.prototype, "xFapiInteractionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-idempotency-key" }),
        __metadata("design:type", String)
    ], CreateDomesticScheduledPaymentConsentsHeaders.prototype, "xIdempotencyKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-jws-signature" }),
        __metadata("design:type", String)
    ], CreateDomesticScheduledPaymentConsentsHeaders.prototype, "xJwsSignature", void 0);
    return CreateDomesticScheduledPaymentConsentsHeaders;
}(SpeakeasyBase));
export { CreateDomesticScheduledPaymentConsentsHeaders };
var CreateDomesticScheduledPaymentConsentsRequests = /** @class */ (function (_super) {
    __extends(CreateDomesticScheduledPaymentConsentsRequests, _super);
    function CreateDomesticScheduledPaymentConsentsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/jose+jwe" }),
        __metadata("design:type", Uint8Array)
    ], CreateDomesticScheduledPaymentConsentsRequests.prototype, "applicationJosePlusJwe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ObWriteDomesticScheduledConsent4)
    ], CreateDomesticScheduledPaymentConsentsRequests.prototype, "obWriteDomesticScheduledConsent4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ObWriteDomesticScheduledConsent4)
    ], CreateDomesticScheduledPaymentConsentsRequests.prototype, "obWriteDomesticScheduledConsent5", void 0);
    return CreateDomesticScheduledPaymentConsentsRequests;
}(SpeakeasyBase));
export { CreateDomesticScheduledPaymentConsentsRequests };
var CreateDomesticScheduledPaymentConsentsSecurity = /** @class */ (function (_super) {
    __extends(CreateDomesticScheduledPaymentConsentsSecurity, _super);
    function CreateDomesticScheduledPaymentConsentsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeTppoAuth2Security)
    ], CreateDomesticScheduledPaymentConsentsSecurity.prototype, "tppoAuth2Security", void 0);
    return CreateDomesticScheduledPaymentConsentsSecurity;
}(SpeakeasyBase));
export { CreateDomesticScheduledPaymentConsentsSecurity };
var CreateDomesticScheduledPaymentConsentsRequest = /** @class */ (function (_super) {
    __extends(CreateDomesticScheduledPaymentConsentsRequest, _super);
    function CreateDomesticScheduledPaymentConsentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDomesticScheduledPaymentConsentsHeaders)
    ], CreateDomesticScheduledPaymentConsentsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDomesticScheduledPaymentConsentsRequests)
    ], CreateDomesticScheduledPaymentConsentsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDomesticScheduledPaymentConsentsSecurity)
    ], CreateDomesticScheduledPaymentConsentsRequest.prototype, "security", void 0);
    return CreateDomesticScheduledPaymentConsentsRequest;
}(SpeakeasyBase));
export { CreateDomesticScheduledPaymentConsentsRequest };
var CreateDomesticScheduledPaymentConsentsResponse = /** @class */ (function (_super) {
    __extends(CreateDomesticScheduledPaymentConsentsResponse, _super);
    function CreateDomesticScheduledPaymentConsentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], CreateDomesticScheduledPaymentConsentsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateDomesticScheduledPaymentConsentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateDomesticScheduledPaymentConsentsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], CreateDomesticScheduledPaymentConsentsResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObWriteDomesticScheduledConsentResponse5)
    ], CreateDomesticScheduledPaymentConsentsResponse.prototype, "obWriteDomesticScheduledConsentResponse5", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateDomesticScheduledPaymentConsentsResponse.prototype, "statusCode", void 0);
    return CreateDomesticScheduledPaymentConsentsResponse;
}(SpeakeasyBase));
export { CreateDomesticScheduledPaymentConsentsResponse };
