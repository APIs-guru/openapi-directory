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
var DeleteAccountAccessConsentsConsentIdPathParams = /** @class */ (function (_super) {
    __extends(DeleteAccountAccessConsentsConsentIdPathParams, _super);
    function DeleteAccountAccessConsentsConsentIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConsentId" }),
        __metadata("design:type", String)
    ], DeleteAccountAccessConsentsConsentIdPathParams.prototype, "consentId", void 0);
    return DeleteAccountAccessConsentsConsentIdPathParams;
}(SpeakeasyBase));
export { DeleteAccountAccessConsentsConsentIdPathParams };
var DeleteAccountAccessConsentsConsentIdHeaders = /** @class */ (function (_super) {
    __extends(DeleteAccountAccessConsentsConsentIdHeaders, _super);
    function DeleteAccountAccessConsentsConsentIdHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], DeleteAccountAccessConsentsConsentIdHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], DeleteAccountAccessConsentsConsentIdHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], DeleteAccountAccessConsentsConsentIdHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], DeleteAccountAccessConsentsConsentIdHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], DeleteAccountAccessConsentsConsentIdHeaders.prototype, "xFapiInteractionId", void 0);
    return DeleteAccountAccessConsentsConsentIdHeaders;
}(SpeakeasyBase));
export { DeleteAccountAccessConsentsConsentIdHeaders };
var DeleteAccountAccessConsentsConsentIdSecurity = /** @class */ (function (_super) {
    __extends(DeleteAccountAccessConsentsConsentIdSecurity, _super);
    function DeleteAccountAccessConsentsConsentIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeTppoAuth2Security)
    ], DeleteAccountAccessConsentsConsentIdSecurity.prototype, "tppoAuth2Security", void 0);
    return DeleteAccountAccessConsentsConsentIdSecurity;
}(SpeakeasyBase));
export { DeleteAccountAccessConsentsConsentIdSecurity };
var DeleteAccountAccessConsentsConsentIdRequest = /** @class */ (function (_super) {
    __extends(DeleteAccountAccessConsentsConsentIdRequest, _super);
    function DeleteAccountAccessConsentsConsentIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAccountAccessConsentsConsentIdPathParams)
    ], DeleteAccountAccessConsentsConsentIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAccountAccessConsentsConsentIdHeaders)
    ], DeleteAccountAccessConsentsConsentIdRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAccountAccessConsentsConsentIdSecurity)
    ], DeleteAccountAccessConsentsConsentIdRequest.prototype, "security", void 0);
    return DeleteAccountAccessConsentsConsentIdRequest;
}(SpeakeasyBase));
export { DeleteAccountAccessConsentsConsentIdRequest };
var DeleteAccountAccessConsentsConsentIdResponse = /** @class */ (function (_super) {
    __extends(DeleteAccountAccessConsentsConsentIdResponse, _super);
    function DeleteAccountAccessConsentsConsentIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], DeleteAccountAccessConsentsConsentIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteAccountAccessConsentsConsentIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteAccountAccessConsentsConsentIdResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], DeleteAccountAccessConsentsConsentIdResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteAccountAccessConsentsConsentIdResponse.prototype, "statusCode", void 0);
    return DeleteAccountAccessConsentsConsentIdResponse;
}(SpeakeasyBase));
export { DeleteAccountAccessConsentsConsentIdResponse };
