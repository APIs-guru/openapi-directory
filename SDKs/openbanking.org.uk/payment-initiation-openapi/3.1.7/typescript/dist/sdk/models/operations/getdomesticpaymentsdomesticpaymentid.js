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
var GetDomesticPaymentsDomesticPaymentIdPathParams = /** @class */ (function (_super) {
    __extends(GetDomesticPaymentsDomesticPaymentIdPathParams, _super);
    function GetDomesticPaymentsDomesticPaymentIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomesticPaymentId" }),
        __metadata("design:type", String)
    ], GetDomesticPaymentsDomesticPaymentIdPathParams.prototype, "domesticPaymentId", void 0);
    return GetDomesticPaymentsDomesticPaymentIdPathParams;
}(SpeakeasyBase));
export { GetDomesticPaymentsDomesticPaymentIdPathParams };
var GetDomesticPaymentsDomesticPaymentIdHeaders = /** @class */ (function (_super) {
    __extends(GetDomesticPaymentsDomesticPaymentIdHeaders, _super);
    function GetDomesticPaymentsDomesticPaymentIdHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetDomesticPaymentsDomesticPaymentIdHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], GetDomesticPaymentsDomesticPaymentIdHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], GetDomesticPaymentsDomesticPaymentIdHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], GetDomesticPaymentsDomesticPaymentIdHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], GetDomesticPaymentsDomesticPaymentIdHeaders.prototype, "xFapiInteractionId", void 0);
    return GetDomesticPaymentsDomesticPaymentIdHeaders;
}(SpeakeasyBase));
export { GetDomesticPaymentsDomesticPaymentIdHeaders };
var GetDomesticPaymentsDomesticPaymentIdSecurity = /** @class */ (function (_super) {
    __extends(GetDomesticPaymentsDomesticPaymentIdSecurity, _super);
    function GetDomesticPaymentsDomesticPaymentIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeTppoAuth2Security)
    ], GetDomesticPaymentsDomesticPaymentIdSecurity.prototype, "tppoAuth2Security", void 0);
    return GetDomesticPaymentsDomesticPaymentIdSecurity;
}(SpeakeasyBase));
export { GetDomesticPaymentsDomesticPaymentIdSecurity };
var GetDomesticPaymentsDomesticPaymentIdRequest = /** @class */ (function (_super) {
    __extends(GetDomesticPaymentsDomesticPaymentIdRequest, _super);
    function GetDomesticPaymentsDomesticPaymentIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomesticPaymentsDomesticPaymentIdPathParams)
    ], GetDomesticPaymentsDomesticPaymentIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomesticPaymentsDomesticPaymentIdHeaders)
    ], GetDomesticPaymentsDomesticPaymentIdRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomesticPaymentsDomesticPaymentIdSecurity)
    ], GetDomesticPaymentsDomesticPaymentIdRequest.prototype, "security", void 0);
    return GetDomesticPaymentsDomesticPaymentIdRequest;
}(SpeakeasyBase));
export { GetDomesticPaymentsDomesticPaymentIdRequest };
var GetDomesticPaymentsDomesticPaymentIdResponse = /** @class */ (function (_super) {
    __extends(GetDomesticPaymentsDomesticPaymentIdResponse, _super);
    function GetDomesticPaymentsDomesticPaymentIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDomesticPaymentsDomesticPaymentIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDomesticPaymentsDomesticPaymentIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetDomesticPaymentsDomesticPaymentIdResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], GetDomesticPaymentsDomesticPaymentIdResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObWriteDomesticResponse5)
    ], GetDomesticPaymentsDomesticPaymentIdResponse.prototype, "obWriteDomesticResponse5", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDomesticPaymentsDomesticPaymentIdResponse.prototype, "statusCode", void 0);
    return GetDomesticPaymentsDomesticPaymentIdResponse;
}(SpeakeasyBase));
export { GetDomesticPaymentsDomesticPaymentIdResponse };
