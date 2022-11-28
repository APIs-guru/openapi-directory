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
var GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPathParams = /** @class */ (function (_super) {
    __extends(GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPathParams, _super);
    function GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomesticScheduledPaymentId" }),
        __metadata("design:type", String)
    ], GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPathParams.prototype, "domesticScheduledPaymentId", void 0);
    return GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPathParams;
}(SpeakeasyBase));
export { GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPathParams };
var GetDomesticScheduledPaymentsDomesticScheduledPaymentIdHeaders = /** @class */ (function (_super) {
    __extends(GetDomesticScheduledPaymentsDomesticScheduledPaymentIdHeaders, _super);
    function GetDomesticScheduledPaymentsDomesticScheduledPaymentIdHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetDomesticScheduledPaymentsDomesticScheduledPaymentIdHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], GetDomesticScheduledPaymentsDomesticScheduledPaymentIdHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], GetDomesticScheduledPaymentsDomesticScheduledPaymentIdHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], GetDomesticScheduledPaymentsDomesticScheduledPaymentIdHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], GetDomesticScheduledPaymentsDomesticScheduledPaymentIdHeaders.prototype, "xFapiInteractionId", void 0);
    return GetDomesticScheduledPaymentsDomesticScheduledPaymentIdHeaders;
}(SpeakeasyBase));
export { GetDomesticScheduledPaymentsDomesticScheduledPaymentIdHeaders };
var GetDomesticScheduledPaymentsDomesticScheduledPaymentIdSecurity = /** @class */ (function (_super) {
    __extends(GetDomesticScheduledPaymentsDomesticScheduledPaymentIdSecurity, _super);
    function GetDomesticScheduledPaymentsDomesticScheduledPaymentIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeTppoAuth2Security)
    ], GetDomesticScheduledPaymentsDomesticScheduledPaymentIdSecurity.prototype, "tppoAuth2Security", void 0);
    return GetDomesticScheduledPaymentsDomesticScheduledPaymentIdSecurity;
}(SpeakeasyBase));
export { GetDomesticScheduledPaymentsDomesticScheduledPaymentIdSecurity };
var GetDomesticScheduledPaymentsDomesticScheduledPaymentIdRequest = /** @class */ (function (_super) {
    __extends(GetDomesticScheduledPaymentsDomesticScheduledPaymentIdRequest, _super);
    function GetDomesticScheduledPaymentsDomesticScheduledPaymentIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPathParams)
    ], GetDomesticScheduledPaymentsDomesticScheduledPaymentIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomesticScheduledPaymentsDomesticScheduledPaymentIdHeaders)
    ], GetDomesticScheduledPaymentsDomesticScheduledPaymentIdRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomesticScheduledPaymentsDomesticScheduledPaymentIdSecurity)
    ], GetDomesticScheduledPaymentsDomesticScheduledPaymentIdRequest.prototype, "security", void 0);
    return GetDomesticScheduledPaymentsDomesticScheduledPaymentIdRequest;
}(SpeakeasyBase));
export { GetDomesticScheduledPaymentsDomesticScheduledPaymentIdRequest };
var GetDomesticScheduledPaymentsDomesticScheduledPaymentIdResponse = /** @class */ (function (_super) {
    __extends(GetDomesticScheduledPaymentsDomesticScheduledPaymentIdResponse, _super);
    function GetDomesticScheduledPaymentsDomesticScheduledPaymentIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDomesticScheduledPaymentsDomesticScheduledPaymentIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDomesticScheduledPaymentsDomesticScheduledPaymentIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetDomesticScheduledPaymentsDomesticScheduledPaymentIdResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], GetDomesticScheduledPaymentsDomesticScheduledPaymentIdResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObWriteDomesticScheduledResponse5)
    ], GetDomesticScheduledPaymentsDomesticScheduledPaymentIdResponse.prototype, "obWriteDomesticScheduledResponse5", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDomesticScheduledPaymentsDomesticScheduledPaymentIdResponse.prototype, "statusCode", void 0);
    return GetDomesticScheduledPaymentsDomesticScheduledPaymentIdResponse;
}(SpeakeasyBase));
export { GetDomesticScheduledPaymentsDomesticScheduledPaymentIdResponse };
