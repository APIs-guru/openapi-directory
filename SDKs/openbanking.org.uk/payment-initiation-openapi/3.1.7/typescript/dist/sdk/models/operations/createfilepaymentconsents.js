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
var CreateFilePaymentConsentsHeaders = /** @class */ (function (_super) {
    __extends(CreateFilePaymentConsentsHeaders, _super);
    function CreateFilePaymentConsentsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], CreateFilePaymentConsentsHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], CreateFilePaymentConsentsHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], CreateFilePaymentConsentsHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], CreateFilePaymentConsentsHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], CreateFilePaymentConsentsHeaders.prototype, "xFapiInteractionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-idempotency-key" }),
        __metadata("design:type", String)
    ], CreateFilePaymentConsentsHeaders.prototype, "xIdempotencyKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-jws-signature" }),
        __metadata("design:type", String)
    ], CreateFilePaymentConsentsHeaders.prototype, "xJwsSignature", void 0);
    return CreateFilePaymentConsentsHeaders;
}(SpeakeasyBase));
export { CreateFilePaymentConsentsHeaders };
var CreateFilePaymentConsentsRequests = /** @class */ (function (_super) {
    __extends(CreateFilePaymentConsentsRequests, _super);
    function CreateFilePaymentConsentsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/jose+jwe" }),
        __metadata("design:type", Uint8Array)
    ], CreateFilePaymentConsentsRequests.prototype, "applicationJosePlusJwe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ObWriteFileConsent3)
    ], CreateFilePaymentConsentsRequests.prototype, "obWriteFileConsent3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ObWriteFileConsent3)
    ], CreateFilePaymentConsentsRequests.prototype, "obWriteFileConsent4", void 0);
    return CreateFilePaymentConsentsRequests;
}(SpeakeasyBase));
export { CreateFilePaymentConsentsRequests };
var CreateFilePaymentConsentsSecurity = /** @class */ (function (_super) {
    __extends(CreateFilePaymentConsentsSecurity, _super);
    function CreateFilePaymentConsentsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeTppoAuth2Security)
    ], CreateFilePaymentConsentsSecurity.prototype, "tppoAuth2Security", void 0);
    return CreateFilePaymentConsentsSecurity;
}(SpeakeasyBase));
export { CreateFilePaymentConsentsSecurity };
var CreateFilePaymentConsentsRequest = /** @class */ (function (_super) {
    __extends(CreateFilePaymentConsentsRequest, _super);
    function CreateFilePaymentConsentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateFilePaymentConsentsHeaders)
    ], CreateFilePaymentConsentsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateFilePaymentConsentsRequests)
    ], CreateFilePaymentConsentsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateFilePaymentConsentsSecurity)
    ], CreateFilePaymentConsentsRequest.prototype, "security", void 0);
    return CreateFilePaymentConsentsRequest;
}(SpeakeasyBase));
export { CreateFilePaymentConsentsRequest };
var CreateFilePaymentConsentsResponse = /** @class */ (function (_super) {
    __extends(CreateFilePaymentConsentsResponse, _super);
    function CreateFilePaymentConsentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], CreateFilePaymentConsentsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateFilePaymentConsentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateFilePaymentConsentsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], CreateFilePaymentConsentsResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObWriteFileConsentResponse4)
    ], CreateFilePaymentConsentsResponse.prototype, "obWriteFileConsentResponse4", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateFilePaymentConsentsResponse.prototype, "statusCode", void 0);
    return CreateFilePaymentConsentsResponse;
}(SpeakeasyBase));
export { CreateFilePaymentConsentsResponse };
