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
var PostAccountAccessConsentsHeaders = /** @class */ (function (_super) {
    __extends(PostAccountAccessConsentsHeaders, _super);
    function PostAccountAccessConsentsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=sandbox-id" }),
        __metadata("design:type", String)
    ], PostAccountAccessConsentsHeaders.prototype, "sandboxId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], PostAccountAccessConsentsHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], PostAccountAccessConsentsHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], PostAccountAccessConsentsHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], PostAccountAccessConsentsHeaders.prototype, "xFapiInteractionId", void 0);
    return PostAccountAccessConsentsHeaders;
}(SpeakeasyBase));
export { PostAccountAccessConsentsHeaders };
var PostAccountAccessConsentsRequests = /** @class */ (function (_super) {
    __extends(PostAccountAccessConsentsRequests, _super);
    function PostAccountAccessConsentsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ObReadConsent1)
    ], PostAccountAccessConsentsRequests.prototype, "obReadConsent1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ObReadConsent1)
    ], PostAccountAccessConsentsRequests.prototype, "obReadConsent2", void 0);
    return PostAccountAccessConsentsRequests;
}(SpeakeasyBase));
export { PostAccountAccessConsentsRequests };
var PostAccountAccessConsentsSecurity = /** @class */ (function (_super) {
    __extends(PostAccountAccessConsentsSecurity, _super);
    function PostAccountAccessConsentsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeClientCredentialsToken)
    ], PostAccountAccessConsentsSecurity.prototype, "clientCredentialsToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], PostAccountAccessConsentsSecurity.prototype, "clientId", void 0);
    return PostAccountAccessConsentsSecurity;
}(SpeakeasyBase));
export { PostAccountAccessConsentsSecurity };
var PostAccountAccessConsentsRequest = /** @class */ (function (_super) {
    __extends(PostAccountAccessConsentsRequest, _super);
    function PostAccountAccessConsentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAccountAccessConsentsHeaders)
    ], PostAccountAccessConsentsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAccountAccessConsentsRequests)
    ], PostAccountAccessConsentsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAccountAccessConsentsSecurity)
    ], PostAccountAccessConsentsRequest.prototype, "security", void 0);
    return PostAccountAccessConsentsRequest;
}(SpeakeasyBase));
export { PostAccountAccessConsentsRequest };
var PostAccountAccessConsentsResponse = /** @class */ (function (_super) {
    __extends(PostAccountAccessConsentsResponse, _super);
    function PostAccountAccessConsentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAccountAccessConsentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PostAccountAccessConsentsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], PostAccountAccessConsentsResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObReadConsentResponse1)
    ], PostAccountAccessConsentsResponse.prototype, "obReadConsentResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAccountAccessConsentsResponse.prototype, "statusCode", void 0);
    return PostAccountAccessConsentsResponse;
}(SpeakeasyBase));
export { PostAccountAccessConsentsResponse };
