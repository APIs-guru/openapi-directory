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
var DeleteFundsConfirmationConsentsConsentIdPathParams = /** @class */ (function (_super) {
    __extends(DeleteFundsConfirmationConsentsConsentIdPathParams, _super);
    function DeleteFundsConfirmationConsentsConsentIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConsentId" }),
        __metadata("design:type", String)
    ], DeleteFundsConfirmationConsentsConsentIdPathParams.prototype, "consentId", void 0);
    return DeleteFundsConfirmationConsentsConsentIdPathParams;
}(SpeakeasyBase));
export { DeleteFundsConfirmationConsentsConsentIdPathParams };
var DeleteFundsConfirmationConsentsConsentIdHeaders = /** @class */ (function (_super) {
    __extends(DeleteFundsConfirmationConsentsConsentIdHeaders, _super);
    function DeleteFundsConfirmationConsentsConsentIdHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], DeleteFundsConfirmationConsentsConsentIdHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], DeleteFundsConfirmationConsentsConsentIdHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], DeleteFundsConfirmationConsentsConsentIdHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], DeleteFundsConfirmationConsentsConsentIdHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], DeleteFundsConfirmationConsentsConsentIdHeaders.prototype, "xFapiInteractionId", void 0);
    return DeleteFundsConfirmationConsentsConsentIdHeaders;
}(SpeakeasyBase));
export { DeleteFundsConfirmationConsentsConsentIdHeaders };
var DeleteFundsConfirmationConsentsConsentIdSecurity = /** @class */ (function (_super) {
    __extends(DeleteFundsConfirmationConsentsConsentIdSecurity, _super);
    function DeleteFundsConfirmationConsentsConsentIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeTppoAuth2Security)
    ], DeleteFundsConfirmationConsentsConsentIdSecurity.prototype, "tppoAuth2Security", void 0);
    return DeleteFundsConfirmationConsentsConsentIdSecurity;
}(SpeakeasyBase));
export { DeleteFundsConfirmationConsentsConsentIdSecurity };
var DeleteFundsConfirmationConsentsConsentIdRequest = /** @class */ (function (_super) {
    __extends(DeleteFundsConfirmationConsentsConsentIdRequest, _super);
    function DeleteFundsConfirmationConsentsConsentIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteFundsConfirmationConsentsConsentIdPathParams)
    ], DeleteFundsConfirmationConsentsConsentIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteFundsConfirmationConsentsConsentIdHeaders)
    ], DeleteFundsConfirmationConsentsConsentIdRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteFundsConfirmationConsentsConsentIdSecurity)
    ], DeleteFundsConfirmationConsentsConsentIdRequest.prototype, "security", void 0);
    return DeleteFundsConfirmationConsentsConsentIdRequest;
}(SpeakeasyBase));
export { DeleteFundsConfirmationConsentsConsentIdRequest };
var DeleteFundsConfirmationConsentsConsentIdResponse = /** @class */ (function (_super) {
    __extends(DeleteFundsConfirmationConsentsConsentIdResponse, _super);
    function DeleteFundsConfirmationConsentsConsentIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteFundsConfirmationConsentsConsentIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteFundsConfirmationConsentsConsentIdResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], DeleteFundsConfirmationConsentsConsentIdResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteFundsConfirmationConsentsConsentIdResponse.prototype, "statusCode", void 0);
    return DeleteFundsConfirmationConsentsConsentIdResponse;
}(SpeakeasyBase));
export { DeleteFundsConfirmationConsentsConsentIdResponse };
