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
var StartSigningBasketAuthorisationPathParams = /** @class */ (function (_super) {
    __extends(StartSigningBasketAuthorisationPathParams, _super);
    function StartSigningBasketAuthorisationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=basketId" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationPathParams.prototype, "basketId", void 0);
    return StartSigningBasketAuthorisationPathParams;
}(SpeakeasyBase));
export { StartSigningBasketAuthorisationPathParams };
var StartSigningBasketAuthorisationHeaders = /** @class */ (function (_super) {
    __extends(StartSigningBasketAuthorisationHeaders, _super);
    function StartSigningBasketAuthorisationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Digest" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "digest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "psuAccept", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Charset" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "psuAcceptCharset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Encoding" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "psuAcceptEncoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Language" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "psuAcceptLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Corporate-ID" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "psuCorporateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Corporate-ID-Type" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "psuCorporateIdType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Device-ID" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "psuDeviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Geo-Location" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "psuGeoLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Http-Method" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "psuHttpMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-ID" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "psuId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-ID-Type" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "psuIdType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-IP-Address" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "psuIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-IP-Port" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "psuIpPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-User-Agent" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "psuUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Signature" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "signature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Nok-Redirect-URI" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "tppNokRedirectUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Notification-Content-Preferred" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "tppNotificationContentPreferred", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Notification-URI" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "tppNotificationUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Redirect-Preferred" }),
        __metadata("design:type", Boolean)
    ], StartSigningBasketAuthorisationHeaders.prototype, "tppRedirectPreferred", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Redirect-URI" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "tppRedirectUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Signature-Certificate" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "tppSignatureCertificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Request-ID" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "xRequestId", void 0);
    return StartSigningBasketAuthorisationHeaders;
}(SpeakeasyBase));
export { StartSigningBasketAuthorisationHeaders };
var StartSigningBasketAuthorisationSecurity = /** @class */ (function (_super) {
    __extends(StartSigningBasketAuthorisationSecurity, _super);
    function StartSigningBasketAuthorisationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuthOAuth)
    ], StartSigningBasketAuthorisationSecurity.prototype, "bearerAuthOAuth", void 0);
    return StartSigningBasketAuthorisationSecurity;
}(SpeakeasyBase));
export { StartSigningBasketAuthorisationSecurity };
var StartSigningBasketAuthorisationRequest = /** @class */ (function (_super) {
    __extends(StartSigningBasketAuthorisationRequest, _super);
    function StartSigningBasketAuthorisationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StartSigningBasketAuthorisationPathParams)
    ], StartSigningBasketAuthorisationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StartSigningBasketAuthorisationHeaders)
    ], StartSigningBasketAuthorisationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], StartSigningBasketAuthorisationRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StartSigningBasketAuthorisationSecurity)
    ], StartSigningBasketAuthorisationRequest.prototype, "security", void 0);
    return StartSigningBasketAuthorisationRequest;
}(SpeakeasyBase));
export { StartSigningBasketAuthorisationRequest };
var StartSigningBasketAuthorisationResponse = /** @class */ (function (_super) {
    __extends(StartSigningBasketAuthorisationResponse, _super);
    function StartSigningBasketAuthorisationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error400NgSbs)
    ], StartSigningBasketAuthorisationResponse.prototype, "error400NgSbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error400Sbs)
    ], StartSigningBasketAuthorisationResponse.prototype, "error400Sbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error401NgSbs)
    ], StartSigningBasketAuthorisationResponse.prototype, "error401NgSbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error401Sbs)
    ], StartSigningBasketAuthorisationResponse.prototype, "error401Sbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error403NgSbs)
    ], StartSigningBasketAuthorisationResponse.prototype, "error403NgSbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error403Sbs)
    ], StartSigningBasketAuthorisationResponse.prototype, "error403Sbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error404NgSbs)
    ], StartSigningBasketAuthorisationResponse.prototype, "error404NgSbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error404Sbs)
    ], StartSigningBasketAuthorisationResponse.prototype, "error404Sbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error405NgSbs)
    ], StartSigningBasketAuthorisationResponse.prototype, "error405NgSbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error405Sbs)
    ], StartSigningBasketAuthorisationResponse.prototype, "error405Sbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error409NgSbs)
    ], StartSigningBasketAuthorisationResponse.prototype, "error409NgSbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error409Sbs)
    ], StartSigningBasketAuthorisationResponse.prototype, "error409Sbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], StartSigningBasketAuthorisationResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StartSigningBasketAuthorisationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StartScaprocessResponse)
    ], StartSigningBasketAuthorisationResponse.prototype, "startScaprocessResponse", void 0);
    return StartSigningBasketAuthorisationResponse;
}(SpeakeasyBase));
export { StartSigningBasketAuthorisationResponse };
