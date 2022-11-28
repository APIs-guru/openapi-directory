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
var GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsPathParams = /** @class */ (function (_super) {
    __extends(GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsPathParams, _super);
    function GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomesticStandingOrderId" }),
        __metadata("design:type", String)
    ], GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsPathParams.prototype, "domesticStandingOrderId", void 0);
    return GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsPathParams;
}(SpeakeasyBase));
export { GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsPathParams };
var GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsHeaders = /** @class */ (function (_super) {
    __extends(GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsHeaders, _super);
    function GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsHeaders.prototype, "xFapiInteractionId", void 0);
    return GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsHeaders;
}(SpeakeasyBase));
export { GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsHeaders };
var GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsSecurity = /** @class */ (function (_super) {
    __extends(GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsSecurity, _super);
    function GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeTppoAuth2Security)
    ], GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsSecurity.prototype, "tppoAuth2Security", void 0);
    return GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsSecurity;
}(SpeakeasyBase));
export { GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsSecurity };
var GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsRequest = /** @class */ (function (_super) {
    __extends(GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsRequest, _super);
    function GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsPathParams)
    ], GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsHeaders)
    ], GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsSecurity)
    ], GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsRequest.prototype, "security", void 0);
    return GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsRequest;
}(SpeakeasyBase));
export { GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsRequest };
var GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsResponse = /** @class */ (function (_super) {
    __extends(GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsResponse, _super);
    function GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObWritePaymentDetailsResponse1)
    ], GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsResponse.prototype, "obWritePaymentDetailsResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsResponse.prototype, "statusCode", void 0);
    return GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsResponse;
}(SpeakeasyBase));
export { GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsResponse };
