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
var IdentitytoolkitProjectsTenantsOauthIdpConfigsListPathParams = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsOauthIdpConfigsListPathParams, _super);
    function IdentitytoolkitProjectsTenantsOauthIdpConfigsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsListPathParams.prototype, "parent", void 0);
    return IdentitytoolkitProjectsTenantsOauthIdpConfigsListPathParams;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsOauthIdpConfigsListPathParams };
var IdentitytoolkitProjectsTenantsOauthIdpConfigsListQueryParams = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsOauthIdpConfigsListQueryParams, _super);
    function IdentitytoolkitProjectsTenantsOauthIdpConfigsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsListQueryParams.prototype, "uploadProtocol", void 0);
    return IdentitytoolkitProjectsTenantsOauthIdpConfigsListQueryParams;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsOauthIdpConfigsListQueryParams };
var IdentitytoolkitProjectsTenantsOauthIdpConfigsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsOauthIdpConfigsListSecurityOption1, _super);
    function IdentitytoolkitProjectsTenantsOauthIdpConfigsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsListSecurityOption1.prototype, "oauth2c", void 0);
    return IdentitytoolkitProjectsTenantsOauthIdpConfigsListSecurityOption1;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsOauthIdpConfigsListSecurityOption1 };
var IdentitytoolkitProjectsTenantsOauthIdpConfigsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsOauthIdpConfigsListSecurityOption2, _super);
    function IdentitytoolkitProjectsTenantsOauthIdpConfigsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsListSecurityOption2.prototype, "oauth2c", void 0);
    return IdentitytoolkitProjectsTenantsOauthIdpConfigsListSecurityOption2;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsOauthIdpConfigsListSecurityOption2 };
var IdentitytoolkitProjectsTenantsOauthIdpConfigsListSecurity = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsOauthIdpConfigsListSecurity, _super);
    function IdentitytoolkitProjectsTenantsOauthIdpConfigsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", IdentitytoolkitProjectsTenantsOauthIdpConfigsListSecurityOption1)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", IdentitytoolkitProjectsTenantsOauthIdpConfigsListSecurityOption2)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsListSecurity.prototype, "option2", void 0);
    return IdentitytoolkitProjectsTenantsOauthIdpConfigsListSecurity;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsOauthIdpConfigsListSecurity };
var IdentitytoolkitProjectsTenantsOauthIdpConfigsListRequest = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsOauthIdpConfigsListRequest, _super);
    function IdentitytoolkitProjectsTenantsOauthIdpConfigsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitProjectsTenantsOauthIdpConfigsListPathParams)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitProjectsTenantsOauthIdpConfigsListQueryParams)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitProjectsTenantsOauthIdpConfigsListSecurity)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsListRequest.prototype, "security", void 0);
    return IdentitytoolkitProjectsTenantsOauthIdpConfigsListRequest;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsOauthIdpConfigsListRequest };
var IdentitytoolkitProjectsTenantsOauthIdpConfigsListResponse = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsOauthIdpConfigsListResponse, _super);
    function IdentitytoolkitProjectsTenantsOauthIdpConfigsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsListResponse.prototype, "googleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsListResponse.prototype, "statusCode", void 0);
    return IdentitytoolkitProjectsTenantsOauthIdpConfigsListResponse;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsOauthIdpConfigsListResponse };
