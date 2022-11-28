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
var CreateSigningBasketHeaders = /** @class */ (function (_super) {
    __extends(CreateSigningBasketHeaders, _super);
    function CreateSigningBasketHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Consent-ID" }),
        __metadata("design:type", String)
    ], CreateSigningBasketHeaders.prototype, "consentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Digest" }),
        __metadata("design:type", String)
    ], CreateSigningBasketHeaders.prototype, "digest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept" }),
        __metadata("design:type", String)
    ], CreateSigningBasketHeaders.prototype, "psuAccept", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Charset" }),
        __metadata("design:type", String)
    ], CreateSigningBasketHeaders.prototype, "psuAcceptCharset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Encoding" }),
        __metadata("design:type", String)
    ], CreateSigningBasketHeaders.prototype, "psuAcceptEncoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Language" }),
        __metadata("design:type", String)
    ], CreateSigningBasketHeaders.prototype, "psuAcceptLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Corporate-ID" }),
        __metadata("design:type", String)
    ], CreateSigningBasketHeaders.prototype, "psuCorporateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Corporate-ID-Type" }),
        __metadata("design:type", String)
    ], CreateSigningBasketHeaders.prototype, "psuCorporateIdType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Device-ID" }),
        __metadata("design:type", String)
    ], CreateSigningBasketHeaders.prototype, "psuDeviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Geo-Location" }),
        __metadata("design:type", String)
    ], CreateSigningBasketHeaders.prototype, "psuGeoLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Http-Method" }),
        __metadata("design:type", String)
    ], CreateSigningBasketHeaders.prototype, "psuHttpMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-ID" }),
        __metadata("design:type", String)
    ], CreateSigningBasketHeaders.prototype, "psuId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-ID-Type" }),
        __metadata("design:type", String)
    ], CreateSigningBasketHeaders.prototype, "psuIdType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-IP-Address" }),
        __metadata("design:type", String)
    ], CreateSigningBasketHeaders.prototype, "psuIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-IP-Port" }),
        __metadata("design:type", String)
    ], CreateSigningBasketHeaders.prototype, "psuIpPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-User-Agent" }),
        __metadata("design:type", String)
    ], CreateSigningBasketHeaders.prototype, "psuUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Signature" }),
        __metadata("design:type", String)
    ], CreateSigningBasketHeaders.prototype, "signature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Explicit-Authorisation-Preferred" }),
        __metadata("design:type", Boolean)
    ], CreateSigningBasketHeaders.prototype, "tppExplicitAuthorisationPreferred", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Nok-Redirect-URI" }),
        __metadata("design:type", String)
    ], CreateSigningBasketHeaders.prototype, "tppNokRedirectUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Notification-Content-Preferred" }),
        __metadata("design:type", String)
    ], CreateSigningBasketHeaders.prototype, "tppNotificationContentPreferred", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Notification-URI" }),
        __metadata("design:type", String)
    ], CreateSigningBasketHeaders.prototype, "tppNotificationUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Redirect-Preferred" }),
        __metadata("design:type", Boolean)
    ], CreateSigningBasketHeaders.prototype, "tppRedirectPreferred", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Redirect-URI" }),
        __metadata("design:type", String)
    ], CreateSigningBasketHeaders.prototype, "tppRedirectUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Signature-Certificate" }),
        __metadata("design:type", String)
    ], CreateSigningBasketHeaders.prototype, "tppSignatureCertificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Request-ID" }),
        __metadata("design:type", String)
    ], CreateSigningBasketHeaders.prototype, "xRequestId", void 0);
    return CreateSigningBasketHeaders;
}(SpeakeasyBase));
export { CreateSigningBasketHeaders };
var CreateSigningBasketSecurity = /** @class */ (function (_super) {
    __extends(CreateSigningBasketSecurity, _super);
    function CreateSigningBasketSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuthOAuth)
    ], CreateSigningBasketSecurity.prototype, "bearerAuthOAuth", void 0);
    return CreateSigningBasketSecurity;
}(SpeakeasyBase));
export { CreateSigningBasketSecurity };
var CreateSigningBasketRequest = /** @class */ (function (_super) {
    __extends(CreateSigningBasketRequest, _super);
    function CreateSigningBasketRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSigningBasketHeaders)
    ], CreateSigningBasketRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SigningBasket)
    ], CreateSigningBasketRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSigningBasketSecurity)
    ], CreateSigningBasketRequest.prototype, "security", void 0);
    return CreateSigningBasketRequest;
}(SpeakeasyBase));
export { CreateSigningBasketRequest };
var CreateSigningBasketResponse = /** @class */ (function (_super) {
    __extends(CreateSigningBasketResponse, _super);
    function CreateSigningBasketResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSigningBasketResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error400NgSbs)
    ], CreateSigningBasketResponse.prototype, "error400NgSbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error400Sbs)
    ], CreateSigningBasketResponse.prototype, "error400Sbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error401NgSbs)
    ], CreateSigningBasketResponse.prototype, "error401NgSbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error401Sbs)
    ], CreateSigningBasketResponse.prototype, "error401Sbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error403NgSbs)
    ], CreateSigningBasketResponse.prototype, "error403NgSbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error403Sbs)
    ], CreateSigningBasketResponse.prototype, "error403Sbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error404NgSbs)
    ], CreateSigningBasketResponse.prototype, "error404NgSbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error404Sbs)
    ], CreateSigningBasketResponse.prototype, "error404Sbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error405NgSbs)
    ], CreateSigningBasketResponse.prototype, "error405NgSbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error405Sbs)
    ], CreateSigningBasketResponse.prototype, "error405Sbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error409NgSbs)
    ], CreateSigningBasketResponse.prototype, "error409NgSbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error409Sbs)
    ], CreateSigningBasketResponse.prototype, "error409Sbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateSigningBasketResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateSigningBasketResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SigningBasketResponse201)
    ], CreateSigningBasketResponse.prototype, "signingBasketResponse201", void 0);
    return CreateSigningBasketResponse;
}(SpeakeasyBase));
export { CreateSigningBasketResponse };
