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
var GetPaymentInitiationAuthorisationPathParams = /** @class */ (function (_super) {
    __extends(GetPaymentInitiationAuthorisationPathParams, _super);
    function GetPaymentInitiationAuthorisationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment-product" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationAuthorisationPathParams.prototype, "paymentProduct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment-service" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationAuthorisationPathParams.prototype, "paymentService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=paymentId" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationAuthorisationPathParams.prototype, "paymentId", void 0);
    return GetPaymentInitiationAuthorisationPathParams;
}(SpeakeasyBase));
export { GetPaymentInitiationAuthorisationPathParams };
var GetPaymentInitiationAuthorisationHeaders = /** @class */ (function (_super) {
    __extends(GetPaymentInitiationAuthorisationHeaders, _super);
    function GetPaymentInitiationAuthorisationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Digest" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationAuthorisationHeaders.prototype, "digest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationAuthorisationHeaders.prototype, "psuAccept", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Charset" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationAuthorisationHeaders.prototype, "psuAcceptCharset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Encoding" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationAuthorisationHeaders.prototype, "psuAcceptEncoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Language" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationAuthorisationHeaders.prototype, "psuAcceptLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Device-ID" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationAuthorisationHeaders.prototype, "psuDeviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Geo-Location" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationAuthorisationHeaders.prototype, "psuGeoLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Http-Method" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationAuthorisationHeaders.prototype, "psuHttpMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-IP-Address" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationAuthorisationHeaders.prototype, "psuIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-IP-Port" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationAuthorisationHeaders.prototype, "psuIpPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-User-Agent" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationAuthorisationHeaders.prototype, "psuUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Signature" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationAuthorisationHeaders.prototype, "signature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Signature-Certificate" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationAuthorisationHeaders.prototype, "tppSignatureCertificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Request-ID" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationAuthorisationHeaders.prototype, "xRequestId", void 0);
    return GetPaymentInitiationAuthorisationHeaders;
}(SpeakeasyBase));
export { GetPaymentInitiationAuthorisationHeaders };
var GetPaymentInitiationAuthorisationSecurity = /** @class */ (function (_super) {
    __extends(GetPaymentInitiationAuthorisationSecurity, _super);
    function GetPaymentInitiationAuthorisationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuthOAuth)
    ], GetPaymentInitiationAuthorisationSecurity.prototype, "bearerAuthOAuth", void 0);
    return GetPaymentInitiationAuthorisationSecurity;
}(SpeakeasyBase));
export { GetPaymentInitiationAuthorisationSecurity };
var GetPaymentInitiationAuthorisationRequest = /** @class */ (function (_super) {
    __extends(GetPaymentInitiationAuthorisationRequest, _super);
    function GetPaymentInitiationAuthorisationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPaymentInitiationAuthorisationPathParams)
    ], GetPaymentInitiationAuthorisationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPaymentInitiationAuthorisationHeaders)
    ], GetPaymentInitiationAuthorisationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPaymentInitiationAuthorisationSecurity)
    ], GetPaymentInitiationAuthorisationRequest.prototype, "security", void 0);
    return GetPaymentInitiationAuthorisationRequest;
}(SpeakeasyBase));
export { GetPaymentInitiationAuthorisationRequest };
var GetPaymentInitiationAuthorisationResponse = /** @class */ (function (_super) {
    __extends(GetPaymentInitiationAuthorisationResponse, _super);
    function GetPaymentInitiationAuthorisationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPaymentInitiationAuthorisationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error400NgPis)
    ], GetPaymentInitiationAuthorisationResponse.prototype, "error400NgPis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error400Pis)
    ], GetPaymentInitiationAuthorisationResponse.prototype, "error400Pis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error401NgPis)
    ], GetPaymentInitiationAuthorisationResponse.prototype, "error401NgPis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error401Pis)
    ], GetPaymentInitiationAuthorisationResponse.prototype, "error401Pis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error403NgPis)
    ], GetPaymentInitiationAuthorisationResponse.prototype, "error403NgPis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error403Pis)
    ], GetPaymentInitiationAuthorisationResponse.prototype, "error403Pis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error404NgPis)
    ], GetPaymentInitiationAuthorisationResponse.prototype, "error404NgPis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error404Pis)
    ], GetPaymentInitiationAuthorisationResponse.prototype, "error404Pis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error405NgPis)
    ], GetPaymentInitiationAuthorisationResponse.prototype, "error405NgPis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error405Pis)
    ], GetPaymentInitiationAuthorisationResponse.prototype, "error405Pis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error409NgPis)
    ], GetPaymentInitiationAuthorisationResponse.prototype, "error409NgPis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error409Pis)
    ], GetPaymentInitiationAuthorisationResponse.prototype, "error409Pis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetPaymentInitiationAuthorisationResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPaymentInitiationAuthorisationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Authorisations)
    ], GetPaymentInitiationAuthorisationResponse.prototype, "authorisations", void 0);
    return GetPaymentInitiationAuthorisationResponse;
}(SpeakeasyBase));
export { GetPaymentInitiationAuthorisationResponse };
