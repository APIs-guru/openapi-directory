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
var GetSigningBasketScaStatusPathParams = /** @class */ (function (_super) {
    __extends(GetSigningBasketScaStatusPathParams, _super);
    function GetSigningBasketScaStatusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=authorisationId" }),
        __metadata("design:type", String)
    ], GetSigningBasketScaStatusPathParams.prototype, "authorisationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=basketId" }),
        __metadata("design:type", String)
    ], GetSigningBasketScaStatusPathParams.prototype, "basketId", void 0);
    return GetSigningBasketScaStatusPathParams;
}(SpeakeasyBase));
export { GetSigningBasketScaStatusPathParams };
var GetSigningBasketScaStatusHeaders = /** @class */ (function (_super) {
    __extends(GetSigningBasketScaStatusHeaders, _super);
    function GetSigningBasketScaStatusHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Digest" }),
        __metadata("design:type", String)
    ], GetSigningBasketScaStatusHeaders.prototype, "digest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept" }),
        __metadata("design:type", String)
    ], GetSigningBasketScaStatusHeaders.prototype, "psuAccept", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Charset" }),
        __metadata("design:type", String)
    ], GetSigningBasketScaStatusHeaders.prototype, "psuAcceptCharset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Encoding" }),
        __metadata("design:type", String)
    ], GetSigningBasketScaStatusHeaders.prototype, "psuAcceptEncoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Language" }),
        __metadata("design:type", String)
    ], GetSigningBasketScaStatusHeaders.prototype, "psuAcceptLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Device-ID" }),
        __metadata("design:type", String)
    ], GetSigningBasketScaStatusHeaders.prototype, "psuDeviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Geo-Location" }),
        __metadata("design:type", String)
    ], GetSigningBasketScaStatusHeaders.prototype, "psuGeoLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Http-Method" }),
        __metadata("design:type", String)
    ], GetSigningBasketScaStatusHeaders.prototype, "psuHttpMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-IP-Address" }),
        __metadata("design:type", String)
    ], GetSigningBasketScaStatusHeaders.prototype, "psuIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-IP-Port" }),
        __metadata("design:type", String)
    ], GetSigningBasketScaStatusHeaders.prototype, "psuIpPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-User-Agent" }),
        __metadata("design:type", String)
    ], GetSigningBasketScaStatusHeaders.prototype, "psuUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Signature" }),
        __metadata("design:type", String)
    ], GetSigningBasketScaStatusHeaders.prototype, "signature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Signature-Certificate" }),
        __metadata("design:type", String)
    ], GetSigningBasketScaStatusHeaders.prototype, "tppSignatureCertificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Request-ID" }),
        __metadata("design:type", String)
    ], GetSigningBasketScaStatusHeaders.prototype, "xRequestId", void 0);
    return GetSigningBasketScaStatusHeaders;
}(SpeakeasyBase));
export { GetSigningBasketScaStatusHeaders };
var GetSigningBasketScaStatusSecurity = /** @class */ (function (_super) {
    __extends(GetSigningBasketScaStatusSecurity, _super);
    function GetSigningBasketScaStatusSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuthOAuth)
    ], GetSigningBasketScaStatusSecurity.prototype, "bearerAuthOAuth", void 0);
    return GetSigningBasketScaStatusSecurity;
}(SpeakeasyBase));
export { GetSigningBasketScaStatusSecurity };
var GetSigningBasketScaStatusRequest = /** @class */ (function (_super) {
    __extends(GetSigningBasketScaStatusRequest, _super);
    function GetSigningBasketScaStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSigningBasketScaStatusPathParams)
    ], GetSigningBasketScaStatusRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSigningBasketScaStatusHeaders)
    ], GetSigningBasketScaStatusRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSigningBasketScaStatusSecurity)
    ], GetSigningBasketScaStatusRequest.prototype, "security", void 0);
    return GetSigningBasketScaStatusRequest;
}(SpeakeasyBase));
export { GetSigningBasketScaStatusRequest };
var GetSigningBasketScaStatusResponse = /** @class */ (function (_super) {
    __extends(GetSigningBasketScaStatusResponse, _super);
    function GetSigningBasketScaStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSigningBasketScaStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error400NgSbs)
    ], GetSigningBasketScaStatusResponse.prototype, "error400NgSbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error400Sbs)
    ], GetSigningBasketScaStatusResponse.prototype, "error400Sbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error401NgSbs)
    ], GetSigningBasketScaStatusResponse.prototype, "error401NgSbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error401Sbs)
    ], GetSigningBasketScaStatusResponse.prototype, "error401Sbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error403NgSbs)
    ], GetSigningBasketScaStatusResponse.prototype, "error403NgSbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error403Sbs)
    ], GetSigningBasketScaStatusResponse.prototype, "error403Sbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error404NgSbs)
    ], GetSigningBasketScaStatusResponse.prototype, "error404NgSbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error404Sbs)
    ], GetSigningBasketScaStatusResponse.prototype, "error404Sbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error405NgSbs)
    ], GetSigningBasketScaStatusResponse.prototype, "error405NgSbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error405Sbs)
    ], GetSigningBasketScaStatusResponse.prototype, "error405Sbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error409NgSbs)
    ], GetSigningBasketScaStatusResponse.prototype, "error409NgSbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error409Sbs)
    ], GetSigningBasketScaStatusResponse.prototype, "error409Sbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetSigningBasketScaStatusResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSigningBasketScaStatusResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ScaStatusResponse)
    ], GetSigningBasketScaStatusResponse.prototype, "scaStatusResponse", void 0);
    return GetSigningBasketScaStatusResponse;
}(SpeakeasyBase));
export { GetSigningBasketScaStatusResponse };
