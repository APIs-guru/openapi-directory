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
var GetAccountsAccountIdPartyPathParams = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdPartyPathParams, _super);
    function GetAccountsAccountIdPartyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountId" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdPartyPathParams.prototype, "accountId", void 0);
    return GetAccountsAccountIdPartyPathParams;
}(SpeakeasyBase));
export { GetAccountsAccountIdPartyPathParams };
var GetAccountsAccountIdPartyHeaders = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdPartyHeaders, _super);
    function GetAccountsAccountIdPartyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdPartyHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdPartyHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdPartyHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdPartyHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdPartyHeaders.prototype, "xFapiInteractionId", void 0);
    return GetAccountsAccountIdPartyHeaders;
}(SpeakeasyBase));
export { GetAccountsAccountIdPartyHeaders };
var GetAccountsAccountIdPartySecurity = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdPartySecurity, _super);
    function GetAccountsAccountIdPartySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemePsuoAuth2Security)
    ], GetAccountsAccountIdPartySecurity.prototype, "psuoAuth2Security", void 0);
    return GetAccountsAccountIdPartySecurity;
}(SpeakeasyBase));
export { GetAccountsAccountIdPartySecurity };
var GetAccountsAccountIdPartyRequest = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdPartyRequest, _super);
    function GetAccountsAccountIdPartyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdPartyPathParams)
    ], GetAccountsAccountIdPartyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdPartyHeaders)
    ], GetAccountsAccountIdPartyRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdPartySecurity)
    ], GetAccountsAccountIdPartyRequest.prototype, "security", void 0);
    return GetAccountsAccountIdPartyRequest;
}(SpeakeasyBase));
export { GetAccountsAccountIdPartyRequest };
var GetAccountsAccountIdPartyResponse = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdPartyResponse, _super);
    function GetAccountsAccountIdPartyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetAccountsAccountIdPartyResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAccountsAccountIdPartyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetAccountsAccountIdPartyResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], GetAccountsAccountIdPartyResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObReadParty2)
    ], GetAccountsAccountIdPartyResponse.prototype, "obReadParty2", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAccountsAccountIdPartyResponse.prototype, "statusCode", void 0);
    return GetAccountsAccountIdPartyResponse;
}(SpeakeasyBase));
export { GetAccountsAccountIdPartyResponse };
