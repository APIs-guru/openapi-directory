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
var CreateDomesticStandingOrderConsentsHeaders = /** @class */ (function (_super) {
    __extends(CreateDomesticStandingOrderConsentsHeaders, _super);
    function CreateDomesticStandingOrderConsentsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], CreateDomesticStandingOrderConsentsHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], CreateDomesticStandingOrderConsentsHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], CreateDomesticStandingOrderConsentsHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], CreateDomesticStandingOrderConsentsHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], CreateDomesticStandingOrderConsentsHeaders.prototype, "xFapiInteractionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-idempotency-key" }),
        __metadata("design:type", String)
    ], CreateDomesticStandingOrderConsentsHeaders.prototype, "xIdempotencyKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-jws-signature" }),
        __metadata("design:type", String)
    ], CreateDomesticStandingOrderConsentsHeaders.prototype, "xJwsSignature", void 0);
    return CreateDomesticStandingOrderConsentsHeaders;
}(SpeakeasyBase));
export { CreateDomesticStandingOrderConsentsHeaders };
var CreateDomesticStandingOrderConsentsRequests = /** @class */ (function (_super) {
    __extends(CreateDomesticStandingOrderConsentsRequests, _super);
    function CreateDomesticStandingOrderConsentsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/jose+jwe" }),
        __metadata("design:type", Uint8Array)
    ], CreateDomesticStandingOrderConsentsRequests.prototype, "applicationJosePlusJwe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ObWriteDomesticStandingOrderConsent5)
    ], CreateDomesticStandingOrderConsentsRequests.prototype, "obWriteDomesticStandingOrderConsent5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ObWriteDomesticStandingOrderConsent5)
    ], CreateDomesticStandingOrderConsentsRequests.prototype, "obWriteDomesticStandingOrderConsent6", void 0);
    return CreateDomesticStandingOrderConsentsRequests;
}(SpeakeasyBase));
export { CreateDomesticStandingOrderConsentsRequests };
var CreateDomesticStandingOrderConsentsSecurity = /** @class */ (function (_super) {
    __extends(CreateDomesticStandingOrderConsentsSecurity, _super);
    function CreateDomesticStandingOrderConsentsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeTppoAuth2Security)
    ], CreateDomesticStandingOrderConsentsSecurity.prototype, "tppoAuth2Security", void 0);
    return CreateDomesticStandingOrderConsentsSecurity;
}(SpeakeasyBase));
export { CreateDomesticStandingOrderConsentsSecurity };
var CreateDomesticStandingOrderConsentsRequest = /** @class */ (function (_super) {
    __extends(CreateDomesticStandingOrderConsentsRequest, _super);
    function CreateDomesticStandingOrderConsentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDomesticStandingOrderConsentsHeaders)
    ], CreateDomesticStandingOrderConsentsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDomesticStandingOrderConsentsRequests)
    ], CreateDomesticStandingOrderConsentsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDomesticStandingOrderConsentsSecurity)
    ], CreateDomesticStandingOrderConsentsRequest.prototype, "security", void 0);
    return CreateDomesticStandingOrderConsentsRequest;
}(SpeakeasyBase));
export { CreateDomesticStandingOrderConsentsRequest };
var CreateDomesticStandingOrderConsentsResponse = /** @class */ (function (_super) {
    __extends(CreateDomesticStandingOrderConsentsResponse, _super);
    function CreateDomesticStandingOrderConsentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], CreateDomesticStandingOrderConsentsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateDomesticStandingOrderConsentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateDomesticStandingOrderConsentsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], CreateDomesticStandingOrderConsentsResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObWriteDomesticStandingOrderConsentResponse6)
    ], CreateDomesticStandingOrderConsentsResponse.prototype, "obWriteDomesticStandingOrderConsentResponse6", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateDomesticStandingOrderConsentsResponse.prototype, "statusCode", void 0);
    return CreateDomesticStandingOrderConsentsResponse;
}(SpeakeasyBase));
export { CreateDomesticStandingOrderConsentsResponse };
