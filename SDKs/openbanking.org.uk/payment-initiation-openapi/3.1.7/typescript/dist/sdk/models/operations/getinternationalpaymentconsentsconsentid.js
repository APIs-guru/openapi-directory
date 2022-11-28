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
var GetInternationalPaymentConsentsConsentIdPathParams = /** @class */ (function (_super) {
    __extends(GetInternationalPaymentConsentsConsentIdPathParams, _super);
    function GetInternationalPaymentConsentsConsentIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConsentId" }),
        __metadata("design:type", String)
    ], GetInternationalPaymentConsentsConsentIdPathParams.prototype, "consentId", void 0);
    return GetInternationalPaymentConsentsConsentIdPathParams;
}(SpeakeasyBase));
export { GetInternationalPaymentConsentsConsentIdPathParams };
var GetInternationalPaymentConsentsConsentIdHeaders = /** @class */ (function (_super) {
    __extends(GetInternationalPaymentConsentsConsentIdHeaders, _super);
    function GetInternationalPaymentConsentsConsentIdHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetInternationalPaymentConsentsConsentIdHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], GetInternationalPaymentConsentsConsentIdHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], GetInternationalPaymentConsentsConsentIdHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], GetInternationalPaymentConsentsConsentIdHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], GetInternationalPaymentConsentsConsentIdHeaders.prototype, "xFapiInteractionId", void 0);
    return GetInternationalPaymentConsentsConsentIdHeaders;
}(SpeakeasyBase));
export { GetInternationalPaymentConsentsConsentIdHeaders };
var GetInternationalPaymentConsentsConsentIdSecurity = /** @class */ (function (_super) {
    __extends(GetInternationalPaymentConsentsConsentIdSecurity, _super);
    function GetInternationalPaymentConsentsConsentIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeTppoAuth2Security)
    ], GetInternationalPaymentConsentsConsentIdSecurity.prototype, "tppoAuth2Security", void 0);
    return GetInternationalPaymentConsentsConsentIdSecurity;
}(SpeakeasyBase));
export { GetInternationalPaymentConsentsConsentIdSecurity };
var GetInternationalPaymentConsentsConsentIdRequest = /** @class */ (function (_super) {
    __extends(GetInternationalPaymentConsentsConsentIdRequest, _super);
    function GetInternationalPaymentConsentsConsentIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInternationalPaymentConsentsConsentIdPathParams)
    ], GetInternationalPaymentConsentsConsentIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInternationalPaymentConsentsConsentIdHeaders)
    ], GetInternationalPaymentConsentsConsentIdRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInternationalPaymentConsentsConsentIdSecurity)
    ], GetInternationalPaymentConsentsConsentIdRequest.prototype, "security", void 0);
    return GetInternationalPaymentConsentsConsentIdRequest;
}(SpeakeasyBase));
export { GetInternationalPaymentConsentsConsentIdRequest };
var GetInternationalPaymentConsentsConsentIdResponse = /** @class */ (function (_super) {
    __extends(GetInternationalPaymentConsentsConsentIdResponse, _super);
    function GetInternationalPaymentConsentsConsentIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetInternationalPaymentConsentsConsentIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetInternationalPaymentConsentsConsentIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetInternationalPaymentConsentsConsentIdResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], GetInternationalPaymentConsentsConsentIdResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObWriteInternationalConsentResponse6)
    ], GetInternationalPaymentConsentsConsentIdResponse.prototype, "obWriteInternationalConsentResponse6", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetInternationalPaymentConsentsConsentIdResponse.prototype, "statusCode", void 0);
    return GetInternationalPaymentConsentsConsentIdResponse;
}(SpeakeasyBase));
export { GetInternationalPaymentConsentsConsentIdResponse };
