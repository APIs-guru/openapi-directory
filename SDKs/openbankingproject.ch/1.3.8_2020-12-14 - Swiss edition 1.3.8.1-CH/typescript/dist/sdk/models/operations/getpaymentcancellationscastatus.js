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
var GetPaymentCancellationScaStatusPathParams = /** @class */ (function (_super) {
    __extends(GetPaymentCancellationScaStatusPathParams, _super);
    function GetPaymentCancellationScaStatusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=authorisationId" }),
        __metadata("design:type", String)
    ], GetPaymentCancellationScaStatusPathParams.prototype, "authorisationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment-product" }),
        __metadata("design:type", String)
    ], GetPaymentCancellationScaStatusPathParams.prototype, "paymentProduct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment-service" }),
        __metadata("design:type", String)
    ], GetPaymentCancellationScaStatusPathParams.prototype, "paymentService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=paymentId" }),
        __metadata("design:type", String)
    ], GetPaymentCancellationScaStatusPathParams.prototype, "paymentId", void 0);
    return GetPaymentCancellationScaStatusPathParams;
}(SpeakeasyBase));
export { GetPaymentCancellationScaStatusPathParams };
var GetPaymentCancellationScaStatusHeaders = /** @class */ (function (_super) {
    __extends(GetPaymentCancellationScaStatusHeaders, _super);
    function GetPaymentCancellationScaStatusHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Digest" }),
        __metadata("design:type", String)
    ], GetPaymentCancellationScaStatusHeaders.prototype, "digest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept" }),
        __metadata("design:type", String)
    ], GetPaymentCancellationScaStatusHeaders.prototype, "psuAccept", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Charset" }),
        __metadata("design:type", String)
    ], GetPaymentCancellationScaStatusHeaders.prototype, "psuAcceptCharset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Encoding" }),
        __metadata("design:type", String)
    ], GetPaymentCancellationScaStatusHeaders.prototype, "psuAcceptEncoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Language" }),
        __metadata("design:type", String)
    ], GetPaymentCancellationScaStatusHeaders.prototype, "psuAcceptLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Device-ID" }),
        __metadata("design:type", String)
    ], GetPaymentCancellationScaStatusHeaders.prototype, "psuDeviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Geo-Location" }),
        __metadata("design:type", String)
    ], GetPaymentCancellationScaStatusHeaders.prototype, "psuGeoLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Http-Method" }),
        __metadata("design:type", String)
    ], GetPaymentCancellationScaStatusHeaders.prototype, "psuHttpMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-IP-Address" }),
        __metadata("design:type", String)
    ], GetPaymentCancellationScaStatusHeaders.prototype, "psuIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-IP-Port" }),
        __metadata("design:type", String)
    ], GetPaymentCancellationScaStatusHeaders.prototype, "psuIpPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-User-Agent" }),
        __metadata("design:type", String)
    ], GetPaymentCancellationScaStatusHeaders.prototype, "psuUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Signature" }),
        __metadata("design:type", String)
    ], GetPaymentCancellationScaStatusHeaders.prototype, "signature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Signature-Certificate" }),
        __metadata("design:type", String)
    ], GetPaymentCancellationScaStatusHeaders.prototype, "tppSignatureCertificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Request-ID" }),
        __metadata("design:type", String)
    ], GetPaymentCancellationScaStatusHeaders.prototype, "xRequestId", void 0);
    return GetPaymentCancellationScaStatusHeaders;
}(SpeakeasyBase));
export { GetPaymentCancellationScaStatusHeaders };
var GetPaymentCancellationScaStatusSecurity = /** @class */ (function (_super) {
    __extends(GetPaymentCancellationScaStatusSecurity, _super);
    function GetPaymentCancellationScaStatusSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuthOAuth)
    ], GetPaymentCancellationScaStatusSecurity.prototype, "bearerAuthOAuth", void 0);
    return GetPaymentCancellationScaStatusSecurity;
}(SpeakeasyBase));
export { GetPaymentCancellationScaStatusSecurity };
var GetPaymentCancellationScaStatusRequest = /** @class */ (function (_super) {
    __extends(GetPaymentCancellationScaStatusRequest, _super);
    function GetPaymentCancellationScaStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPaymentCancellationScaStatusPathParams)
    ], GetPaymentCancellationScaStatusRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPaymentCancellationScaStatusHeaders)
    ], GetPaymentCancellationScaStatusRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPaymentCancellationScaStatusSecurity)
    ], GetPaymentCancellationScaStatusRequest.prototype, "security", void 0);
    return GetPaymentCancellationScaStatusRequest;
}(SpeakeasyBase));
export { GetPaymentCancellationScaStatusRequest };
var GetPaymentCancellationScaStatusResponse = /** @class */ (function (_super) {
    __extends(GetPaymentCancellationScaStatusResponse, _super);
    function GetPaymentCancellationScaStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPaymentCancellationScaStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error400NgPis)
    ], GetPaymentCancellationScaStatusResponse.prototype, "error400NgPis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error400Pis)
    ], GetPaymentCancellationScaStatusResponse.prototype, "error400Pis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error401NgPis)
    ], GetPaymentCancellationScaStatusResponse.prototype, "error401NgPis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error401Pis)
    ], GetPaymentCancellationScaStatusResponse.prototype, "error401Pis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error403NgPis)
    ], GetPaymentCancellationScaStatusResponse.prototype, "error403NgPis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error403Pis)
    ], GetPaymentCancellationScaStatusResponse.prototype, "error403Pis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error404NgPis)
    ], GetPaymentCancellationScaStatusResponse.prototype, "error404NgPis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error404Pis)
    ], GetPaymentCancellationScaStatusResponse.prototype, "error404Pis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error405NgPis)
    ], GetPaymentCancellationScaStatusResponse.prototype, "error405NgPis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error405Pis)
    ], GetPaymentCancellationScaStatusResponse.prototype, "error405Pis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error409NgPis)
    ], GetPaymentCancellationScaStatusResponse.prototype, "error409NgPis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error409Pis)
    ], GetPaymentCancellationScaStatusResponse.prototype, "error409Pis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetPaymentCancellationScaStatusResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPaymentCancellationScaStatusResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ScaStatusResponse)
    ], GetPaymentCancellationScaStatusResponse.prototype, "scaStatusResponse", void 0);
    return GetPaymentCancellationScaStatusResponse;
}(SpeakeasyBase));
export { GetPaymentCancellationScaStatusResponse };
