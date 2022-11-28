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
var GetFilePaymentConsentsConsentIdPathParams = /** @class */ (function (_super) {
    __extends(GetFilePaymentConsentsConsentIdPathParams, _super);
    function GetFilePaymentConsentsConsentIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConsentId" }),
        __metadata("design:type", String)
    ], GetFilePaymentConsentsConsentIdPathParams.prototype, "consentId", void 0);
    return GetFilePaymentConsentsConsentIdPathParams;
}(SpeakeasyBase));
export { GetFilePaymentConsentsConsentIdPathParams };
var GetFilePaymentConsentsConsentIdHeaders = /** @class */ (function (_super) {
    __extends(GetFilePaymentConsentsConsentIdHeaders, _super);
    function GetFilePaymentConsentsConsentIdHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetFilePaymentConsentsConsentIdHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], GetFilePaymentConsentsConsentIdHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], GetFilePaymentConsentsConsentIdHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], GetFilePaymentConsentsConsentIdHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], GetFilePaymentConsentsConsentIdHeaders.prototype, "xFapiInteractionId", void 0);
    return GetFilePaymentConsentsConsentIdHeaders;
}(SpeakeasyBase));
export { GetFilePaymentConsentsConsentIdHeaders };
var GetFilePaymentConsentsConsentIdSecurity = /** @class */ (function (_super) {
    __extends(GetFilePaymentConsentsConsentIdSecurity, _super);
    function GetFilePaymentConsentsConsentIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeTppoAuth2Security)
    ], GetFilePaymentConsentsConsentIdSecurity.prototype, "tppoAuth2Security", void 0);
    return GetFilePaymentConsentsConsentIdSecurity;
}(SpeakeasyBase));
export { GetFilePaymentConsentsConsentIdSecurity };
var GetFilePaymentConsentsConsentIdRequest = /** @class */ (function (_super) {
    __extends(GetFilePaymentConsentsConsentIdRequest, _super);
    function GetFilePaymentConsentsConsentIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFilePaymentConsentsConsentIdPathParams)
    ], GetFilePaymentConsentsConsentIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFilePaymentConsentsConsentIdHeaders)
    ], GetFilePaymentConsentsConsentIdRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFilePaymentConsentsConsentIdSecurity)
    ], GetFilePaymentConsentsConsentIdRequest.prototype, "security", void 0);
    return GetFilePaymentConsentsConsentIdRequest;
}(SpeakeasyBase));
export { GetFilePaymentConsentsConsentIdRequest };
var GetFilePaymentConsentsConsentIdResponse = /** @class */ (function (_super) {
    __extends(GetFilePaymentConsentsConsentIdResponse, _super);
    function GetFilePaymentConsentsConsentIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetFilePaymentConsentsConsentIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFilePaymentConsentsConsentIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetFilePaymentConsentsConsentIdResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], GetFilePaymentConsentsConsentIdResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObWriteFileConsentResponse4)
    ], GetFilePaymentConsentsConsentIdResponse.prototype, "obWriteFileConsentResponse4", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetFilePaymentConsentsConsentIdResponse.prototype, "statusCode", void 0);
    return GetFilePaymentConsentsConsentIdResponse;
}(SpeakeasyBase));
export { GetFilePaymentConsentsConsentIdResponse };
