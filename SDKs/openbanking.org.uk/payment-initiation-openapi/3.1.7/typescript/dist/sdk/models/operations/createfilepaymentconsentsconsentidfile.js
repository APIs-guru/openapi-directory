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
var CreateFilePaymentConsentsConsentIdFilePathParams = /** @class */ (function (_super) {
    __extends(CreateFilePaymentConsentsConsentIdFilePathParams, _super);
    function CreateFilePaymentConsentsConsentIdFilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConsentId" }),
        __metadata("design:type", String)
    ], CreateFilePaymentConsentsConsentIdFilePathParams.prototype, "consentId", void 0);
    return CreateFilePaymentConsentsConsentIdFilePathParams;
}(SpeakeasyBase));
export { CreateFilePaymentConsentsConsentIdFilePathParams };
var CreateFilePaymentConsentsConsentIdFileHeaders = /** @class */ (function (_super) {
    __extends(CreateFilePaymentConsentsConsentIdFileHeaders, _super);
    function CreateFilePaymentConsentsConsentIdFileHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], CreateFilePaymentConsentsConsentIdFileHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], CreateFilePaymentConsentsConsentIdFileHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], CreateFilePaymentConsentsConsentIdFileHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], CreateFilePaymentConsentsConsentIdFileHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], CreateFilePaymentConsentsConsentIdFileHeaders.prototype, "xFapiInteractionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-idempotency-key" }),
        __metadata("design:type", String)
    ], CreateFilePaymentConsentsConsentIdFileHeaders.prototype, "xIdempotencyKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-jws-signature" }),
        __metadata("design:type", String)
    ], CreateFilePaymentConsentsConsentIdFileHeaders.prototype, "xJwsSignature", void 0);
    return CreateFilePaymentConsentsConsentIdFileHeaders;
}(SpeakeasyBase));
export { CreateFilePaymentConsentsConsentIdFileHeaders };
var CreateFilePaymentConsentsConsentIdFileRequests = /** @class */ (function (_super) {
    __extends(CreateFilePaymentConsentsConsentIdFileRequests, _super);
    function CreateFilePaymentConsentsConsentIdFileRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/jose+jwe" }),
        __metadata("design:type", Uint8Array)
    ], CreateFilePaymentConsentsConsentIdFileRequests.prototype, "applicationJosePlusJwe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], CreateFilePaymentConsentsConsentIdFileRequests.prototype, "file", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], CreateFilePaymentConsentsConsentIdFileRequests.prototype, "file1", void 0);
    return CreateFilePaymentConsentsConsentIdFileRequests;
}(SpeakeasyBase));
export { CreateFilePaymentConsentsConsentIdFileRequests };
var CreateFilePaymentConsentsConsentIdFileSecurity = /** @class */ (function (_super) {
    __extends(CreateFilePaymentConsentsConsentIdFileSecurity, _super);
    function CreateFilePaymentConsentsConsentIdFileSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeTppoAuth2Security)
    ], CreateFilePaymentConsentsConsentIdFileSecurity.prototype, "tppoAuth2Security", void 0);
    return CreateFilePaymentConsentsConsentIdFileSecurity;
}(SpeakeasyBase));
export { CreateFilePaymentConsentsConsentIdFileSecurity };
var CreateFilePaymentConsentsConsentIdFileRequest = /** @class */ (function (_super) {
    __extends(CreateFilePaymentConsentsConsentIdFileRequest, _super);
    function CreateFilePaymentConsentsConsentIdFileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateFilePaymentConsentsConsentIdFilePathParams)
    ], CreateFilePaymentConsentsConsentIdFileRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateFilePaymentConsentsConsentIdFileHeaders)
    ], CreateFilePaymentConsentsConsentIdFileRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateFilePaymentConsentsConsentIdFileRequests)
    ], CreateFilePaymentConsentsConsentIdFileRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateFilePaymentConsentsConsentIdFileSecurity)
    ], CreateFilePaymentConsentsConsentIdFileRequest.prototype, "security", void 0);
    return CreateFilePaymentConsentsConsentIdFileRequest;
}(SpeakeasyBase));
export { CreateFilePaymentConsentsConsentIdFileRequest };
var CreateFilePaymentConsentsConsentIdFileResponse = /** @class */ (function (_super) {
    __extends(CreateFilePaymentConsentsConsentIdFileResponse, _super);
    function CreateFilePaymentConsentsConsentIdFileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], CreateFilePaymentConsentsConsentIdFileResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateFilePaymentConsentsConsentIdFileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateFilePaymentConsentsConsentIdFileResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], CreateFilePaymentConsentsConsentIdFileResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateFilePaymentConsentsConsentIdFileResponse.prototype, "statusCode", void 0);
    return CreateFilePaymentConsentsConsentIdFileResponse;
}(SpeakeasyBase));
export { CreateFilePaymentConsentsConsentIdFileResponse };
