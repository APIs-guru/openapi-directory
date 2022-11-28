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
var CancelPaymentPathParams = /** @class */ (function (_super) {
    __extends(CancelPaymentPathParams, _super);
    function CancelPaymentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment-product" }),
        __metadata("design:type", String)
    ], CancelPaymentPathParams.prototype, "paymentProduct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment-service" }),
        __metadata("design:type", String)
    ], CancelPaymentPathParams.prototype, "paymentService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=paymentId" }),
        __metadata("design:type", String)
    ], CancelPaymentPathParams.prototype, "paymentId", void 0);
    return CancelPaymentPathParams;
}(SpeakeasyBase));
export { CancelPaymentPathParams };
var CancelPaymentHeaders = /** @class */ (function (_super) {
    __extends(CancelPaymentHeaders, _super);
    function CancelPaymentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Digest" }),
        __metadata("design:type", String)
    ], CancelPaymentHeaders.prototype, "digest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept" }),
        __metadata("design:type", String)
    ], CancelPaymentHeaders.prototype, "psuAccept", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Charset" }),
        __metadata("design:type", String)
    ], CancelPaymentHeaders.prototype, "psuAcceptCharset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Encoding" }),
        __metadata("design:type", String)
    ], CancelPaymentHeaders.prototype, "psuAcceptEncoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Language" }),
        __metadata("design:type", String)
    ], CancelPaymentHeaders.prototype, "psuAcceptLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Device-ID" }),
        __metadata("design:type", String)
    ], CancelPaymentHeaders.prototype, "psuDeviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Geo-Location" }),
        __metadata("design:type", String)
    ], CancelPaymentHeaders.prototype, "psuGeoLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Http-Method" }),
        __metadata("design:type", String)
    ], CancelPaymentHeaders.prototype, "psuHttpMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-IP-Address" }),
        __metadata("design:type", String)
    ], CancelPaymentHeaders.prototype, "psuIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-IP-Port" }),
        __metadata("design:type", String)
    ], CancelPaymentHeaders.prototype, "psuIpPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-User-Agent" }),
        __metadata("design:type", String)
    ], CancelPaymentHeaders.prototype, "psuUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Signature" }),
        __metadata("design:type", String)
    ], CancelPaymentHeaders.prototype, "signature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Explicit-Authorisation-Preferred" }),
        __metadata("design:type", Boolean)
    ], CancelPaymentHeaders.prototype, "tppExplicitAuthorisationPreferred", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Nok-Redirect-URI" }),
        __metadata("design:type", String)
    ], CancelPaymentHeaders.prototype, "tppNokRedirectUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Redirect-Preferred" }),
        __metadata("design:type", Boolean)
    ], CancelPaymentHeaders.prototype, "tppRedirectPreferred", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Redirect-URI" }),
        __metadata("design:type", String)
    ], CancelPaymentHeaders.prototype, "tppRedirectUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Signature-Certificate" }),
        __metadata("design:type", String)
    ], CancelPaymentHeaders.prototype, "tppSignatureCertificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Request-ID" }),
        __metadata("design:type", String)
    ], CancelPaymentHeaders.prototype, "xRequestId", void 0);
    return CancelPaymentHeaders;
}(SpeakeasyBase));
export { CancelPaymentHeaders };
var CancelPaymentSecurity = /** @class */ (function (_super) {
    __extends(CancelPaymentSecurity, _super);
    function CancelPaymentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuthOAuth)
    ], CancelPaymentSecurity.prototype, "bearerAuthOAuth", void 0);
    return CancelPaymentSecurity;
}(SpeakeasyBase));
export { CancelPaymentSecurity };
var CancelPaymentRequest = /** @class */ (function (_super) {
    __extends(CancelPaymentRequest, _super);
    function CancelPaymentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CancelPaymentPathParams)
    ], CancelPaymentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CancelPaymentHeaders)
    ], CancelPaymentRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CancelPaymentSecurity)
    ], CancelPaymentRequest.prototype, "security", void 0);
    return CancelPaymentRequest;
}(SpeakeasyBase));
export { CancelPaymentRequest };
var CancelPaymentResponse = /** @class */ (function (_super) {
    __extends(CancelPaymentResponse, _super);
    function CancelPaymentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CancelPaymentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error400NgPis)
    ], CancelPaymentResponse.prototype, "error400NgPis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error400Pis)
    ], CancelPaymentResponse.prototype, "error400Pis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error401NgPis)
    ], CancelPaymentResponse.prototype, "error401NgPis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error401Pis)
    ], CancelPaymentResponse.prototype, "error401Pis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error403NgPis)
    ], CancelPaymentResponse.prototype, "error403NgPis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error403Pis)
    ], CancelPaymentResponse.prototype, "error403Pis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error404NgPis)
    ], CancelPaymentResponse.prototype, "error404NgPis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error404Pis)
    ], CancelPaymentResponse.prototype, "error404Pis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error405NgPisCanc)
    ], CancelPaymentResponse.prototype, "error405NgPisCanc", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error405PisCanc)
    ], CancelPaymentResponse.prototype, "error405PisCanc", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error409NgPis)
    ], CancelPaymentResponse.prototype, "error409NgPis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error409Pis)
    ], CancelPaymentResponse.prototype, "error409Pis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CancelPaymentResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CancelPaymentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentInitiationCancelResponse202)
    ], CancelPaymentResponse.prototype, "paymentInitiationCancelResponse202", void 0);
    return CancelPaymentResponse;
}(SpeakeasyBase));
export { CancelPaymentResponse };
