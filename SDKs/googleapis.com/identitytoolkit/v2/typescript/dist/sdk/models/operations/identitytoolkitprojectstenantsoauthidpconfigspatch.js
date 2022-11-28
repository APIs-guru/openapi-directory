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
var IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchPathParams = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchPathParams, _super);
    function IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchPathParams.prototype, "name", void 0);
    return IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchPathParams;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchPathParams };
var IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchQueryParams = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchQueryParams, _super);
    function IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchQueryParams;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchQueryParams };
var IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurityOption1, _super);
    function IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurityOption1.prototype, "oauth2c", void 0);
    return IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurityOption1;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurityOption1 };
var IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurityOption2, _super);
    function IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurityOption2.prototype, "oauth2c", void 0);
    return IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurityOption2;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurityOption2 };
var IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurity = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurity, _super);
    function IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurityOption1)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurityOption2)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurity.prototype, "option2", void 0);
    return IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurity;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurity };
var IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchRequest = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchRequest, _super);
    function IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchPathParams)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchQueryParams)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurity)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchRequest.prototype, "security", void 0);
    return IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchRequest;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchRequest };
var IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchResponse = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchResponse, _super);
    function IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchResponse.prototype, "googleCloudIdentitytoolkitAdminV2OAuthIdpConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchResponse.prototype, "statusCode", void 0);
    return IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchResponse;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchResponse };
