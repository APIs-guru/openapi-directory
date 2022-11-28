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
var GetDomesticPaymentsDomesticPaymentIdPaymentDetailsPathParams = /** @class */ (function (_super) {
    __extends(GetDomesticPaymentsDomesticPaymentIdPaymentDetailsPathParams, _super);
    function GetDomesticPaymentsDomesticPaymentIdPaymentDetailsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomesticPaymentId" }),
        __metadata("design:type", String)
    ], GetDomesticPaymentsDomesticPaymentIdPaymentDetailsPathParams.prototype, "domesticPaymentId", void 0);
    return GetDomesticPaymentsDomesticPaymentIdPaymentDetailsPathParams;
}(SpeakeasyBase));
export { GetDomesticPaymentsDomesticPaymentIdPaymentDetailsPathParams };
var GetDomesticPaymentsDomesticPaymentIdPaymentDetailsHeaders = /** @class */ (function (_super) {
    __extends(GetDomesticPaymentsDomesticPaymentIdPaymentDetailsHeaders, _super);
    function GetDomesticPaymentsDomesticPaymentIdPaymentDetailsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetDomesticPaymentsDomesticPaymentIdPaymentDetailsHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], GetDomesticPaymentsDomesticPaymentIdPaymentDetailsHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], GetDomesticPaymentsDomesticPaymentIdPaymentDetailsHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], GetDomesticPaymentsDomesticPaymentIdPaymentDetailsHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], GetDomesticPaymentsDomesticPaymentIdPaymentDetailsHeaders.prototype, "xFapiInteractionId", void 0);
    return GetDomesticPaymentsDomesticPaymentIdPaymentDetailsHeaders;
}(SpeakeasyBase));
export { GetDomesticPaymentsDomesticPaymentIdPaymentDetailsHeaders };
var GetDomesticPaymentsDomesticPaymentIdPaymentDetailsSecurity = /** @class */ (function (_super) {
    __extends(GetDomesticPaymentsDomesticPaymentIdPaymentDetailsSecurity, _super);
    function GetDomesticPaymentsDomesticPaymentIdPaymentDetailsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeTppoAuth2Security)
    ], GetDomesticPaymentsDomesticPaymentIdPaymentDetailsSecurity.prototype, "tppoAuth2Security", void 0);
    return GetDomesticPaymentsDomesticPaymentIdPaymentDetailsSecurity;
}(SpeakeasyBase));
export { GetDomesticPaymentsDomesticPaymentIdPaymentDetailsSecurity };
var GetDomesticPaymentsDomesticPaymentIdPaymentDetailsRequest = /** @class */ (function (_super) {
    __extends(GetDomesticPaymentsDomesticPaymentIdPaymentDetailsRequest, _super);
    function GetDomesticPaymentsDomesticPaymentIdPaymentDetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomesticPaymentsDomesticPaymentIdPaymentDetailsPathParams)
    ], GetDomesticPaymentsDomesticPaymentIdPaymentDetailsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomesticPaymentsDomesticPaymentIdPaymentDetailsHeaders)
    ], GetDomesticPaymentsDomesticPaymentIdPaymentDetailsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomesticPaymentsDomesticPaymentIdPaymentDetailsSecurity)
    ], GetDomesticPaymentsDomesticPaymentIdPaymentDetailsRequest.prototype, "security", void 0);
    return GetDomesticPaymentsDomesticPaymentIdPaymentDetailsRequest;
}(SpeakeasyBase));
export { GetDomesticPaymentsDomesticPaymentIdPaymentDetailsRequest };
var GetDomesticPaymentsDomesticPaymentIdPaymentDetailsResponse = /** @class */ (function (_super) {
    __extends(GetDomesticPaymentsDomesticPaymentIdPaymentDetailsResponse, _super);
    function GetDomesticPaymentsDomesticPaymentIdPaymentDetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDomesticPaymentsDomesticPaymentIdPaymentDetailsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDomesticPaymentsDomesticPaymentIdPaymentDetailsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetDomesticPaymentsDomesticPaymentIdPaymentDetailsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], GetDomesticPaymentsDomesticPaymentIdPaymentDetailsResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObWritePaymentDetailsResponse1)
    ], GetDomesticPaymentsDomesticPaymentIdPaymentDetailsResponse.prototype, "obWritePaymentDetailsResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDomesticPaymentsDomesticPaymentIdPaymentDetailsResponse.prototype, "statusCode", void 0);
    return GetDomesticPaymentsDomesticPaymentIdPaymentDetailsResponse;
}(SpeakeasyBase));
export { GetDomesticPaymentsDomesticPaymentIdPaymentDetailsResponse };
