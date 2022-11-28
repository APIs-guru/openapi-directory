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
var GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPathParams = /** @class */ (function (_super) {
    __extends(GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPathParams, _super);
    function GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=InternationalStandingOrderPaymentId" }),
        __metadata("design:type", String)
    ], GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPathParams.prototype, "internationalStandingOrderPaymentId", void 0);
    return GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPathParams;
}(SpeakeasyBase));
export { GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPathParams };
var GetInternationalStandingOrdersInternationalStandingOrderPaymentIdHeaders = /** @class */ (function (_super) {
    __extends(GetInternationalStandingOrdersInternationalStandingOrderPaymentIdHeaders, _super);
    function GetInternationalStandingOrdersInternationalStandingOrderPaymentIdHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetInternationalStandingOrdersInternationalStandingOrderPaymentIdHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], GetInternationalStandingOrdersInternationalStandingOrderPaymentIdHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], GetInternationalStandingOrdersInternationalStandingOrderPaymentIdHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], GetInternationalStandingOrdersInternationalStandingOrderPaymentIdHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], GetInternationalStandingOrdersInternationalStandingOrderPaymentIdHeaders.prototype, "xFapiInteractionId", void 0);
    return GetInternationalStandingOrdersInternationalStandingOrderPaymentIdHeaders;
}(SpeakeasyBase));
export { GetInternationalStandingOrdersInternationalStandingOrderPaymentIdHeaders };
var GetInternationalStandingOrdersInternationalStandingOrderPaymentIdSecurity = /** @class */ (function (_super) {
    __extends(GetInternationalStandingOrdersInternationalStandingOrderPaymentIdSecurity, _super);
    function GetInternationalStandingOrdersInternationalStandingOrderPaymentIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeTppoAuth2Security)
    ], GetInternationalStandingOrdersInternationalStandingOrderPaymentIdSecurity.prototype, "tppoAuth2Security", void 0);
    return GetInternationalStandingOrdersInternationalStandingOrderPaymentIdSecurity;
}(SpeakeasyBase));
export { GetInternationalStandingOrdersInternationalStandingOrderPaymentIdSecurity };
var GetInternationalStandingOrdersInternationalStandingOrderPaymentIdRequest = /** @class */ (function (_super) {
    __extends(GetInternationalStandingOrdersInternationalStandingOrderPaymentIdRequest, _super);
    function GetInternationalStandingOrdersInternationalStandingOrderPaymentIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPathParams)
    ], GetInternationalStandingOrdersInternationalStandingOrderPaymentIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInternationalStandingOrdersInternationalStandingOrderPaymentIdHeaders)
    ], GetInternationalStandingOrdersInternationalStandingOrderPaymentIdRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInternationalStandingOrdersInternationalStandingOrderPaymentIdSecurity)
    ], GetInternationalStandingOrdersInternationalStandingOrderPaymentIdRequest.prototype, "security", void 0);
    return GetInternationalStandingOrdersInternationalStandingOrderPaymentIdRequest;
}(SpeakeasyBase));
export { GetInternationalStandingOrdersInternationalStandingOrderPaymentIdRequest };
var GetInternationalStandingOrdersInternationalStandingOrderPaymentIdResponse = /** @class */ (function (_super) {
    __extends(GetInternationalStandingOrdersInternationalStandingOrderPaymentIdResponse, _super);
    function GetInternationalStandingOrdersInternationalStandingOrderPaymentIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetInternationalStandingOrdersInternationalStandingOrderPaymentIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetInternationalStandingOrdersInternationalStandingOrderPaymentIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetInternationalStandingOrdersInternationalStandingOrderPaymentIdResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], GetInternationalStandingOrdersInternationalStandingOrderPaymentIdResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObWriteInternationalStandingOrderResponse7)
    ], GetInternationalStandingOrdersInternationalStandingOrderPaymentIdResponse.prototype, "obWriteInternationalStandingOrderResponse7", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetInternationalStandingOrdersInternationalStandingOrderPaymentIdResponse.prototype, "statusCode", void 0);
    return GetInternationalStandingOrdersInternationalStandingOrderPaymentIdResponse;
}(SpeakeasyBase));
export { GetInternationalStandingOrdersInternationalStandingOrderPaymentIdResponse };
