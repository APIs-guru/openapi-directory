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
var GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsPathParams = /** @class */ (function (_super) {
    __extends(GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsPathParams, _super);
    function GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=InternationalScheduledPaymentId" }),
        __metadata("design:type", String)
    ], GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsPathParams.prototype, "internationalScheduledPaymentId", void 0);
    return GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsPathParams;
}(SpeakeasyBase));
export { GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsPathParams };
var GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsHeaders = /** @class */ (function (_super) {
    __extends(GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsHeaders, _super);
    function GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsHeaders.prototype, "xFapiInteractionId", void 0);
    return GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsHeaders;
}(SpeakeasyBase));
export { GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsHeaders };
var GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsSecurity = /** @class */ (function (_super) {
    __extends(GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsSecurity, _super);
    function GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeTppoAuth2Security)
    ], GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsSecurity.prototype, "tppoAuth2Security", void 0);
    return GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsSecurity;
}(SpeakeasyBase));
export { GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsSecurity };
var GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsRequest = /** @class */ (function (_super) {
    __extends(GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsRequest, _super);
    function GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsPathParams)
    ], GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsHeaders)
    ], GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsSecurity)
    ], GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsRequest.prototype, "security", void 0);
    return GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsRequest;
}(SpeakeasyBase));
export { GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsRequest };
var GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsResponse = /** @class */ (function (_super) {
    __extends(GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsResponse, _super);
    function GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObWritePaymentDetailsResponse1)
    ], GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsResponse.prototype, "obWritePaymentDetailsResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsResponse.prototype, "statusCode", void 0);
    return GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsResponse;
}(SpeakeasyBase));
export { GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsResponse };
