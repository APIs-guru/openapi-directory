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
var CreateInternationalScheduledPaymentConsentsHeaders = /** @class */ (function (_super) {
    __extends(CreateInternationalScheduledPaymentConsentsHeaders, _super);
    function CreateInternationalScheduledPaymentConsentsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], CreateInternationalScheduledPaymentConsentsHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], CreateInternationalScheduledPaymentConsentsHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], CreateInternationalScheduledPaymentConsentsHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], CreateInternationalScheduledPaymentConsentsHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], CreateInternationalScheduledPaymentConsentsHeaders.prototype, "xFapiInteractionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-idempotency-key" }),
        __metadata("design:type", String)
    ], CreateInternationalScheduledPaymentConsentsHeaders.prototype, "xIdempotencyKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-jws-signature" }),
        __metadata("design:type", String)
    ], CreateInternationalScheduledPaymentConsentsHeaders.prototype, "xJwsSignature", void 0);
    return CreateInternationalScheduledPaymentConsentsHeaders;
}(SpeakeasyBase));
export { CreateInternationalScheduledPaymentConsentsHeaders };
var CreateInternationalScheduledPaymentConsentsRequests = /** @class */ (function (_super) {
    __extends(CreateInternationalScheduledPaymentConsentsRequests, _super);
    function CreateInternationalScheduledPaymentConsentsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/jose+jwe" }),
        __metadata("design:type", Uint8Array)
    ], CreateInternationalScheduledPaymentConsentsRequests.prototype, "applicationJosePlusJwe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ObWriteInternationalScheduledConsent5)
    ], CreateInternationalScheduledPaymentConsentsRequests.prototype, "obWriteInternationalScheduledConsent5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ObWriteInternationalScheduledConsent5)
    ], CreateInternationalScheduledPaymentConsentsRequests.prototype, "obWriteInternationalScheduledConsent6", void 0);
    return CreateInternationalScheduledPaymentConsentsRequests;
}(SpeakeasyBase));
export { CreateInternationalScheduledPaymentConsentsRequests };
var CreateInternationalScheduledPaymentConsentsSecurity = /** @class */ (function (_super) {
    __extends(CreateInternationalScheduledPaymentConsentsSecurity, _super);
    function CreateInternationalScheduledPaymentConsentsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeTppoAuth2Security)
    ], CreateInternationalScheduledPaymentConsentsSecurity.prototype, "tppoAuth2Security", void 0);
    return CreateInternationalScheduledPaymentConsentsSecurity;
}(SpeakeasyBase));
export { CreateInternationalScheduledPaymentConsentsSecurity };
var CreateInternationalScheduledPaymentConsentsRequest = /** @class */ (function (_super) {
    __extends(CreateInternationalScheduledPaymentConsentsRequest, _super);
    function CreateInternationalScheduledPaymentConsentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateInternationalScheduledPaymentConsentsHeaders)
    ], CreateInternationalScheduledPaymentConsentsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateInternationalScheduledPaymentConsentsRequests)
    ], CreateInternationalScheduledPaymentConsentsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateInternationalScheduledPaymentConsentsSecurity)
    ], CreateInternationalScheduledPaymentConsentsRequest.prototype, "security", void 0);
    return CreateInternationalScheduledPaymentConsentsRequest;
}(SpeakeasyBase));
export { CreateInternationalScheduledPaymentConsentsRequest };
var CreateInternationalScheduledPaymentConsentsResponse = /** @class */ (function (_super) {
    __extends(CreateInternationalScheduledPaymentConsentsResponse, _super);
    function CreateInternationalScheduledPaymentConsentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], CreateInternationalScheduledPaymentConsentsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateInternationalScheduledPaymentConsentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateInternationalScheduledPaymentConsentsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], CreateInternationalScheduledPaymentConsentsResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObWriteInternationalScheduledConsentResponse6)
    ], CreateInternationalScheduledPaymentConsentsResponse.prototype, "obWriteInternationalScheduledConsentResponse6", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateInternationalScheduledPaymentConsentsResponse.prototype, "statusCode", void 0);
    return CreateInternationalScheduledPaymentConsentsResponse;
}(SpeakeasyBase));
export { CreateInternationalScheduledPaymentConsentsResponse };
