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
var DeleteConsentPathParams = /** @class */ (function (_super) {
    __extends(DeleteConsentPathParams, _super);
    function DeleteConsentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=consentId" }),
        __metadata("design:type", String)
    ], DeleteConsentPathParams.prototype, "consentId", void 0);
    return DeleteConsentPathParams;
}(SpeakeasyBase));
export { DeleteConsentPathParams };
var DeleteConsentHeaders = /** @class */ (function (_super) {
    __extends(DeleteConsentHeaders, _super);
    function DeleteConsentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Digest" }),
        __metadata("design:type", String)
    ], DeleteConsentHeaders.prototype, "digest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept" }),
        __metadata("design:type", String)
    ], DeleteConsentHeaders.prototype, "psuAccept", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Charset" }),
        __metadata("design:type", String)
    ], DeleteConsentHeaders.prototype, "psuAcceptCharset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Encoding" }),
        __metadata("design:type", String)
    ], DeleteConsentHeaders.prototype, "psuAcceptEncoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Language" }),
        __metadata("design:type", String)
    ], DeleteConsentHeaders.prototype, "psuAcceptLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Device-ID" }),
        __metadata("design:type", String)
    ], DeleteConsentHeaders.prototype, "psuDeviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Geo-Location" }),
        __metadata("design:type", String)
    ], DeleteConsentHeaders.prototype, "psuGeoLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Http-Method" }),
        __metadata("design:type", String)
    ], DeleteConsentHeaders.prototype, "psuHttpMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-IP-Address" }),
        __metadata("design:type", String)
    ], DeleteConsentHeaders.prototype, "psuIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-IP-Port" }),
        __metadata("design:type", String)
    ], DeleteConsentHeaders.prototype, "psuIpPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-User-Agent" }),
        __metadata("design:type", String)
    ], DeleteConsentHeaders.prototype, "psuUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Signature" }),
        __metadata("design:type", String)
    ], DeleteConsentHeaders.prototype, "signature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Signature-Certificate" }),
        __metadata("design:type", String)
    ], DeleteConsentHeaders.prototype, "tppSignatureCertificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Request-ID" }),
        __metadata("design:type", String)
    ], DeleteConsentHeaders.prototype, "xRequestId", void 0);
    return DeleteConsentHeaders;
}(SpeakeasyBase));
export { DeleteConsentHeaders };
var DeleteConsentSecurity = /** @class */ (function (_super) {
    __extends(DeleteConsentSecurity, _super);
    function DeleteConsentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuthOAuth)
    ], DeleteConsentSecurity.prototype, "bearerAuthOAuth", void 0);
    return DeleteConsentSecurity;
}(SpeakeasyBase));
export { DeleteConsentSecurity };
var DeleteConsentRequest = /** @class */ (function (_super) {
    __extends(DeleteConsentRequest, _super);
    function DeleteConsentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteConsentPathParams)
    ], DeleteConsentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteConsentHeaders)
    ], DeleteConsentRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteConsentSecurity)
    ], DeleteConsentRequest.prototype, "security", void 0);
    return DeleteConsentRequest;
}(SpeakeasyBase));
export { DeleteConsentRequest };
var DeleteConsentResponse = /** @class */ (function (_super) {
    __extends(DeleteConsentResponse, _super);
    function DeleteConsentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteConsentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error400Ais)
    ], DeleteConsentResponse.prototype, "error400Ais", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error400NgAis)
    ], DeleteConsentResponse.prototype, "error400NgAis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error401Ais)
    ], DeleteConsentResponse.prototype, "error401Ais", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error401NgAis)
    ], DeleteConsentResponse.prototype, "error401NgAis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error403Ais)
    ], DeleteConsentResponse.prototype, "error403Ais", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error403NgAis)
    ], DeleteConsentResponse.prototype, "error403NgAis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error404Ais)
    ], DeleteConsentResponse.prototype, "error404Ais", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error404NgAis)
    ], DeleteConsentResponse.prototype, "error404NgAis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error405Ais)
    ], DeleteConsentResponse.prototype, "error405Ais", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error405NgAis)
    ], DeleteConsentResponse.prototype, "error405NgAis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error406Ais)
    ], DeleteConsentResponse.prototype, "error406Ais", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error406NgAis)
    ], DeleteConsentResponse.prototype, "error406NgAis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error409Ais)
    ], DeleteConsentResponse.prototype, "error409Ais", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error409NgAis)
    ], DeleteConsentResponse.prototype, "error409NgAis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error429Ais)
    ], DeleteConsentResponse.prototype, "error429Ais", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error429NgAis)
    ], DeleteConsentResponse.prototype, "error429NgAis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteConsentResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteConsentResponse.prototype, "statusCode", void 0);
    return DeleteConsentResponse;
}(SpeakeasyBase));
export { DeleteConsentResponse };
