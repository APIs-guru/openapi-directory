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
var GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsPathParams = /** @class */ (function (_super) {
    __extends(GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsPathParams, _super);
    function GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomesticScheduledPaymentId" }),
        __metadata("design:type", String)
    ], GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsPathParams.prototype, "domesticScheduledPaymentId", void 0);
    return GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsPathParams;
}(SpeakeasyBase));
export { GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsPathParams };
var GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsHeaders = /** @class */ (function (_super) {
    __extends(GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsHeaders, _super);
    function GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsHeaders.prototype, "xFapiInteractionId", void 0);
    return GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsHeaders;
}(SpeakeasyBase));
export { GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsHeaders };
var GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsSecurity = /** @class */ (function (_super) {
    __extends(GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsSecurity, _super);
    function GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeTppoAuth2Security)
    ], GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsSecurity.prototype, "tppoAuth2Security", void 0);
    return GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsSecurity;
}(SpeakeasyBase));
export { GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsSecurity };
var GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsRequest = /** @class */ (function (_super) {
    __extends(GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsRequest, _super);
    function GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsPathParams)
    ], GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsHeaders)
    ], GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsSecurity)
    ], GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsRequest.prototype, "security", void 0);
    return GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsRequest;
}(SpeakeasyBase));
export { GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsRequest };
var GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsResponse = /** @class */ (function (_super) {
    __extends(GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsResponse, _super);
    function GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObWritePaymentDetailsResponse1)
    ], GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsResponse.prototype, "obWritePaymentDetailsResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsResponse.prototype, "statusCode", void 0);
    return GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsResponse;
}(SpeakeasyBase));
export { GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsResponse };
