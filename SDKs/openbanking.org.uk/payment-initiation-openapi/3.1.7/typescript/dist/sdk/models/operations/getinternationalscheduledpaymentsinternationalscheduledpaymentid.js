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
var GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPathParams = /** @class */ (function (_super) {
    __extends(GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPathParams, _super);
    function GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=InternationalScheduledPaymentId" }),
        __metadata("design:type", String)
    ], GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPathParams.prototype, "internationalScheduledPaymentId", void 0);
    return GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPathParams;
}(SpeakeasyBase));
export { GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPathParams };
var GetInternationalScheduledPaymentsInternationalScheduledPaymentIdHeaders = /** @class */ (function (_super) {
    __extends(GetInternationalScheduledPaymentsInternationalScheduledPaymentIdHeaders, _super);
    function GetInternationalScheduledPaymentsInternationalScheduledPaymentIdHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetInternationalScheduledPaymentsInternationalScheduledPaymentIdHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], GetInternationalScheduledPaymentsInternationalScheduledPaymentIdHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], GetInternationalScheduledPaymentsInternationalScheduledPaymentIdHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], GetInternationalScheduledPaymentsInternationalScheduledPaymentIdHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], GetInternationalScheduledPaymentsInternationalScheduledPaymentIdHeaders.prototype, "xFapiInteractionId", void 0);
    return GetInternationalScheduledPaymentsInternationalScheduledPaymentIdHeaders;
}(SpeakeasyBase));
export { GetInternationalScheduledPaymentsInternationalScheduledPaymentIdHeaders };
var GetInternationalScheduledPaymentsInternationalScheduledPaymentIdSecurity = /** @class */ (function (_super) {
    __extends(GetInternationalScheduledPaymentsInternationalScheduledPaymentIdSecurity, _super);
    function GetInternationalScheduledPaymentsInternationalScheduledPaymentIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeTppoAuth2Security)
    ], GetInternationalScheduledPaymentsInternationalScheduledPaymentIdSecurity.prototype, "tppoAuth2Security", void 0);
    return GetInternationalScheduledPaymentsInternationalScheduledPaymentIdSecurity;
}(SpeakeasyBase));
export { GetInternationalScheduledPaymentsInternationalScheduledPaymentIdSecurity };
var GetInternationalScheduledPaymentsInternationalScheduledPaymentIdRequest = /** @class */ (function (_super) {
    __extends(GetInternationalScheduledPaymentsInternationalScheduledPaymentIdRequest, _super);
    function GetInternationalScheduledPaymentsInternationalScheduledPaymentIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPathParams)
    ], GetInternationalScheduledPaymentsInternationalScheduledPaymentIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInternationalScheduledPaymentsInternationalScheduledPaymentIdHeaders)
    ], GetInternationalScheduledPaymentsInternationalScheduledPaymentIdRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInternationalScheduledPaymentsInternationalScheduledPaymentIdSecurity)
    ], GetInternationalScheduledPaymentsInternationalScheduledPaymentIdRequest.prototype, "security", void 0);
    return GetInternationalScheduledPaymentsInternationalScheduledPaymentIdRequest;
}(SpeakeasyBase));
export { GetInternationalScheduledPaymentsInternationalScheduledPaymentIdRequest };
var GetInternationalScheduledPaymentsInternationalScheduledPaymentIdResponse = /** @class */ (function (_super) {
    __extends(GetInternationalScheduledPaymentsInternationalScheduledPaymentIdResponse, _super);
    function GetInternationalScheduledPaymentsInternationalScheduledPaymentIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetInternationalScheduledPaymentsInternationalScheduledPaymentIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetInternationalScheduledPaymentsInternationalScheduledPaymentIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetInternationalScheduledPaymentsInternationalScheduledPaymentIdResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], GetInternationalScheduledPaymentsInternationalScheduledPaymentIdResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObWriteInternationalScheduledResponse6)
    ], GetInternationalScheduledPaymentsInternationalScheduledPaymentIdResponse.prototype, "obWriteInternationalScheduledResponse6", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetInternationalScheduledPaymentsInternationalScheduledPaymentIdResponse.prototype, "statusCode", void 0);
    return GetInternationalScheduledPaymentsInternationalScheduledPaymentIdResponse;
}(SpeakeasyBase));
export { GetInternationalScheduledPaymentsInternationalScheduledPaymentIdResponse };
