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
var GetTransactionListPathParams = /** @class */ (function (_super) {
    __extends(GetTransactionListPathParams, _super);
    function GetTransactionListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account-id" }),
        __metadata("design:type", String)
    ], GetTransactionListPathParams.prototype, "accountId", void 0);
    return GetTransactionListPathParams;
}(SpeakeasyBase));
export { GetTransactionListPathParams };
var GetTransactionListQueryParams = /** @class */ (function (_super) {
    __extends(GetTransactionListQueryParams, _super);
    function GetTransactionListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bookingStatus" }),
        __metadata("design:type", String)
    ], GetTransactionListQueryParams.prototype, "bookingStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dateFrom" }),
        __metadata("design:type", Date)
    ], GetTransactionListQueryParams.prototype, "dateFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dateTo" }),
        __metadata("design:type", Date)
    ], GetTransactionListQueryParams.prototype, "dateTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deltaList" }),
        __metadata("design:type", Boolean)
    ], GetTransactionListQueryParams.prototype, "deltaList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entryReferenceFrom" }),
        __metadata("design:type", String)
    ], GetTransactionListQueryParams.prototype, "entryReferenceFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=withBalance" }),
        __metadata("design:type", Boolean)
    ], GetTransactionListQueryParams.prototype, "withBalance", void 0);
    return GetTransactionListQueryParams;
}(SpeakeasyBase));
export { GetTransactionListQueryParams };
var GetTransactionListHeaders = /** @class */ (function (_super) {
    __extends(GetTransactionListHeaders, _super);
    function GetTransactionListHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Consent-ID" }),
        __metadata("design:type", String)
    ], GetTransactionListHeaders.prototype, "consentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Digest" }),
        __metadata("design:type", String)
    ], GetTransactionListHeaders.prototype, "digest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept" }),
        __metadata("design:type", String)
    ], GetTransactionListHeaders.prototype, "psuAccept", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Charset" }),
        __metadata("design:type", String)
    ], GetTransactionListHeaders.prototype, "psuAcceptCharset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Encoding" }),
        __metadata("design:type", String)
    ], GetTransactionListHeaders.prototype, "psuAcceptEncoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Language" }),
        __metadata("design:type", String)
    ], GetTransactionListHeaders.prototype, "psuAcceptLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Device-ID" }),
        __metadata("design:type", String)
    ], GetTransactionListHeaders.prototype, "psuDeviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Geo-Location" }),
        __metadata("design:type", String)
    ], GetTransactionListHeaders.prototype, "psuGeoLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Http-Method" }),
        __metadata("design:type", String)
    ], GetTransactionListHeaders.prototype, "psuHttpMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-IP-Address" }),
        __metadata("design:type", String)
    ], GetTransactionListHeaders.prototype, "psuIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-IP-Port" }),
        __metadata("design:type", String)
    ], GetTransactionListHeaders.prototype, "psuIpPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-User-Agent" }),
        __metadata("design:type", String)
    ], GetTransactionListHeaders.prototype, "psuUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Signature" }),
        __metadata("design:type", String)
    ], GetTransactionListHeaders.prototype, "signature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Signature-Certificate" }),
        __metadata("design:type", String)
    ], GetTransactionListHeaders.prototype, "tppSignatureCertificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Request-ID" }),
        __metadata("design:type", String)
    ], GetTransactionListHeaders.prototype, "xRequestId", void 0);
    return GetTransactionListHeaders;
}(SpeakeasyBase));
export { GetTransactionListHeaders };
var GetTransactionListSecurity = /** @class */ (function (_super) {
    __extends(GetTransactionListSecurity, _super);
    function GetTransactionListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuthOAuth)
    ], GetTransactionListSecurity.prototype, "bearerAuthOAuth", void 0);
    return GetTransactionListSecurity;
}(SpeakeasyBase));
export { GetTransactionListSecurity };
var GetTransactionListRequest = /** @class */ (function (_super) {
    __extends(GetTransactionListRequest, _super);
    function GetTransactionListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTransactionListPathParams)
    ], GetTransactionListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTransactionListQueryParams)
    ], GetTransactionListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTransactionListHeaders)
    ], GetTransactionListRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTransactionListSecurity)
    ], GetTransactionListRequest.prototype, "security", void 0);
    return GetTransactionListRequest;
}(SpeakeasyBase));
export { GetTransactionListRequest };
var GetTransactionListResponse = /** @class */ (function (_super) {
    __extends(GetTransactionListResponse, _super);
    function GetTransactionListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetTransactionListResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTransactionListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error400Ais)
    ], GetTransactionListResponse.prototype, "error400Ais", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error400NgAis)
    ], GetTransactionListResponse.prototype, "error400NgAis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error401Ais)
    ], GetTransactionListResponse.prototype, "error401Ais", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error401NgAis)
    ], GetTransactionListResponse.prototype, "error401NgAis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error403Ais)
    ], GetTransactionListResponse.prototype, "error403Ais", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error403NgAis)
    ], GetTransactionListResponse.prototype, "error403NgAis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error404Ais)
    ], GetTransactionListResponse.prototype, "error404Ais", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error404NgAis)
    ], GetTransactionListResponse.prototype, "error404NgAis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error405Ais)
    ], GetTransactionListResponse.prototype, "error405Ais", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error405NgAis)
    ], GetTransactionListResponse.prototype, "error405NgAis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error406Ais)
    ], GetTransactionListResponse.prototype, "error406Ais", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error406NgAis)
    ], GetTransactionListResponse.prototype, "error406NgAis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error409Ais)
    ], GetTransactionListResponse.prototype, "error409Ais", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error409NgAis)
    ], GetTransactionListResponse.prototype, "error409NgAis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error429Ais)
    ], GetTransactionListResponse.prototype, "error429Ais", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error429NgAis)
    ], GetTransactionListResponse.prototype, "error429NgAis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetTransactionListResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTransactionListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TransactionsResponse200Json)
    ], GetTransactionListResponse.prototype, "transactionsResponse200Json", void 0);
    return GetTransactionListResponse;
}(SpeakeasyBase));
export { GetTransactionListResponse };
