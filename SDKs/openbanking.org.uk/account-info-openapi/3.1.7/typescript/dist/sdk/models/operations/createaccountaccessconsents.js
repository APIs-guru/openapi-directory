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
var CreateAccountAccessConsentsHeaders = /** @class */ (function (_super) {
    __extends(CreateAccountAccessConsentsHeaders, _super);
    function CreateAccountAccessConsentsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], CreateAccountAccessConsentsHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], CreateAccountAccessConsentsHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], CreateAccountAccessConsentsHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], CreateAccountAccessConsentsHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], CreateAccountAccessConsentsHeaders.prototype, "xFapiInteractionId", void 0);
    return CreateAccountAccessConsentsHeaders;
}(SpeakeasyBase));
export { CreateAccountAccessConsentsHeaders };
var CreateAccountAccessConsentsRequests = /** @class */ (function (_super) {
    __extends(CreateAccountAccessConsentsRequests, _super);
    function CreateAccountAccessConsentsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/jose+jwe" }),
        __metadata("design:type", Uint8Array)
    ], CreateAccountAccessConsentsRequests.prototype, "applicationJosePlusJwe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ObReadConsent1)
    ], CreateAccountAccessConsentsRequests.prototype, "obReadConsent1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ObReadConsent1)
    ], CreateAccountAccessConsentsRequests.prototype, "obReadConsent2", void 0);
    return CreateAccountAccessConsentsRequests;
}(SpeakeasyBase));
export { CreateAccountAccessConsentsRequests };
var CreateAccountAccessConsentsSecurity = /** @class */ (function (_super) {
    __extends(CreateAccountAccessConsentsSecurity, _super);
    function CreateAccountAccessConsentsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeTppoAuth2Security)
    ], CreateAccountAccessConsentsSecurity.prototype, "tppoAuth2Security", void 0);
    return CreateAccountAccessConsentsSecurity;
}(SpeakeasyBase));
export { CreateAccountAccessConsentsSecurity };
var CreateAccountAccessConsentsRequest = /** @class */ (function (_super) {
    __extends(CreateAccountAccessConsentsRequest, _super);
    function CreateAccountAccessConsentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAccountAccessConsentsHeaders)
    ], CreateAccountAccessConsentsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAccountAccessConsentsRequests)
    ], CreateAccountAccessConsentsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAccountAccessConsentsSecurity)
    ], CreateAccountAccessConsentsRequest.prototype, "security", void 0);
    return CreateAccountAccessConsentsRequest;
}(SpeakeasyBase));
export { CreateAccountAccessConsentsRequest };
var CreateAccountAccessConsentsResponse = /** @class */ (function (_super) {
    __extends(CreateAccountAccessConsentsResponse, _super);
    function CreateAccountAccessConsentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], CreateAccountAccessConsentsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateAccountAccessConsentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateAccountAccessConsentsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], CreateAccountAccessConsentsResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObReadConsentResponse1)
    ], CreateAccountAccessConsentsResponse.prototype, "obReadConsentResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateAccountAccessConsentsResponse.prototype, "statusCode", void 0);
    return CreateAccountAccessConsentsResponse;
}(SpeakeasyBase));
export { CreateAccountAccessConsentsResponse };
