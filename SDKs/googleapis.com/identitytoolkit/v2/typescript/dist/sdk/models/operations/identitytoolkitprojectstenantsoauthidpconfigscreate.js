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
var IdentitytoolkitProjectsTenantsOauthIdpConfigsCreatePathParams = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsOauthIdpConfigsCreatePathParams, _super);
    function IdentitytoolkitProjectsTenantsOauthIdpConfigsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsCreatePathParams.prototype, "parent", void 0);
    return IdentitytoolkitProjectsTenantsOauthIdpConfigsCreatePathParams;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsOauthIdpConfigsCreatePathParams };
var IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateQueryParams = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateQueryParams, _super);
    function IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauthIdpConfigId" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateQueryParams.prototype, "oauthIdpConfigId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateQueryParams;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateQueryParams };
var IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurityOption1, _super);
    function IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurityOption1;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurityOption1 };
var IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurityOption2, _super);
    function IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurityOption2;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurityOption2 };
var IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurity = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurity, _super);
    function IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurityOption1)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurityOption2)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurity.prototype, "option2", void 0);
    return IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurity;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurity };
var IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateRequest = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateRequest, _super);
    function IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", IdentitytoolkitProjectsTenantsOauthIdpConfigsCreatePathParams)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateQueryParams)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurity)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateRequest.prototype, "security", void 0);
    return IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateRequest;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateRequest };
var IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateResponse = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateResponse, _super);
    function IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateResponse.prototype, "googleCloudIdentitytoolkitAdminV2OAuthIdpConfig", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateResponse.prototype, "statusCode", void 0);
    return IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateResponse;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateResponse };
