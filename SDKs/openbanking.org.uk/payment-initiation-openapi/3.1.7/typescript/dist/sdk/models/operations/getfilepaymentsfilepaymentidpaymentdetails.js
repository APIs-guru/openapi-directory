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
var GetFilePaymentsFilePaymentIdPaymentDetailsPathParams = /** @class */ (function (_super) {
    __extends(GetFilePaymentsFilePaymentIdPaymentDetailsPathParams, _super);
    function GetFilePaymentsFilePaymentIdPaymentDetailsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FilePaymentId" }),
        __metadata("design:type", String)
    ], GetFilePaymentsFilePaymentIdPaymentDetailsPathParams.prototype, "filePaymentId", void 0);
    return GetFilePaymentsFilePaymentIdPaymentDetailsPathParams;
}(SpeakeasyBase));
export { GetFilePaymentsFilePaymentIdPaymentDetailsPathParams };
var GetFilePaymentsFilePaymentIdPaymentDetailsHeaders = /** @class */ (function (_super) {
    __extends(GetFilePaymentsFilePaymentIdPaymentDetailsHeaders, _super);
    function GetFilePaymentsFilePaymentIdPaymentDetailsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetFilePaymentsFilePaymentIdPaymentDetailsHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], GetFilePaymentsFilePaymentIdPaymentDetailsHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], GetFilePaymentsFilePaymentIdPaymentDetailsHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], GetFilePaymentsFilePaymentIdPaymentDetailsHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], GetFilePaymentsFilePaymentIdPaymentDetailsHeaders.prototype, "xFapiInteractionId", void 0);
    return GetFilePaymentsFilePaymentIdPaymentDetailsHeaders;
}(SpeakeasyBase));
export { GetFilePaymentsFilePaymentIdPaymentDetailsHeaders };
var GetFilePaymentsFilePaymentIdPaymentDetailsSecurity = /** @class */ (function (_super) {
    __extends(GetFilePaymentsFilePaymentIdPaymentDetailsSecurity, _super);
    function GetFilePaymentsFilePaymentIdPaymentDetailsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeTppoAuth2Security)
    ], GetFilePaymentsFilePaymentIdPaymentDetailsSecurity.prototype, "tppoAuth2Security", void 0);
    return GetFilePaymentsFilePaymentIdPaymentDetailsSecurity;
}(SpeakeasyBase));
export { GetFilePaymentsFilePaymentIdPaymentDetailsSecurity };
var GetFilePaymentsFilePaymentIdPaymentDetailsRequest = /** @class */ (function (_super) {
    __extends(GetFilePaymentsFilePaymentIdPaymentDetailsRequest, _super);
    function GetFilePaymentsFilePaymentIdPaymentDetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFilePaymentsFilePaymentIdPaymentDetailsPathParams)
    ], GetFilePaymentsFilePaymentIdPaymentDetailsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFilePaymentsFilePaymentIdPaymentDetailsHeaders)
    ], GetFilePaymentsFilePaymentIdPaymentDetailsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFilePaymentsFilePaymentIdPaymentDetailsSecurity)
    ], GetFilePaymentsFilePaymentIdPaymentDetailsRequest.prototype, "security", void 0);
    return GetFilePaymentsFilePaymentIdPaymentDetailsRequest;
}(SpeakeasyBase));
export { GetFilePaymentsFilePaymentIdPaymentDetailsRequest };
var GetFilePaymentsFilePaymentIdPaymentDetailsResponse = /** @class */ (function (_super) {
    __extends(GetFilePaymentsFilePaymentIdPaymentDetailsResponse, _super);
    function GetFilePaymentsFilePaymentIdPaymentDetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetFilePaymentsFilePaymentIdPaymentDetailsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFilePaymentsFilePaymentIdPaymentDetailsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetFilePaymentsFilePaymentIdPaymentDetailsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], GetFilePaymentsFilePaymentIdPaymentDetailsResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObWritePaymentDetailsResponse1)
    ], GetFilePaymentsFilePaymentIdPaymentDetailsResponse.prototype, "obWritePaymentDetailsResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetFilePaymentsFilePaymentIdPaymentDetailsResponse.prototype, "statusCode", void 0);
    return GetFilePaymentsFilePaymentIdPaymentDetailsResponse;
}(SpeakeasyBase));
export { GetFilePaymentsFilePaymentIdPaymentDetailsResponse };
