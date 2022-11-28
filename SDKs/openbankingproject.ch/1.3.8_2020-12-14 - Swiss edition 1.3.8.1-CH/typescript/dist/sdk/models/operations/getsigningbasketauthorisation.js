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
var GetSigningBasketAuthorisationPathParams = /** @class */ (function (_super) {
    __extends(GetSigningBasketAuthorisationPathParams, _super);
    function GetSigningBasketAuthorisationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=basketId" }),
        __metadata("design:type", String)
    ], GetSigningBasketAuthorisationPathParams.prototype, "basketId", void 0);
    return GetSigningBasketAuthorisationPathParams;
}(SpeakeasyBase));
export { GetSigningBasketAuthorisationPathParams };
var GetSigningBasketAuthorisationHeaders = /** @class */ (function (_super) {
    __extends(GetSigningBasketAuthorisationHeaders, _super);
    function GetSigningBasketAuthorisationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Digest" }),
        __metadata("design:type", String)
    ], GetSigningBasketAuthorisationHeaders.prototype, "digest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept" }),
        __metadata("design:type", String)
    ], GetSigningBasketAuthorisationHeaders.prototype, "psuAccept", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Charset" }),
        __metadata("design:type", String)
    ], GetSigningBasketAuthorisationHeaders.prototype, "psuAcceptCharset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Encoding" }),
        __metadata("design:type", String)
    ], GetSigningBasketAuthorisationHeaders.prototype, "psuAcceptEncoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Language" }),
        __metadata("design:type", String)
    ], GetSigningBasketAuthorisationHeaders.prototype, "psuAcceptLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Device-ID" }),
        __metadata("design:type", String)
    ], GetSigningBasketAuthorisationHeaders.prototype, "psuDeviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Geo-Location" }),
        __metadata("design:type", String)
    ], GetSigningBasketAuthorisationHeaders.prototype, "psuGeoLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Http-Method" }),
        __metadata("design:type", String)
    ], GetSigningBasketAuthorisationHeaders.prototype, "psuHttpMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-IP-Address" }),
        __metadata("design:type", String)
    ], GetSigningBasketAuthorisationHeaders.prototype, "psuIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-IP-Port" }),
        __metadata("design:type", String)
    ], GetSigningBasketAuthorisationHeaders.prototype, "psuIpPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-User-Agent" }),
        __metadata("design:type", String)
    ], GetSigningBasketAuthorisationHeaders.prototype, "psuUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Signature" }),
        __metadata("design:type", String)
    ], GetSigningBasketAuthorisationHeaders.prototype, "signature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Signature-Certificate" }),
        __metadata("design:type", String)
    ], GetSigningBasketAuthorisationHeaders.prototype, "tppSignatureCertificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Request-ID" }),
        __metadata("design:type", String)
    ], GetSigningBasketAuthorisationHeaders.prototype, "xRequestId", void 0);
    return GetSigningBasketAuthorisationHeaders;
}(SpeakeasyBase));
export { GetSigningBasketAuthorisationHeaders };
var GetSigningBasketAuthorisationSecurity = /** @class */ (function (_super) {
    __extends(GetSigningBasketAuthorisationSecurity, _super);
    function GetSigningBasketAuthorisationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuthOAuth)
    ], GetSigningBasketAuthorisationSecurity.prototype, "bearerAuthOAuth", void 0);
    return GetSigningBasketAuthorisationSecurity;
}(SpeakeasyBase));
export { GetSigningBasketAuthorisationSecurity };
var GetSigningBasketAuthorisationRequest = /** @class */ (function (_super) {
    __extends(GetSigningBasketAuthorisationRequest, _super);
    function GetSigningBasketAuthorisationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSigningBasketAuthorisationPathParams)
    ], GetSigningBasketAuthorisationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSigningBasketAuthorisationHeaders)
    ], GetSigningBasketAuthorisationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSigningBasketAuthorisationSecurity)
    ], GetSigningBasketAuthorisationRequest.prototype, "security", void 0);
    return GetSigningBasketAuthorisationRequest;
}(SpeakeasyBase));
export { GetSigningBasketAuthorisationRequest };
var GetSigningBasketAuthorisationResponse = /** @class */ (function (_super) {
    __extends(GetSigningBasketAuthorisationResponse, _super);
    function GetSigningBasketAuthorisationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSigningBasketAuthorisationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error400NgSbs)
    ], GetSigningBasketAuthorisationResponse.prototype, "error400NgSbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error400Sbs)
    ], GetSigningBasketAuthorisationResponse.prototype, "error400Sbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error401NgSbs)
    ], GetSigningBasketAuthorisationResponse.prototype, "error401NgSbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error401Sbs)
    ], GetSigningBasketAuthorisationResponse.prototype, "error401Sbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error403NgSbs)
    ], GetSigningBasketAuthorisationResponse.prototype, "error403NgSbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error403Sbs)
    ], GetSigningBasketAuthorisationResponse.prototype, "error403Sbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error404NgSbs)
    ], GetSigningBasketAuthorisationResponse.prototype, "error404NgSbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error404Sbs)
    ], GetSigningBasketAuthorisationResponse.prototype, "error404Sbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error405NgSbs)
    ], GetSigningBasketAuthorisationResponse.prototype, "error405NgSbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error405Sbs)
    ], GetSigningBasketAuthorisationResponse.prototype, "error405Sbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error409NgSbs)
    ], GetSigningBasketAuthorisationResponse.prototype, "error409NgSbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error409Sbs)
    ], GetSigningBasketAuthorisationResponse.prototype, "error409Sbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetSigningBasketAuthorisationResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSigningBasketAuthorisationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Authorisations)
    ], GetSigningBasketAuthorisationResponse.prototype, "authorisations", void 0);
    return GetSigningBasketAuthorisationResponse;
}(SpeakeasyBase));
export { GetSigningBasketAuthorisationResponse };
