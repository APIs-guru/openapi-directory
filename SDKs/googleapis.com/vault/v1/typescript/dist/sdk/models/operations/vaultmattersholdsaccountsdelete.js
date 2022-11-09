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
var VaultMattersHoldsAccountsDeletePathParams = /** @class */ (function (_super) {
    __extends(VaultMattersHoldsAccountsDeletePathParams, _super);
    function VaultMattersHoldsAccountsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAccountsDeletePathParams.prototype, "accountId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=holdId" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAccountsDeletePathParams.prototype, "holdId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=matterId" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAccountsDeletePathParams.prototype, "matterId", void 0);
    return VaultMattersHoldsAccountsDeletePathParams;
}(SpeakeasyBase));
export { VaultMattersHoldsAccountsDeletePathParams };
var VaultMattersHoldsAccountsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(VaultMattersHoldsAccountsDeleteQueryParams, _super);
    function VaultMattersHoldsAccountsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAccountsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAccountsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAccountsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAccountsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAccountsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAccountsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAccountsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VaultMattersHoldsAccountsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAccountsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAccountsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAccountsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return VaultMattersHoldsAccountsDeleteQueryParams;
}(SpeakeasyBase));
export { VaultMattersHoldsAccountsDeleteQueryParams };
var VaultMattersHoldsAccountsDeleteSecurity = /** @class */ (function (_super) {
    __extends(VaultMattersHoldsAccountsDeleteSecurity, _super);
    function VaultMattersHoldsAccountsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VaultMattersHoldsAccountsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VaultMattersHoldsAccountsDeleteSecurity.prototype, "oauth2c", void 0);
    return VaultMattersHoldsAccountsDeleteSecurity;
}(SpeakeasyBase));
export { VaultMattersHoldsAccountsDeleteSecurity };
var VaultMattersHoldsAccountsDeleteRequest = /** @class */ (function (_super) {
    __extends(VaultMattersHoldsAccountsDeleteRequest, _super);
    function VaultMattersHoldsAccountsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", VaultMattersHoldsAccountsDeletePathParams)
    ], VaultMattersHoldsAccountsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", VaultMattersHoldsAccountsDeleteQueryParams)
    ], VaultMattersHoldsAccountsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", VaultMattersHoldsAccountsDeleteSecurity)
    ], VaultMattersHoldsAccountsDeleteRequest.prototype, "security", void 0);
    return VaultMattersHoldsAccountsDeleteRequest;
}(SpeakeasyBase));
export { VaultMattersHoldsAccountsDeleteRequest };
var VaultMattersHoldsAccountsDeleteResponse = /** @class */ (function (_super) {
    __extends(VaultMattersHoldsAccountsDeleteResponse, _super);
    function VaultMattersHoldsAccountsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], VaultMattersHoldsAccountsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], VaultMattersHoldsAccountsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], VaultMattersHoldsAccountsDeleteResponse.prototype, "statusCode", void 0);
    return VaultMattersHoldsAccountsDeleteResponse;
}(SpeakeasyBase));
export { VaultMattersHoldsAccountsDeleteResponse };
