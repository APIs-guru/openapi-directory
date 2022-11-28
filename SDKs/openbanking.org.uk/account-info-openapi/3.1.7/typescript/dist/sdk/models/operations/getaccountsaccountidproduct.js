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
var GetAccountsAccountIdProductPathParams = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdProductPathParams, _super);
    function GetAccountsAccountIdProductPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountId" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdProductPathParams.prototype, "accountId", void 0);
    return GetAccountsAccountIdProductPathParams;
}(SpeakeasyBase));
export { GetAccountsAccountIdProductPathParams };
var GetAccountsAccountIdProductHeaders = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdProductHeaders, _super);
    function GetAccountsAccountIdProductHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdProductHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdProductHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdProductHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdProductHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdProductHeaders.prototype, "xFapiInteractionId", void 0);
    return GetAccountsAccountIdProductHeaders;
}(SpeakeasyBase));
export { GetAccountsAccountIdProductHeaders };
var GetAccountsAccountIdProductSecurity = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdProductSecurity, _super);
    function GetAccountsAccountIdProductSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemePsuoAuth2Security)
    ], GetAccountsAccountIdProductSecurity.prototype, "psuoAuth2Security", void 0);
    return GetAccountsAccountIdProductSecurity;
}(SpeakeasyBase));
export { GetAccountsAccountIdProductSecurity };
var GetAccountsAccountIdProductRequest = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdProductRequest, _super);
    function GetAccountsAccountIdProductRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdProductPathParams)
    ], GetAccountsAccountIdProductRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdProductHeaders)
    ], GetAccountsAccountIdProductRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdProductSecurity)
    ], GetAccountsAccountIdProductRequest.prototype, "security", void 0);
    return GetAccountsAccountIdProductRequest;
}(SpeakeasyBase));
export { GetAccountsAccountIdProductRequest };
var GetAccountsAccountIdProductResponse = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdProductResponse, _super);
    function GetAccountsAccountIdProductResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetAccountsAccountIdProductResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAccountsAccountIdProductResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetAccountsAccountIdProductResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], GetAccountsAccountIdProductResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObReadProduct2)
    ], GetAccountsAccountIdProductResponse.prototype, "obReadProduct2", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAccountsAccountIdProductResponse.prototype, "statusCode", void 0);
    return GetAccountsAccountIdProductResponse;
}(SpeakeasyBase));
export { GetAccountsAccountIdProductResponse };
