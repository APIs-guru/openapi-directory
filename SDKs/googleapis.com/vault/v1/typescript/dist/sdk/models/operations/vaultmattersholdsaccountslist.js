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
var VaultMattersHoldsAccountsListPathParams = /** @class */ (function (_super) {
    __extends(VaultMattersHoldsAccountsListPathParams, _super);
    function VaultMattersHoldsAccountsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=holdId" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAccountsListPathParams.prototype, "holdId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=matterId" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAccountsListPathParams.prototype, "matterId", void 0);
    return VaultMattersHoldsAccountsListPathParams;
}(SpeakeasyBase));
export { VaultMattersHoldsAccountsListPathParams };
var VaultMattersHoldsAccountsListQueryParams = /** @class */ (function (_super) {
    __extends(VaultMattersHoldsAccountsListQueryParams, _super);
    function VaultMattersHoldsAccountsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAccountsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAccountsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAccountsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAccountsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAccountsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAccountsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAccountsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VaultMattersHoldsAccountsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAccountsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAccountsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAccountsListQueryParams.prototype, "uploadProtocol", void 0);
    return VaultMattersHoldsAccountsListQueryParams;
}(SpeakeasyBase));
export { VaultMattersHoldsAccountsListQueryParams };
var VaultMattersHoldsAccountsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(VaultMattersHoldsAccountsListSecurityOption1, _super);
    function VaultMattersHoldsAccountsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VaultMattersHoldsAccountsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VaultMattersHoldsAccountsListSecurityOption1.prototype, "oauth2c", void 0);
    return VaultMattersHoldsAccountsListSecurityOption1;
}(SpeakeasyBase));
export { VaultMattersHoldsAccountsListSecurityOption1 };
var VaultMattersHoldsAccountsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(VaultMattersHoldsAccountsListSecurityOption2, _super);
    function VaultMattersHoldsAccountsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VaultMattersHoldsAccountsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VaultMattersHoldsAccountsListSecurityOption2.prototype, "oauth2c", void 0);
    return VaultMattersHoldsAccountsListSecurityOption2;
}(SpeakeasyBase));
export { VaultMattersHoldsAccountsListSecurityOption2 };
var VaultMattersHoldsAccountsListSecurity = /** @class */ (function (_super) {
    __extends(VaultMattersHoldsAccountsListSecurity, _super);
    function VaultMattersHoldsAccountsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VaultMattersHoldsAccountsListSecurityOption1)
    ], VaultMattersHoldsAccountsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VaultMattersHoldsAccountsListSecurityOption2)
    ], VaultMattersHoldsAccountsListSecurity.prototype, "option2", void 0);
    return VaultMattersHoldsAccountsListSecurity;
}(SpeakeasyBase));
export { VaultMattersHoldsAccountsListSecurity };
var VaultMattersHoldsAccountsListRequest = /** @class */ (function (_super) {
    __extends(VaultMattersHoldsAccountsListRequest, _super);
    function VaultMattersHoldsAccountsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VaultMattersHoldsAccountsListPathParams)
    ], VaultMattersHoldsAccountsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VaultMattersHoldsAccountsListQueryParams)
    ], VaultMattersHoldsAccountsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VaultMattersHoldsAccountsListSecurity)
    ], VaultMattersHoldsAccountsListRequest.prototype, "security", void 0);
    return VaultMattersHoldsAccountsListRequest;
}(SpeakeasyBase));
export { VaultMattersHoldsAccountsListRequest };
var VaultMattersHoldsAccountsListResponse = /** @class */ (function (_super) {
    __extends(VaultMattersHoldsAccountsListResponse, _super);
    function VaultMattersHoldsAccountsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VaultMattersHoldsAccountsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListHeldAccountsResponse)
    ], VaultMattersHoldsAccountsListResponse.prototype, "listHeldAccountsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VaultMattersHoldsAccountsListResponse.prototype, "statusCode", void 0);
    return VaultMattersHoldsAccountsListResponse;
}(SpeakeasyBase));
export { VaultMattersHoldsAccountsListResponse };
