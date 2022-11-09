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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var GetFundsConfirmationConsentsConsentIdPathParams = /** @class */ (function (_super) {
    __extends(GetFundsConfirmationConsentsConsentIdPathParams, _super);
    function GetFundsConfirmationConsentsConsentIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ConsentId" }),
        __metadata("design:type", String)
    ], GetFundsConfirmationConsentsConsentIdPathParams.prototype, "consentId", void 0);
    return GetFundsConfirmationConsentsConsentIdPathParams;
}(SpeakeasyBase));
export { GetFundsConfirmationConsentsConsentIdPathParams };
var GetFundsConfirmationConsentsConsentIdHeaders = /** @class */ (function (_super) {
    __extends(GetFundsConfirmationConsentsConsentIdHeaders, _super);
    function GetFundsConfirmationConsentsConsentIdHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetFundsConfirmationConsentsConsentIdHeaders.prototype, "authorization", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], GetFundsConfirmationConsentsConsentIdHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], GetFundsConfirmationConsentsConsentIdHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], GetFundsConfirmationConsentsConsentIdHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], GetFundsConfirmationConsentsConsentIdHeaders.prototype, "xFapiInteractionId", void 0);
    return GetFundsConfirmationConsentsConsentIdHeaders;
}(SpeakeasyBase));
export { GetFundsConfirmationConsentsConsentIdHeaders };
var GetFundsConfirmationConsentsConsentIdSecurity = /** @class */ (function (_super) {
    __extends(GetFundsConfirmationConsentsConsentIdSecurity, _super);
    function GetFundsConfirmationConsentsConsentIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeTppoAuth2Security)
    ], GetFundsConfirmationConsentsConsentIdSecurity.prototype, "tppoAuth2Security", void 0);
    return GetFundsConfirmationConsentsConsentIdSecurity;
}(SpeakeasyBase));
export { GetFundsConfirmationConsentsConsentIdSecurity };
var GetFundsConfirmationConsentsConsentIdRequest = /** @class */ (function (_super) {
    __extends(GetFundsConfirmationConsentsConsentIdRequest, _super);
    function GetFundsConfirmationConsentsConsentIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetFundsConfirmationConsentsConsentIdPathParams)
    ], GetFundsConfirmationConsentsConsentIdRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetFundsConfirmationConsentsConsentIdHeaders)
    ], GetFundsConfirmationConsentsConsentIdRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetFundsConfirmationConsentsConsentIdSecurity)
    ], GetFundsConfirmationConsentsConsentIdRequest.prototype, "security", void 0);
    return GetFundsConfirmationConsentsConsentIdRequest;
}(SpeakeasyBase));
export { GetFundsConfirmationConsentsConsentIdRequest };
var GetFundsConfirmationConsentsConsentIdResponse = /** @class */ (function (_super) {
    __extends(GetFundsConfirmationConsentsConsentIdResponse, _super);
    function GetFundsConfirmationConsentsConsentIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetFundsConfirmationConsentsConsentIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], GetFundsConfirmationConsentsConsentIdResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], GetFundsConfirmationConsentsConsentIdResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ObFundsConfirmationConsentResponse1)
    ], GetFundsConfirmationConsentsConsentIdResponse.prototype, "obFundsConfirmationConsentResponse1", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetFundsConfirmationConsentsConsentIdResponse.prototype, "statusCode", void 0);
    return GetFundsConfirmationConsentsConsentIdResponse;
}(SpeakeasyBase));
export { GetFundsConfirmationConsentsConsentIdResponse };
