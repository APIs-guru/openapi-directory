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
var CreateDomesticPaymentConsentsHeaders = /** @class */ (function (_super) {
    __extends(CreateDomesticPaymentConsentsHeaders, _super);
    function CreateDomesticPaymentConsentsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], CreateDomesticPaymentConsentsHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], CreateDomesticPaymentConsentsHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], CreateDomesticPaymentConsentsHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], CreateDomesticPaymentConsentsHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], CreateDomesticPaymentConsentsHeaders.prototype, "xFapiInteractionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-idempotency-key" }),
        __metadata("design:type", String)
    ], CreateDomesticPaymentConsentsHeaders.prototype, "xIdempotencyKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-jws-signature" }),
        __metadata("design:type", String)
    ], CreateDomesticPaymentConsentsHeaders.prototype, "xJwsSignature", void 0);
    return CreateDomesticPaymentConsentsHeaders;
}(SpeakeasyBase));
export { CreateDomesticPaymentConsentsHeaders };
var CreateDomesticPaymentConsentsRequests = /** @class */ (function (_super) {
    __extends(CreateDomesticPaymentConsentsRequests, _super);
    function CreateDomesticPaymentConsentsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/jose+jwe" }),
        __metadata("design:type", Uint8Array)
    ], CreateDomesticPaymentConsentsRequests.prototype, "applicationJosePlusJwe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ObWriteDomesticConsent4)
    ], CreateDomesticPaymentConsentsRequests.prototype, "obWriteDomesticConsent4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ObWriteDomesticConsent4)
    ], CreateDomesticPaymentConsentsRequests.prototype, "obWriteDomesticConsent5", void 0);
    return CreateDomesticPaymentConsentsRequests;
}(SpeakeasyBase));
export { CreateDomesticPaymentConsentsRequests };
var CreateDomesticPaymentConsentsSecurity = /** @class */ (function (_super) {
    __extends(CreateDomesticPaymentConsentsSecurity, _super);
    function CreateDomesticPaymentConsentsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeTppoAuth2Security)
    ], CreateDomesticPaymentConsentsSecurity.prototype, "tppoAuth2Security", void 0);
    return CreateDomesticPaymentConsentsSecurity;
}(SpeakeasyBase));
export { CreateDomesticPaymentConsentsSecurity };
var CreateDomesticPaymentConsentsRequest = /** @class */ (function (_super) {
    __extends(CreateDomesticPaymentConsentsRequest, _super);
    function CreateDomesticPaymentConsentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDomesticPaymentConsentsHeaders)
    ], CreateDomesticPaymentConsentsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDomesticPaymentConsentsRequests)
    ], CreateDomesticPaymentConsentsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDomesticPaymentConsentsSecurity)
    ], CreateDomesticPaymentConsentsRequest.prototype, "security", void 0);
    return CreateDomesticPaymentConsentsRequest;
}(SpeakeasyBase));
export { CreateDomesticPaymentConsentsRequest };
var CreateDomesticPaymentConsentsResponse = /** @class */ (function (_super) {
    __extends(CreateDomesticPaymentConsentsResponse, _super);
    function CreateDomesticPaymentConsentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], CreateDomesticPaymentConsentsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateDomesticPaymentConsentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateDomesticPaymentConsentsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], CreateDomesticPaymentConsentsResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObWriteDomesticConsentResponse5)
    ], CreateDomesticPaymentConsentsResponse.prototype, "obWriteDomesticConsentResponse5", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateDomesticPaymentConsentsResponse.prototype, "statusCode", void 0);
    return CreateDomesticPaymentConsentsResponse;
}(SpeakeasyBase));
export { CreateDomesticPaymentConsentsResponse };
