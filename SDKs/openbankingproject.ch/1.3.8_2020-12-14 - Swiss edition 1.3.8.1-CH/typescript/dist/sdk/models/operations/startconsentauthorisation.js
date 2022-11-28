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
var StartConsentAuthorisationPathParams = /** @class */ (function (_super) {
    __extends(StartConsentAuthorisationPathParams, _super);
    function StartConsentAuthorisationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=consentId" }),
        __metadata("design:type", String)
    ], StartConsentAuthorisationPathParams.prototype, "consentId", void 0);
    return StartConsentAuthorisationPathParams;
}(SpeakeasyBase));
export { StartConsentAuthorisationPathParams };
var StartConsentAuthorisationHeaders = /** @class */ (function (_super) {
    __extends(StartConsentAuthorisationHeaders, _super);
    function StartConsentAuthorisationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Digest" }),
        __metadata("design:type", String)
    ], StartConsentAuthorisationHeaders.prototype, "digest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept" }),
        __metadata("design:type", String)
    ], StartConsentAuthorisationHeaders.prototype, "psuAccept", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Charset" }),
        __metadata("design:type", String)
    ], StartConsentAuthorisationHeaders.prototype, "psuAcceptCharset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Encoding" }),
        __metadata("design:type", String)
    ], StartConsentAuthorisationHeaders.prototype, "psuAcceptEncoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Language" }),
        __metadata("design:type", String)
    ], StartConsentAuthorisationHeaders.prototype, "psuAcceptLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Corporate-ID" }),
        __metadata("design:type", String)
    ], StartConsentAuthorisationHeaders.prototype, "psuCorporateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Corporate-ID-Type" }),
        __metadata("design:type", String)
    ], StartConsentAuthorisationHeaders.prototype, "psuCorporateIdType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Device-ID" }),
        __metadata("design:type", String)
    ], StartConsentAuthorisationHeaders.prototype, "psuDeviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Geo-Location" }),
        __metadata("design:type", String)
    ], StartConsentAuthorisationHeaders.prototype, "psuGeoLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Http-Method" }),
        __metadata("design:type", String)
    ], StartConsentAuthorisationHeaders.prototype, "psuHttpMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-ID" }),
        __metadata("design:type", String)
    ], StartConsentAuthorisationHeaders.prototype, "psuId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-ID-Type" }),
        __metadata("design:type", String)
    ], StartConsentAuthorisationHeaders.prototype, "psuIdType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-IP-Address" }),
        __metadata("design:type", String)
    ], StartConsentAuthorisationHeaders.prototype, "psuIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-IP-Port" }),
        __metadata("design:type", String)
    ], StartConsentAuthorisationHeaders.prototype, "psuIpPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-User-Agent" }),
        __metadata("design:type", String)
    ], StartConsentAuthorisationHeaders.prototype, "psuUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Signature" }),
        __metadata("design:type", String)
    ], StartConsentAuthorisationHeaders.prototype, "signature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Nok-Redirect-URI" }),
        __metadata("design:type", String)
    ], StartConsentAuthorisationHeaders.prototype, "tppNokRedirectUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Notification-Content-Preferred" }),
        __metadata("design:type", String)
    ], StartConsentAuthorisationHeaders.prototype, "tppNotificationContentPreferred", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Notification-URI" }),
        __metadata("design:type", String)
    ], StartConsentAuthorisationHeaders.prototype, "tppNotificationUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Redirect-Preferred" }),
        __metadata("design:type", Boolean)
    ], StartConsentAuthorisationHeaders.prototype, "tppRedirectPreferred", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Redirect-URI" }),
        __metadata("design:type", String)
    ], StartConsentAuthorisationHeaders.prototype, "tppRedirectUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Signature-Certificate" }),
        __metadata("design:type", String)
    ], StartConsentAuthorisationHeaders.prototype, "tppSignatureCertificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Request-ID" }),
        __metadata("design:type", String)
    ], StartConsentAuthorisationHeaders.prototype, "xRequestId", void 0);
    return StartConsentAuthorisationHeaders;
}(SpeakeasyBase));
export { StartConsentAuthorisationHeaders };
var StartConsentAuthorisationSecurity = /** @class */ (function (_super) {
    __extends(StartConsentAuthorisationSecurity, _super);
    function StartConsentAuthorisationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuthOAuth)
    ], StartConsentAuthorisationSecurity.prototype, "bearerAuthOAuth", void 0);
    return StartConsentAuthorisationSecurity;
}(SpeakeasyBase));
export { StartConsentAuthorisationSecurity };
var StartConsentAuthorisationRequest = /** @class */ (function (_super) {
    __extends(StartConsentAuthorisationRequest, _super);
    function StartConsentAuthorisationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StartConsentAuthorisationPathParams)
    ], StartConsentAuthorisationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StartConsentAuthorisationHeaders)
    ], StartConsentAuthorisationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], StartConsentAuthorisationRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StartConsentAuthorisationSecurity)
    ], StartConsentAuthorisationRequest.prototype, "security", void 0);
    return StartConsentAuthorisationRequest;
}(SpeakeasyBase));
export { StartConsentAuthorisationRequest };
var StartConsentAuthorisationResponse = /** @class */ (function (_super) {
    __extends(StartConsentAuthorisationResponse, _super);
    function StartConsentAuthorisationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StartConsentAuthorisationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error400Ais)
    ], StartConsentAuthorisationResponse.prototype, "error400Ais", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error400NgAis)
    ], StartConsentAuthorisationResponse.prototype, "error400NgAis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error401Ais)
    ], StartConsentAuthorisationResponse.prototype, "error401Ais", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error401NgAis)
    ], StartConsentAuthorisationResponse.prototype, "error401NgAis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error403Ais)
    ], StartConsentAuthorisationResponse.prototype, "error403Ais", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error403NgAis)
    ], StartConsentAuthorisationResponse.prototype, "error403NgAis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error404Ais)
    ], StartConsentAuthorisationResponse.prototype, "error404Ais", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error404NgAis)
    ], StartConsentAuthorisationResponse.prototype, "error404NgAis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error405Ais)
    ], StartConsentAuthorisationResponse.prototype, "error405Ais", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error405NgAis)
    ], StartConsentAuthorisationResponse.prototype, "error405NgAis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error406Ais)
    ], StartConsentAuthorisationResponse.prototype, "error406Ais", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error406NgAis)
    ], StartConsentAuthorisationResponse.prototype, "error406NgAis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error409Ais)
    ], StartConsentAuthorisationResponse.prototype, "error409Ais", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error409NgAis)
    ], StartConsentAuthorisationResponse.prototype, "error409NgAis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error429Ais)
    ], StartConsentAuthorisationResponse.prototype, "error429Ais", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error429NgAis)
    ], StartConsentAuthorisationResponse.prototype, "error429NgAis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], StartConsentAuthorisationResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StartConsentAuthorisationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StartScaprocessResponse)
    ], StartConsentAuthorisationResponse.prototype, "startScaprocessResponse", void 0);
    return StartConsentAuthorisationResponse;
}(SpeakeasyBase));
export { StartConsentAuthorisationResponse };
