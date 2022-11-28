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
var StartPaymentInitiationCancellationAuthorisationPathParams = /** @class */ (function (_super) {
    __extends(StartPaymentInitiationCancellationAuthorisationPathParams, _super);
    function StartPaymentInitiationCancellationAuthorisationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment-product" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationPathParams.prototype, "paymentProduct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment-service" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationPathParams.prototype, "paymentService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=paymentId" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationPathParams.prototype, "paymentId", void 0);
    return StartPaymentInitiationCancellationAuthorisationPathParams;
}(SpeakeasyBase));
export { StartPaymentInitiationCancellationAuthorisationPathParams };
var StartPaymentInitiationCancellationAuthorisationHeaders = /** @class */ (function (_super) {
    __extends(StartPaymentInitiationCancellationAuthorisationHeaders, _super);
    function StartPaymentInitiationCancellationAuthorisationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Digest" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "digest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "psuAccept", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Charset" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "psuAcceptCharset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Encoding" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "psuAcceptEncoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Language" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "psuAcceptLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Corporate-ID" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "psuCorporateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Corporate-ID-Type" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "psuCorporateIdType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Device-ID" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "psuDeviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Geo-Location" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "psuGeoLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Http-Method" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "psuHttpMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-ID" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "psuId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-ID-Type" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "psuIdType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-IP-Address" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "psuIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-IP-Port" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "psuIpPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-User-Agent" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "psuUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Signature" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "signature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Nok-Redirect-URI" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "tppNokRedirectUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Notification-Content-Preferred" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "tppNotificationContentPreferred", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Notification-URI" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "tppNotificationUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Redirect-Preferred" }),
        __metadata("design:type", Boolean)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "tppRedirectPreferred", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Redirect-URI" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "tppRedirectUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Signature-Certificate" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "tppSignatureCertificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Request-ID" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "xRequestId", void 0);
    return StartPaymentInitiationCancellationAuthorisationHeaders;
}(SpeakeasyBase));
export { StartPaymentInitiationCancellationAuthorisationHeaders };
var StartPaymentInitiationCancellationAuthorisationSecurity = /** @class */ (function (_super) {
    __extends(StartPaymentInitiationCancellationAuthorisationSecurity, _super);
    function StartPaymentInitiationCancellationAuthorisationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuthOAuth)
    ], StartPaymentInitiationCancellationAuthorisationSecurity.prototype, "bearerAuthOAuth", void 0);
    return StartPaymentInitiationCancellationAuthorisationSecurity;
}(SpeakeasyBase));
export { StartPaymentInitiationCancellationAuthorisationSecurity };
var StartPaymentInitiationCancellationAuthorisationRequest = /** @class */ (function (_super) {
    __extends(StartPaymentInitiationCancellationAuthorisationRequest, _super);
    function StartPaymentInitiationCancellationAuthorisationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StartPaymentInitiationCancellationAuthorisationPathParams)
    ], StartPaymentInitiationCancellationAuthorisationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StartPaymentInitiationCancellationAuthorisationHeaders)
    ], StartPaymentInitiationCancellationAuthorisationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], StartPaymentInitiationCancellationAuthorisationRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StartPaymentInitiationCancellationAuthorisationSecurity)
    ], StartPaymentInitiationCancellationAuthorisationRequest.prototype, "security", void 0);
    return StartPaymentInitiationCancellationAuthorisationRequest;
}(SpeakeasyBase));
export { StartPaymentInitiationCancellationAuthorisationRequest };
var StartPaymentInitiationCancellationAuthorisationResponse = /** @class */ (function (_super) {
    __extends(StartPaymentInitiationCancellationAuthorisationResponse, _super);
    function StartPaymentInitiationCancellationAuthorisationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error400NgPis)
    ], StartPaymentInitiationCancellationAuthorisationResponse.prototype, "error400NgPis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error400Pis)
    ], StartPaymentInitiationCancellationAuthorisationResponse.prototype, "error400Pis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error401NgPis)
    ], StartPaymentInitiationCancellationAuthorisationResponse.prototype, "error401NgPis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error401Pis)
    ], StartPaymentInitiationCancellationAuthorisationResponse.prototype, "error401Pis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error403NgPis)
    ], StartPaymentInitiationCancellationAuthorisationResponse.prototype, "error403NgPis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error403Pis)
    ], StartPaymentInitiationCancellationAuthorisationResponse.prototype, "error403Pis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error404NgPis)
    ], StartPaymentInitiationCancellationAuthorisationResponse.prototype, "error404NgPis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error404Pis)
    ], StartPaymentInitiationCancellationAuthorisationResponse.prototype, "error404Pis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error405NgPis)
    ], StartPaymentInitiationCancellationAuthorisationResponse.prototype, "error405NgPis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error405Pis)
    ], StartPaymentInitiationCancellationAuthorisationResponse.prototype, "error405Pis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error409NgPis)
    ], StartPaymentInitiationCancellationAuthorisationResponse.prototype, "error409NgPis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error409Pis)
    ], StartPaymentInitiationCancellationAuthorisationResponse.prototype, "error409Pis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], StartPaymentInitiationCancellationAuthorisationResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StartPaymentInitiationCancellationAuthorisationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StartScaprocessResponse)
    ], StartPaymentInitiationCancellationAuthorisationResponse.prototype, "startScaprocessResponse", void 0);
    return StartPaymentInitiationCancellationAuthorisationResponse;
}(SpeakeasyBase));
export { StartPaymentInitiationCancellationAuthorisationResponse };
