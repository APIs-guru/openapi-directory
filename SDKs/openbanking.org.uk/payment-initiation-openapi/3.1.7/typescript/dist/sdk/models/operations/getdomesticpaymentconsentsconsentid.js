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
var GetDomesticPaymentConsentsConsentIdPathParams = /** @class */ (function (_super) {
    __extends(GetDomesticPaymentConsentsConsentIdPathParams, _super);
    function GetDomesticPaymentConsentsConsentIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConsentId" }),
        __metadata("design:type", String)
    ], GetDomesticPaymentConsentsConsentIdPathParams.prototype, "consentId", void 0);
    return GetDomesticPaymentConsentsConsentIdPathParams;
}(SpeakeasyBase));
export { GetDomesticPaymentConsentsConsentIdPathParams };
var GetDomesticPaymentConsentsConsentIdHeaders = /** @class */ (function (_super) {
    __extends(GetDomesticPaymentConsentsConsentIdHeaders, _super);
    function GetDomesticPaymentConsentsConsentIdHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetDomesticPaymentConsentsConsentIdHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], GetDomesticPaymentConsentsConsentIdHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], GetDomesticPaymentConsentsConsentIdHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], GetDomesticPaymentConsentsConsentIdHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], GetDomesticPaymentConsentsConsentIdHeaders.prototype, "xFapiInteractionId", void 0);
    return GetDomesticPaymentConsentsConsentIdHeaders;
}(SpeakeasyBase));
export { GetDomesticPaymentConsentsConsentIdHeaders };
var GetDomesticPaymentConsentsConsentIdSecurity = /** @class */ (function (_super) {
    __extends(GetDomesticPaymentConsentsConsentIdSecurity, _super);
    function GetDomesticPaymentConsentsConsentIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeTppoAuth2Security)
    ], GetDomesticPaymentConsentsConsentIdSecurity.prototype, "tppoAuth2Security", void 0);
    return GetDomesticPaymentConsentsConsentIdSecurity;
}(SpeakeasyBase));
export { GetDomesticPaymentConsentsConsentIdSecurity };
var GetDomesticPaymentConsentsConsentIdRequest = /** @class */ (function (_super) {
    __extends(GetDomesticPaymentConsentsConsentIdRequest, _super);
    function GetDomesticPaymentConsentsConsentIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomesticPaymentConsentsConsentIdPathParams)
    ], GetDomesticPaymentConsentsConsentIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomesticPaymentConsentsConsentIdHeaders)
    ], GetDomesticPaymentConsentsConsentIdRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomesticPaymentConsentsConsentIdSecurity)
    ], GetDomesticPaymentConsentsConsentIdRequest.prototype, "security", void 0);
    return GetDomesticPaymentConsentsConsentIdRequest;
}(SpeakeasyBase));
export { GetDomesticPaymentConsentsConsentIdRequest };
var GetDomesticPaymentConsentsConsentIdResponse = /** @class */ (function (_super) {
    __extends(GetDomesticPaymentConsentsConsentIdResponse, _super);
    function GetDomesticPaymentConsentsConsentIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDomesticPaymentConsentsConsentIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDomesticPaymentConsentsConsentIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetDomesticPaymentConsentsConsentIdResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], GetDomesticPaymentConsentsConsentIdResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObWriteDomesticConsentResponse5)
    ], GetDomesticPaymentConsentsConsentIdResponse.prototype, "obWriteDomesticConsentResponse5", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDomesticPaymentConsentsConsentIdResponse.prototype, "statusCode", void 0);
    return GetDomesticPaymentConsentsConsentIdResponse;
}(SpeakeasyBase));
export { GetDomesticPaymentConsentsConsentIdResponse };
