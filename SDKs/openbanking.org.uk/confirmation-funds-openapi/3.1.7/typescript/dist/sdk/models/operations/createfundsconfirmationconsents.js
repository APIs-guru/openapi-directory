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
var CreateFundsConfirmationConsentsHeaders = /** @class */ (function (_super) {
    __extends(CreateFundsConfirmationConsentsHeaders, _super);
    function CreateFundsConfirmationConsentsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], CreateFundsConfirmationConsentsHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], CreateFundsConfirmationConsentsHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], CreateFundsConfirmationConsentsHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], CreateFundsConfirmationConsentsHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], CreateFundsConfirmationConsentsHeaders.prototype, "xFapiInteractionId", void 0);
    return CreateFundsConfirmationConsentsHeaders;
}(SpeakeasyBase));
export { CreateFundsConfirmationConsentsHeaders };
var CreateFundsConfirmationConsentsSecurity = /** @class */ (function (_super) {
    __extends(CreateFundsConfirmationConsentsSecurity, _super);
    function CreateFundsConfirmationConsentsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeTppoAuth2Security)
    ], CreateFundsConfirmationConsentsSecurity.prototype, "tppoAuth2Security", void 0);
    return CreateFundsConfirmationConsentsSecurity;
}(SpeakeasyBase));
export { CreateFundsConfirmationConsentsSecurity };
var CreateFundsConfirmationConsentsRequest = /** @class */ (function (_super) {
    __extends(CreateFundsConfirmationConsentsRequest, _super);
    function CreateFundsConfirmationConsentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateFundsConfirmationConsentsHeaders)
    ], CreateFundsConfirmationConsentsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ObFundsConfirmationConsent1)
    ], CreateFundsConfirmationConsentsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateFundsConfirmationConsentsSecurity)
    ], CreateFundsConfirmationConsentsRequest.prototype, "security", void 0);
    return CreateFundsConfirmationConsentsRequest;
}(SpeakeasyBase));
export { CreateFundsConfirmationConsentsRequest };
var CreateFundsConfirmationConsentsResponse = /** @class */ (function (_super) {
    __extends(CreateFundsConfirmationConsentsResponse, _super);
    function CreateFundsConfirmationConsentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateFundsConfirmationConsentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateFundsConfirmationConsentsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], CreateFundsConfirmationConsentsResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObFundsConfirmationConsentResponse1)
    ], CreateFundsConfirmationConsentsResponse.prototype, "obFundsConfirmationConsentResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateFundsConfirmationConsentsResponse.prototype, "statusCode", void 0);
    return CreateFundsConfirmationConsentsResponse;
}(SpeakeasyBase));
export { CreateFundsConfirmationConsentsResponse };
