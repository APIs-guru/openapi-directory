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
var GetPaymentInitiationCancellationAuthorisationInformationPathParams = /** @class */ (function (_super) {
    __extends(GetPaymentInitiationCancellationAuthorisationInformationPathParams, _super);
    function GetPaymentInitiationCancellationAuthorisationInformationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment-product" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationCancellationAuthorisationInformationPathParams.prototype, "paymentProduct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment-service" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationCancellationAuthorisationInformationPathParams.prototype, "paymentService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=paymentId" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationCancellationAuthorisationInformationPathParams.prototype, "paymentId", void 0);
    return GetPaymentInitiationCancellationAuthorisationInformationPathParams;
}(SpeakeasyBase));
export { GetPaymentInitiationCancellationAuthorisationInformationPathParams };
var GetPaymentInitiationCancellationAuthorisationInformationHeaders = /** @class */ (function (_super) {
    __extends(GetPaymentInitiationCancellationAuthorisationInformationHeaders, _super);
    function GetPaymentInitiationCancellationAuthorisationInformationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Digest" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationCancellationAuthorisationInformationHeaders.prototype, "digest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationCancellationAuthorisationInformationHeaders.prototype, "psuAccept", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Charset" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationCancellationAuthorisationInformationHeaders.prototype, "psuAcceptCharset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Encoding" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationCancellationAuthorisationInformationHeaders.prototype, "psuAcceptEncoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Language" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationCancellationAuthorisationInformationHeaders.prototype, "psuAcceptLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Device-ID" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationCancellationAuthorisationInformationHeaders.prototype, "psuDeviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Geo-Location" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationCancellationAuthorisationInformationHeaders.prototype, "psuGeoLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Http-Method" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationCancellationAuthorisationInformationHeaders.prototype, "psuHttpMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-IP-Address" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationCancellationAuthorisationInformationHeaders.prototype, "psuIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-IP-Port" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationCancellationAuthorisationInformationHeaders.prototype, "psuIpPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-User-Agent" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationCancellationAuthorisationInformationHeaders.prototype, "psuUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Signature" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationCancellationAuthorisationInformationHeaders.prototype, "signature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Signature-Certificate" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationCancellationAuthorisationInformationHeaders.prototype, "tppSignatureCertificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Request-ID" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationCancellationAuthorisationInformationHeaders.prototype, "xRequestId", void 0);
    return GetPaymentInitiationCancellationAuthorisationInformationHeaders;
}(SpeakeasyBase));
export { GetPaymentInitiationCancellationAuthorisationInformationHeaders };
var GetPaymentInitiationCancellationAuthorisationInformationSecurity = /** @class */ (function (_super) {
    __extends(GetPaymentInitiationCancellationAuthorisationInformationSecurity, _super);
    function GetPaymentInitiationCancellationAuthorisationInformationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuthOAuth)
    ], GetPaymentInitiationCancellationAuthorisationInformationSecurity.prototype, "bearerAuthOAuth", void 0);
    return GetPaymentInitiationCancellationAuthorisationInformationSecurity;
}(SpeakeasyBase));
export { GetPaymentInitiationCancellationAuthorisationInformationSecurity };
var GetPaymentInitiationCancellationAuthorisationInformationRequest = /** @class */ (function (_super) {
    __extends(GetPaymentInitiationCancellationAuthorisationInformationRequest, _super);
    function GetPaymentInitiationCancellationAuthorisationInformationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPaymentInitiationCancellationAuthorisationInformationPathParams)
    ], GetPaymentInitiationCancellationAuthorisationInformationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPaymentInitiationCancellationAuthorisationInformationHeaders)
    ], GetPaymentInitiationCancellationAuthorisationInformationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPaymentInitiationCancellationAuthorisationInformationSecurity)
    ], GetPaymentInitiationCancellationAuthorisationInformationRequest.prototype, "security", void 0);
    return GetPaymentInitiationCancellationAuthorisationInformationRequest;
}(SpeakeasyBase));
export { GetPaymentInitiationCancellationAuthorisationInformationRequest };
var GetPaymentInitiationCancellationAuthorisationInformationResponse = /** @class */ (function (_super) {
    __extends(GetPaymentInitiationCancellationAuthorisationInformationResponse, _super);
    function GetPaymentInitiationCancellationAuthorisationInformationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPaymentInitiationCancellationAuthorisationInformationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error400NgPis)
    ], GetPaymentInitiationCancellationAuthorisationInformationResponse.prototype, "error400NgPis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error400Pis)
    ], GetPaymentInitiationCancellationAuthorisationInformationResponse.prototype, "error400Pis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error401NgPis)
    ], GetPaymentInitiationCancellationAuthorisationInformationResponse.prototype, "error401NgPis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error401Pis)
    ], GetPaymentInitiationCancellationAuthorisationInformationResponse.prototype, "error401Pis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error403NgPis)
    ], GetPaymentInitiationCancellationAuthorisationInformationResponse.prototype, "error403NgPis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error403Pis)
    ], GetPaymentInitiationCancellationAuthorisationInformationResponse.prototype, "error403Pis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error404NgPis)
    ], GetPaymentInitiationCancellationAuthorisationInformationResponse.prototype, "error404NgPis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error404Pis)
    ], GetPaymentInitiationCancellationAuthorisationInformationResponse.prototype, "error404Pis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error405NgPis)
    ], GetPaymentInitiationCancellationAuthorisationInformationResponse.prototype, "error405NgPis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error405Pis)
    ], GetPaymentInitiationCancellationAuthorisationInformationResponse.prototype, "error405Pis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error409NgPis)
    ], GetPaymentInitiationCancellationAuthorisationInformationResponse.prototype, "error409NgPis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error409Pis)
    ], GetPaymentInitiationCancellationAuthorisationInformationResponse.prototype, "error409Pis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetPaymentInitiationCancellationAuthorisationInformationResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPaymentInitiationCancellationAuthorisationInformationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Authorisations)
    ], GetPaymentInitiationCancellationAuthorisationInformationResponse.prototype, "authorisations", void 0);
    return GetPaymentInitiationCancellationAuthorisationInformationResponse;
}(SpeakeasyBase));
export { GetPaymentInitiationCancellationAuthorisationInformationResponse };
