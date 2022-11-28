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
var GetInternationalPaymentsInternationalPaymentIdPaymentDetailsPathParams = /** @class */ (function (_super) {
    __extends(GetInternationalPaymentsInternationalPaymentIdPaymentDetailsPathParams, _super);
    function GetInternationalPaymentsInternationalPaymentIdPaymentDetailsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=InternationalPaymentId" }),
        __metadata("design:type", String)
    ], GetInternationalPaymentsInternationalPaymentIdPaymentDetailsPathParams.prototype, "internationalPaymentId", void 0);
    return GetInternationalPaymentsInternationalPaymentIdPaymentDetailsPathParams;
}(SpeakeasyBase));
export { GetInternationalPaymentsInternationalPaymentIdPaymentDetailsPathParams };
var GetInternationalPaymentsInternationalPaymentIdPaymentDetailsHeaders = /** @class */ (function (_super) {
    __extends(GetInternationalPaymentsInternationalPaymentIdPaymentDetailsHeaders, _super);
    function GetInternationalPaymentsInternationalPaymentIdPaymentDetailsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetInternationalPaymentsInternationalPaymentIdPaymentDetailsHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], GetInternationalPaymentsInternationalPaymentIdPaymentDetailsHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], GetInternationalPaymentsInternationalPaymentIdPaymentDetailsHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], GetInternationalPaymentsInternationalPaymentIdPaymentDetailsHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], GetInternationalPaymentsInternationalPaymentIdPaymentDetailsHeaders.prototype, "xFapiInteractionId", void 0);
    return GetInternationalPaymentsInternationalPaymentIdPaymentDetailsHeaders;
}(SpeakeasyBase));
export { GetInternationalPaymentsInternationalPaymentIdPaymentDetailsHeaders };
var GetInternationalPaymentsInternationalPaymentIdPaymentDetailsSecurity = /** @class */ (function (_super) {
    __extends(GetInternationalPaymentsInternationalPaymentIdPaymentDetailsSecurity, _super);
    function GetInternationalPaymentsInternationalPaymentIdPaymentDetailsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeTppoAuth2Security)
    ], GetInternationalPaymentsInternationalPaymentIdPaymentDetailsSecurity.prototype, "tppoAuth2Security", void 0);
    return GetInternationalPaymentsInternationalPaymentIdPaymentDetailsSecurity;
}(SpeakeasyBase));
export { GetInternationalPaymentsInternationalPaymentIdPaymentDetailsSecurity };
var GetInternationalPaymentsInternationalPaymentIdPaymentDetailsRequest = /** @class */ (function (_super) {
    __extends(GetInternationalPaymentsInternationalPaymentIdPaymentDetailsRequest, _super);
    function GetInternationalPaymentsInternationalPaymentIdPaymentDetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInternationalPaymentsInternationalPaymentIdPaymentDetailsPathParams)
    ], GetInternationalPaymentsInternationalPaymentIdPaymentDetailsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInternationalPaymentsInternationalPaymentIdPaymentDetailsHeaders)
    ], GetInternationalPaymentsInternationalPaymentIdPaymentDetailsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInternationalPaymentsInternationalPaymentIdPaymentDetailsSecurity)
    ], GetInternationalPaymentsInternationalPaymentIdPaymentDetailsRequest.prototype, "security", void 0);
    return GetInternationalPaymentsInternationalPaymentIdPaymentDetailsRequest;
}(SpeakeasyBase));
export { GetInternationalPaymentsInternationalPaymentIdPaymentDetailsRequest };
var GetInternationalPaymentsInternationalPaymentIdPaymentDetailsResponse = /** @class */ (function (_super) {
    __extends(GetInternationalPaymentsInternationalPaymentIdPaymentDetailsResponse, _super);
    function GetInternationalPaymentsInternationalPaymentIdPaymentDetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetInternationalPaymentsInternationalPaymentIdPaymentDetailsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetInternationalPaymentsInternationalPaymentIdPaymentDetailsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetInternationalPaymentsInternationalPaymentIdPaymentDetailsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], GetInternationalPaymentsInternationalPaymentIdPaymentDetailsResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObWritePaymentDetailsResponse1)
    ], GetInternationalPaymentsInternationalPaymentIdPaymentDetailsResponse.prototype, "obWritePaymentDetailsResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetInternationalPaymentsInternationalPaymentIdPaymentDetailsResponse.prototype, "statusCode", void 0);
    return GetInternationalPaymentsInternationalPaymentIdPaymentDetailsResponse;
}(SpeakeasyBase));
export { GetInternationalPaymentsInternationalPaymentIdPaymentDetailsResponse };
