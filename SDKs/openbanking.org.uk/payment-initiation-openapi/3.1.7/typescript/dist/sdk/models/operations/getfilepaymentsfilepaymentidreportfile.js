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
var GetFilePaymentsFilePaymentIdReportFilePathParams = /** @class */ (function (_super) {
    __extends(GetFilePaymentsFilePaymentIdReportFilePathParams, _super);
    function GetFilePaymentsFilePaymentIdReportFilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FilePaymentId" }),
        __metadata("design:type", String)
    ], GetFilePaymentsFilePaymentIdReportFilePathParams.prototype, "filePaymentId", void 0);
    return GetFilePaymentsFilePaymentIdReportFilePathParams;
}(SpeakeasyBase));
export { GetFilePaymentsFilePaymentIdReportFilePathParams };
var GetFilePaymentsFilePaymentIdReportFileHeaders = /** @class */ (function (_super) {
    __extends(GetFilePaymentsFilePaymentIdReportFileHeaders, _super);
    function GetFilePaymentsFilePaymentIdReportFileHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetFilePaymentsFilePaymentIdReportFileHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], GetFilePaymentsFilePaymentIdReportFileHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], GetFilePaymentsFilePaymentIdReportFileHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], GetFilePaymentsFilePaymentIdReportFileHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], GetFilePaymentsFilePaymentIdReportFileHeaders.prototype, "xFapiInteractionId", void 0);
    return GetFilePaymentsFilePaymentIdReportFileHeaders;
}(SpeakeasyBase));
export { GetFilePaymentsFilePaymentIdReportFileHeaders };
var GetFilePaymentsFilePaymentIdReportFileSecurity = /** @class */ (function (_super) {
    __extends(GetFilePaymentsFilePaymentIdReportFileSecurity, _super);
    function GetFilePaymentsFilePaymentIdReportFileSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeTppoAuth2Security)
    ], GetFilePaymentsFilePaymentIdReportFileSecurity.prototype, "tppoAuth2Security", void 0);
    return GetFilePaymentsFilePaymentIdReportFileSecurity;
}(SpeakeasyBase));
export { GetFilePaymentsFilePaymentIdReportFileSecurity };
var GetFilePaymentsFilePaymentIdReportFileRequest = /** @class */ (function (_super) {
    __extends(GetFilePaymentsFilePaymentIdReportFileRequest, _super);
    function GetFilePaymentsFilePaymentIdReportFileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFilePaymentsFilePaymentIdReportFilePathParams)
    ], GetFilePaymentsFilePaymentIdReportFileRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFilePaymentsFilePaymentIdReportFileHeaders)
    ], GetFilePaymentsFilePaymentIdReportFileRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFilePaymentsFilePaymentIdReportFileSecurity)
    ], GetFilePaymentsFilePaymentIdReportFileRequest.prototype, "security", void 0);
    return GetFilePaymentsFilePaymentIdReportFileRequest;
}(SpeakeasyBase));
export { GetFilePaymentsFilePaymentIdReportFileRequest };
var GetFilePaymentsFilePaymentIdReportFileResponse = /** @class */ (function (_super) {
    __extends(GetFilePaymentsFilePaymentIdReportFileResponse, _super);
    function GetFilePaymentsFilePaymentIdReportFileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetFilePaymentsFilePaymentIdReportFileResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFilePaymentsFilePaymentIdReportFileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetFilePaymentsFilePaymentIdReportFileResponse.prototype, "file", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetFilePaymentsFilePaymentIdReportFileResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], GetFilePaymentsFilePaymentIdReportFileResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetFilePaymentsFilePaymentIdReportFileResponse.prototype, "statusCode", void 0);
    return GetFilePaymentsFilePaymentIdReportFileResponse;
}(SpeakeasyBase));
export { GetFilePaymentsFilePaymentIdReportFileResponse };
