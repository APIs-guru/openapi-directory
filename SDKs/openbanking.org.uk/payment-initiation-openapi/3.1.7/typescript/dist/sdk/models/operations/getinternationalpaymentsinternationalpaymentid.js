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
var GetInternationalPaymentsInternationalPaymentIdPathParams = /** @class */ (function (_super) {
    __extends(GetInternationalPaymentsInternationalPaymentIdPathParams, _super);
    function GetInternationalPaymentsInternationalPaymentIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=InternationalPaymentId" }),
        __metadata("design:type", String)
    ], GetInternationalPaymentsInternationalPaymentIdPathParams.prototype, "internationalPaymentId", void 0);
    return GetInternationalPaymentsInternationalPaymentIdPathParams;
}(SpeakeasyBase));
export { GetInternationalPaymentsInternationalPaymentIdPathParams };
var GetInternationalPaymentsInternationalPaymentIdHeaders = /** @class */ (function (_super) {
    __extends(GetInternationalPaymentsInternationalPaymentIdHeaders, _super);
    function GetInternationalPaymentsInternationalPaymentIdHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetInternationalPaymentsInternationalPaymentIdHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], GetInternationalPaymentsInternationalPaymentIdHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], GetInternationalPaymentsInternationalPaymentIdHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], GetInternationalPaymentsInternationalPaymentIdHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], GetInternationalPaymentsInternationalPaymentIdHeaders.prototype, "xFapiInteractionId", void 0);
    return GetInternationalPaymentsInternationalPaymentIdHeaders;
}(SpeakeasyBase));
export { GetInternationalPaymentsInternationalPaymentIdHeaders };
var GetInternationalPaymentsInternationalPaymentIdSecurity = /** @class */ (function (_super) {
    __extends(GetInternationalPaymentsInternationalPaymentIdSecurity, _super);
    function GetInternationalPaymentsInternationalPaymentIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeTppoAuth2Security)
    ], GetInternationalPaymentsInternationalPaymentIdSecurity.prototype, "tppoAuth2Security", void 0);
    return GetInternationalPaymentsInternationalPaymentIdSecurity;
}(SpeakeasyBase));
export { GetInternationalPaymentsInternationalPaymentIdSecurity };
var GetInternationalPaymentsInternationalPaymentIdRequest = /** @class */ (function (_super) {
    __extends(GetInternationalPaymentsInternationalPaymentIdRequest, _super);
    function GetInternationalPaymentsInternationalPaymentIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInternationalPaymentsInternationalPaymentIdPathParams)
    ], GetInternationalPaymentsInternationalPaymentIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInternationalPaymentsInternationalPaymentIdHeaders)
    ], GetInternationalPaymentsInternationalPaymentIdRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInternationalPaymentsInternationalPaymentIdSecurity)
    ], GetInternationalPaymentsInternationalPaymentIdRequest.prototype, "security", void 0);
    return GetInternationalPaymentsInternationalPaymentIdRequest;
}(SpeakeasyBase));
export { GetInternationalPaymentsInternationalPaymentIdRequest };
var GetInternationalPaymentsInternationalPaymentIdResponse = /** @class */ (function (_super) {
    __extends(GetInternationalPaymentsInternationalPaymentIdResponse, _super);
    function GetInternationalPaymentsInternationalPaymentIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetInternationalPaymentsInternationalPaymentIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetInternationalPaymentsInternationalPaymentIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetInternationalPaymentsInternationalPaymentIdResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], GetInternationalPaymentsInternationalPaymentIdResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObWriteInternationalResponse5)
    ], GetInternationalPaymentsInternationalPaymentIdResponse.prototype, "obWriteInternationalResponse5", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetInternationalPaymentsInternationalPaymentIdResponse.prototype, "statusCode", void 0);
    return GetInternationalPaymentsInternationalPaymentIdResponse;
}(SpeakeasyBase));
export { GetInternationalPaymentsInternationalPaymentIdResponse };
