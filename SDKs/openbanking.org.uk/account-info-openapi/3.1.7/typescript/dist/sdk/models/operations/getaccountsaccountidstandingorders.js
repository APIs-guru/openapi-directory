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
var GetAccountsAccountIdStandingOrdersPathParams = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdStandingOrdersPathParams, _super);
    function GetAccountsAccountIdStandingOrdersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountId" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdStandingOrdersPathParams.prototype, "accountId", void 0);
    return GetAccountsAccountIdStandingOrdersPathParams;
}(SpeakeasyBase));
export { GetAccountsAccountIdStandingOrdersPathParams };
var GetAccountsAccountIdStandingOrdersHeaders = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdStandingOrdersHeaders, _super);
    function GetAccountsAccountIdStandingOrdersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdStandingOrdersHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdStandingOrdersHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdStandingOrdersHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdStandingOrdersHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdStandingOrdersHeaders.prototype, "xFapiInteractionId", void 0);
    return GetAccountsAccountIdStandingOrdersHeaders;
}(SpeakeasyBase));
export { GetAccountsAccountIdStandingOrdersHeaders };
var GetAccountsAccountIdStandingOrdersSecurity = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdStandingOrdersSecurity, _super);
    function GetAccountsAccountIdStandingOrdersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemePsuoAuth2Security)
    ], GetAccountsAccountIdStandingOrdersSecurity.prototype, "psuoAuth2Security", void 0);
    return GetAccountsAccountIdStandingOrdersSecurity;
}(SpeakeasyBase));
export { GetAccountsAccountIdStandingOrdersSecurity };
var GetAccountsAccountIdStandingOrdersRequest = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdStandingOrdersRequest, _super);
    function GetAccountsAccountIdStandingOrdersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdStandingOrdersPathParams)
    ], GetAccountsAccountIdStandingOrdersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdStandingOrdersHeaders)
    ], GetAccountsAccountIdStandingOrdersRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdStandingOrdersSecurity)
    ], GetAccountsAccountIdStandingOrdersRequest.prototype, "security", void 0);
    return GetAccountsAccountIdStandingOrdersRequest;
}(SpeakeasyBase));
export { GetAccountsAccountIdStandingOrdersRequest };
var GetAccountsAccountIdStandingOrdersResponse = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdStandingOrdersResponse, _super);
    function GetAccountsAccountIdStandingOrdersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetAccountsAccountIdStandingOrdersResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAccountsAccountIdStandingOrdersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetAccountsAccountIdStandingOrdersResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], GetAccountsAccountIdStandingOrdersResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObReadStandingOrder6)
    ], GetAccountsAccountIdStandingOrdersResponse.prototype, "obReadStandingOrder6", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAccountsAccountIdStandingOrdersResponse.prototype, "statusCode", void 0);
    return GetAccountsAccountIdStandingOrdersResponse;
}(SpeakeasyBase));
export { GetAccountsAccountIdStandingOrdersResponse };
