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
var CreateInternationalStandingOrderConsentsHeaders = /** @class */ (function (_super) {
    __extends(CreateInternationalStandingOrderConsentsHeaders, _super);
    function CreateInternationalStandingOrderConsentsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], CreateInternationalStandingOrderConsentsHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], CreateInternationalStandingOrderConsentsHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], CreateInternationalStandingOrderConsentsHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], CreateInternationalStandingOrderConsentsHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], CreateInternationalStandingOrderConsentsHeaders.prototype, "xFapiInteractionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-idempotency-key" }),
        __metadata("design:type", String)
    ], CreateInternationalStandingOrderConsentsHeaders.prototype, "xIdempotencyKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-jws-signature" }),
        __metadata("design:type", String)
    ], CreateInternationalStandingOrderConsentsHeaders.prototype, "xJwsSignature", void 0);
    return CreateInternationalStandingOrderConsentsHeaders;
}(SpeakeasyBase));
export { CreateInternationalStandingOrderConsentsHeaders };
var CreateInternationalStandingOrderConsentsRequests = /** @class */ (function (_super) {
    __extends(CreateInternationalStandingOrderConsentsRequests, _super);
    function CreateInternationalStandingOrderConsentsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/jose+jwe" }),
        __metadata("design:type", Uint8Array)
    ], CreateInternationalStandingOrderConsentsRequests.prototype, "applicationJosePlusJwe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ObWriteInternationalStandingOrderConsent6)
    ], CreateInternationalStandingOrderConsentsRequests.prototype, "obWriteInternationalStandingOrderConsent6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ObWriteInternationalStandingOrderConsent6)
    ], CreateInternationalStandingOrderConsentsRequests.prototype, "obWriteInternationalStandingOrderConsent7", void 0);
    return CreateInternationalStandingOrderConsentsRequests;
}(SpeakeasyBase));
export { CreateInternationalStandingOrderConsentsRequests };
var CreateInternationalStandingOrderConsentsSecurity = /** @class */ (function (_super) {
    __extends(CreateInternationalStandingOrderConsentsSecurity, _super);
    function CreateInternationalStandingOrderConsentsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeTppoAuth2Security)
    ], CreateInternationalStandingOrderConsentsSecurity.prototype, "tppoAuth2Security", void 0);
    return CreateInternationalStandingOrderConsentsSecurity;
}(SpeakeasyBase));
export { CreateInternationalStandingOrderConsentsSecurity };
var CreateInternationalStandingOrderConsentsRequest = /** @class */ (function (_super) {
    __extends(CreateInternationalStandingOrderConsentsRequest, _super);
    function CreateInternationalStandingOrderConsentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateInternationalStandingOrderConsentsHeaders)
    ], CreateInternationalStandingOrderConsentsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateInternationalStandingOrderConsentsRequests)
    ], CreateInternationalStandingOrderConsentsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateInternationalStandingOrderConsentsSecurity)
    ], CreateInternationalStandingOrderConsentsRequest.prototype, "security", void 0);
    return CreateInternationalStandingOrderConsentsRequest;
}(SpeakeasyBase));
export { CreateInternationalStandingOrderConsentsRequest };
var CreateInternationalStandingOrderConsentsResponse = /** @class */ (function (_super) {
    __extends(CreateInternationalStandingOrderConsentsResponse, _super);
    function CreateInternationalStandingOrderConsentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], CreateInternationalStandingOrderConsentsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateInternationalStandingOrderConsentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateInternationalStandingOrderConsentsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], CreateInternationalStandingOrderConsentsResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObWriteInternationalStandingOrderConsentResponse7)
    ], CreateInternationalStandingOrderConsentsResponse.prototype, "obWriteInternationalStandingOrderConsentResponse7", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateInternationalStandingOrderConsentsResponse.prototype, "statusCode", void 0);
    return CreateInternationalStandingOrderConsentsResponse;
}(SpeakeasyBase));
export { CreateInternationalStandingOrderConsentsResponse };
