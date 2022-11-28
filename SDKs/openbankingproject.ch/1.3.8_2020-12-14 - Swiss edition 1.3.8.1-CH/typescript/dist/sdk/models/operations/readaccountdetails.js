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
var ReadAccountDetailsPathParams = /** @class */ (function (_super) {
    __extends(ReadAccountDetailsPathParams, _super);
    function ReadAccountDetailsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account-id" }),
        __metadata("design:type", String)
    ], ReadAccountDetailsPathParams.prototype, "accountId", void 0);
    return ReadAccountDetailsPathParams;
}(SpeakeasyBase));
export { ReadAccountDetailsPathParams };
var ReadAccountDetailsQueryParams = /** @class */ (function (_super) {
    __extends(ReadAccountDetailsQueryParams, _super);
    function ReadAccountDetailsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=withBalance" }),
        __metadata("design:type", Boolean)
    ], ReadAccountDetailsQueryParams.prototype, "withBalance", void 0);
    return ReadAccountDetailsQueryParams;
}(SpeakeasyBase));
export { ReadAccountDetailsQueryParams };
var ReadAccountDetailsHeaders = /** @class */ (function (_super) {
    __extends(ReadAccountDetailsHeaders, _super);
    function ReadAccountDetailsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Consent-ID" }),
        __metadata("design:type", String)
    ], ReadAccountDetailsHeaders.prototype, "consentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Digest" }),
        __metadata("design:type", String)
    ], ReadAccountDetailsHeaders.prototype, "digest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept" }),
        __metadata("design:type", String)
    ], ReadAccountDetailsHeaders.prototype, "psuAccept", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Charset" }),
        __metadata("design:type", String)
    ], ReadAccountDetailsHeaders.prototype, "psuAcceptCharset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Encoding" }),
        __metadata("design:type", String)
    ], ReadAccountDetailsHeaders.prototype, "psuAcceptEncoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Language" }),
        __metadata("design:type", String)
    ], ReadAccountDetailsHeaders.prototype, "psuAcceptLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Device-ID" }),
        __metadata("design:type", String)
    ], ReadAccountDetailsHeaders.prototype, "psuDeviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Geo-Location" }),
        __metadata("design:type", String)
    ], ReadAccountDetailsHeaders.prototype, "psuGeoLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Http-Method" }),
        __metadata("design:type", String)
    ], ReadAccountDetailsHeaders.prototype, "psuHttpMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-IP-Address" }),
        __metadata("design:type", String)
    ], ReadAccountDetailsHeaders.prototype, "psuIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-IP-Port" }),
        __metadata("design:type", String)
    ], ReadAccountDetailsHeaders.prototype, "psuIpPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-User-Agent" }),
        __metadata("design:type", String)
    ], ReadAccountDetailsHeaders.prototype, "psuUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Signature" }),
        __metadata("design:type", String)
    ], ReadAccountDetailsHeaders.prototype, "signature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Signature-Certificate" }),
        __metadata("design:type", String)
    ], ReadAccountDetailsHeaders.prototype, "tppSignatureCertificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Request-ID" }),
        __metadata("design:type", String)
    ], ReadAccountDetailsHeaders.prototype, "xRequestId", void 0);
    return ReadAccountDetailsHeaders;
}(SpeakeasyBase));
export { ReadAccountDetailsHeaders };
var ReadAccountDetailsSecurity = /** @class */ (function (_super) {
    __extends(ReadAccountDetailsSecurity, _super);
    function ReadAccountDetailsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuthOAuth)
    ], ReadAccountDetailsSecurity.prototype, "bearerAuthOAuth", void 0);
    return ReadAccountDetailsSecurity;
}(SpeakeasyBase));
export { ReadAccountDetailsSecurity };
var ReadAccountDetails200ApplicationJson = /** @class */ (function (_super) {
    __extends(ReadAccountDetails200ApplicationJson, _super);
    function ReadAccountDetails200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account" }),
        __metadata("design:type", shared.AccountDetails)
    ], ReadAccountDetails200ApplicationJson.prototype, "account", void 0);
    return ReadAccountDetails200ApplicationJson;
}(SpeakeasyBase));
export { ReadAccountDetails200ApplicationJson };
var ReadAccountDetailsRequest = /** @class */ (function (_super) {
    __extends(ReadAccountDetailsRequest, _super);
    function ReadAccountDetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReadAccountDetailsPathParams)
    ], ReadAccountDetailsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReadAccountDetailsQueryParams)
    ], ReadAccountDetailsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReadAccountDetailsHeaders)
    ], ReadAccountDetailsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReadAccountDetailsSecurity)
    ], ReadAccountDetailsRequest.prototype, "security", void 0);
    return ReadAccountDetailsRequest;
}(SpeakeasyBase));
export { ReadAccountDetailsRequest };
var ReadAccountDetailsResponse = /** @class */ (function (_super) {
    __extends(ReadAccountDetailsResponse, _super);
    function ReadAccountDetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReadAccountDetailsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error400Ais)
    ], ReadAccountDetailsResponse.prototype, "error400Ais", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error400NgAis)
    ], ReadAccountDetailsResponse.prototype, "error400NgAis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error401Ais)
    ], ReadAccountDetailsResponse.prototype, "error401Ais", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error401NgAis)
    ], ReadAccountDetailsResponse.prototype, "error401NgAis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error403Ais)
    ], ReadAccountDetailsResponse.prototype, "error403Ais", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error403NgAis)
    ], ReadAccountDetailsResponse.prototype, "error403NgAis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error404Ais)
    ], ReadAccountDetailsResponse.prototype, "error404Ais", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error404NgAis)
    ], ReadAccountDetailsResponse.prototype, "error404NgAis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error405Ais)
    ], ReadAccountDetailsResponse.prototype, "error405Ais", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error405NgAis)
    ], ReadAccountDetailsResponse.prototype, "error405NgAis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error406Ais)
    ], ReadAccountDetailsResponse.prototype, "error406Ais", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error406NgAis)
    ], ReadAccountDetailsResponse.prototype, "error406NgAis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error409Ais)
    ], ReadAccountDetailsResponse.prototype, "error409Ais", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error409NgAis)
    ], ReadAccountDetailsResponse.prototype, "error409NgAis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error429Ais)
    ], ReadAccountDetailsResponse.prototype, "error429Ais", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error429NgAis)
    ], ReadAccountDetailsResponse.prototype, "error429NgAis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ReadAccountDetailsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReadAccountDetailsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReadAccountDetails200ApplicationJson)
    ], ReadAccountDetailsResponse.prototype, "readAccountDetails200ApplicationJsonObject", void 0);
    return ReadAccountDetailsResponse;
}(SpeakeasyBase));
export { ReadAccountDetailsResponse };
