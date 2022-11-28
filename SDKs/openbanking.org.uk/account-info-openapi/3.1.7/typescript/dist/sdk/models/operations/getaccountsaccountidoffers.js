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
var GetAccountsAccountIdOffersPathParams = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdOffersPathParams, _super);
    function GetAccountsAccountIdOffersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountId" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdOffersPathParams.prototype, "accountId", void 0);
    return GetAccountsAccountIdOffersPathParams;
}(SpeakeasyBase));
export { GetAccountsAccountIdOffersPathParams };
var GetAccountsAccountIdOffersHeaders = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdOffersHeaders, _super);
    function GetAccountsAccountIdOffersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdOffersHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdOffersHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdOffersHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdOffersHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdOffersHeaders.prototype, "xFapiInteractionId", void 0);
    return GetAccountsAccountIdOffersHeaders;
}(SpeakeasyBase));
export { GetAccountsAccountIdOffersHeaders };
var GetAccountsAccountIdOffersSecurity = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdOffersSecurity, _super);
    function GetAccountsAccountIdOffersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemePsuoAuth2Security)
    ], GetAccountsAccountIdOffersSecurity.prototype, "psuoAuth2Security", void 0);
    return GetAccountsAccountIdOffersSecurity;
}(SpeakeasyBase));
export { GetAccountsAccountIdOffersSecurity };
var GetAccountsAccountIdOffersRequest = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdOffersRequest, _super);
    function GetAccountsAccountIdOffersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdOffersPathParams)
    ], GetAccountsAccountIdOffersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdOffersHeaders)
    ], GetAccountsAccountIdOffersRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdOffersSecurity)
    ], GetAccountsAccountIdOffersRequest.prototype, "security", void 0);
    return GetAccountsAccountIdOffersRequest;
}(SpeakeasyBase));
export { GetAccountsAccountIdOffersRequest };
var GetAccountsAccountIdOffersResponse = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdOffersResponse, _super);
    function GetAccountsAccountIdOffersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetAccountsAccountIdOffersResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAccountsAccountIdOffersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetAccountsAccountIdOffersResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], GetAccountsAccountIdOffersResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObReadOffer1)
    ], GetAccountsAccountIdOffersResponse.prototype, "obReadOffer1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAccountsAccountIdOffersResponse.prototype, "statusCode", void 0);
    return GetAccountsAccountIdOffersResponse;
}(SpeakeasyBase));
export { GetAccountsAccountIdOffersResponse };
