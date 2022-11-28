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
var UpdateSigningBasketPsuDataPathParams = /** @class */ (function (_super) {
    __extends(UpdateSigningBasketPsuDataPathParams, _super);
    function UpdateSigningBasketPsuDataPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=authorisationId" }),
        __metadata("design:type", String)
    ], UpdateSigningBasketPsuDataPathParams.prototype, "authorisationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=basketId" }),
        __metadata("design:type", String)
    ], UpdateSigningBasketPsuDataPathParams.prototype, "basketId", void 0);
    return UpdateSigningBasketPsuDataPathParams;
}(SpeakeasyBase));
export { UpdateSigningBasketPsuDataPathParams };
var UpdateSigningBasketPsuDataHeaders = /** @class */ (function (_super) {
    __extends(UpdateSigningBasketPsuDataHeaders, _super);
    function UpdateSigningBasketPsuDataHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Digest" }),
        __metadata("design:type", String)
    ], UpdateSigningBasketPsuDataHeaders.prototype, "digest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept" }),
        __metadata("design:type", String)
    ], UpdateSigningBasketPsuDataHeaders.prototype, "psuAccept", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Charset" }),
        __metadata("design:type", String)
    ], UpdateSigningBasketPsuDataHeaders.prototype, "psuAcceptCharset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Encoding" }),
        __metadata("design:type", String)
    ], UpdateSigningBasketPsuDataHeaders.prototype, "psuAcceptEncoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Language" }),
        __metadata("design:type", String)
    ], UpdateSigningBasketPsuDataHeaders.prototype, "psuAcceptLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Corporate-ID" }),
        __metadata("design:type", String)
    ], UpdateSigningBasketPsuDataHeaders.prototype, "psuCorporateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Corporate-ID-Type" }),
        __metadata("design:type", String)
    ], UpdateSigningBasketPsuDataHeaders.prototype, "psuCorporateIdType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Device-ID" }),
        __metadata("design:type", String)
    ], UpdateSigningBasketPsuDataHeaders.prototype, "psuDeviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Geo-Location" }),
        __metadata("design:type", String)
    ], UpdateSigningBasketPsuDataHeaders.prototype, "psuGeoLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Http-Method" }),
        __metadata("design:type", String)
    ], UpdateSigningBasketPsuDataHeaders.prototype, "psuHttpMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-ID" }),
        __metadata("design:type", String)
    ], UpdateSigningBasketPsuDataHeaders.prototype, "psuId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-ID-Type" }),
        __metadata("design:type", String)
    ], UpdateSigningBasketPsuDataHeaders.prototype, "psuIdType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-IP-Address" }),
        __metadata("design:type", String)
    ], UpdateSigningBasketPsuDataHeaders.prototype, "psuIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-IP-Port" }),
        __metadata("design:type", String)
    ], UpdateSigningBasketPsuDataHeaders.prototype, "psuIpPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-User-Agent" }),
        __metadata("design:type", String)
    ], UpdateSigningBasketPsuDataHeaders.prototype, "psuUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Signature" }),
        __metadata("design:type", String)
    ], UpdateSigningBasketPsuDataHeaders.prototype, "signature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Signature-Certificate" }),
        __metadata("design:type", String)
    ], UpdateSigningBasketPsuDataHeaders.prototype, "tppSignatureCertificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Request-ID" }),
        __metadata("design:type", String)
    ], UpdateSigningBasketPsuDataHeaders.prototype, "xRequestId", void 0);
    return UpdateSigningBasketPsuDataHeaders;
}(SpeakeasyBase));
export { UpdateSigningBasketPsuDataHeaders };
var UpdateSigningBasketPsuDataSecurity = /** @class */ (function (_super) {
    __extends(UpdateSigningBasketPsuDataSecurity, _super);
    function UpdateSigningBasketPsuDataSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuthOAuth)
    ], UpdateSigningBasketPsuDataSecurity.prototype, "bearerAuthOAuth", void 0);
    return UpdateSigningBasketPsuDataSecurity;
}(SpeakeasyBase));
export { UpdateSigningBasketPsuDataSecurity };
var UpdateSigningBasketPsuDataRequest = /** @class */ (function (_super) {
    __extends(UpdateSigningBasketPsuDataRequest, _super);
    function UpdateSigningBasketPsuDataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSigningBasketPsuDataPathParams)
    ], UpdateSigningBasketPsuDataRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSigningBasketPsuDataHeaders)
    ], UpdateSigningBasketPsuDataRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], UpdateSigningBasketPsuDataRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSigningBasketPsuDataSecurity)
    ], UpdateSigningBasketPsuDataRequest.prototype, "security", void 0);
    return UpdateSigningBasketPsuDataRequest;
}(SpeakeasyBase));
export { UpdateSigningBasketPsuDataRequest };
var UpdateSigningBasketPsuDataResponse = /** @class */ (function (_super) {
    __extends(UpdateSigningBasketPsuDataResponse, _super);
    function UpdateSigningBasketPsuDataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateSigningBasketPsuDataResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error400NgSbs)
    ], UpdateSigningBasketPsuDataResponse.prototype, "error400NgSbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error400Sbs)
    ], UpdateSigningBasketPsuDataResponse.prototype, "error400Sbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error401NgSbs)
    ], UpdateSigningBasketPsuDataResponse.prototype, "error401NgSbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error401Sbs)
    ], UpdateSigningBasketPsuDataResponse.prototype, "error401Sbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error403NgSbs)
    ], UpdateSigningBasketPsuDataResponse.prototype, "error403NgSbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error403Sbs)
    ], UpdateSigningBasketPsuDataResponse.prototype, "error403Sbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error404NgSbs)
    ], UpdateSigningBasketPsuDataResponse.prototype, "error404NgSbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error404Sbs)
    ], UpdateSigningBasketPsuDataResponse.prototype, "error404Sbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error405NgSbs)
    ], UpdateSigningBasketPsuDataResponse.prototype, "error405NgSbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error405Sbs)
    ], UpdateSigningBasketPsuDataResponse.prototype, "error405Sbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error409NgSbs)
    ], UpdateSigningBasketPsuDataResponse.prototype, "error409NgSbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error409Sbs)
    ], UpdateSigningBasketPsuDataResponse.prototype, "error409Sbs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateSigningBasketPsuDataResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateSigningBasketPsuDataResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateSigningBasketPsuDataResponse.prototype, "updateSigningBasketPsuData200ApplicationJsonOneOf", void 0);
    return UpdateSigningBasketPsuDataResponse;
}(SpeakeasyBase));
export { UpdateSigningBasketPsuDataResponse };
