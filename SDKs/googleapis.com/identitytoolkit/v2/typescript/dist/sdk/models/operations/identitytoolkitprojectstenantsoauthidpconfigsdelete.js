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
var IdentitytoolkitProjectsTenantsOauthIdpConfigsDeletePathParams = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsOauthIdpConfigsDeletePathParams, _super);
    function IdentitytoolkitProjectsTenantsOauthIdpConfigsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsDeletePathParams.prototype, "name", void 0);
    return IdentitytoolkitProjectsTenantsOauthIdpConfigsDeletePathParams;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsOauthIdpConfigsDeletePathParams };
var IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteQueryParams, _super);
    function IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteQueryParams;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteQueryParams };
var IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurityOption1, _super);
    function IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurityOption1;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurityOption1 };
var IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurityOption2, _super);
    function IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurityOption2;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurityOption2 };
var IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurity = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurity, _super);
    function IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurityOption1)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurityOption2)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurity.prototype, "option2", void 0);
    return IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurity;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurity };
var IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteRequest = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteRequest, _super);
    function IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", IdentitytoolkitProjectsTenantsOauthIdpConfigsDeletePathParams)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteQueryParams)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurity)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteRequest.prototype, "security", void 0);
    return IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteRequest;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteRequest };
var IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteResponse = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteResponse, _super);
    function IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteResponse.prototype, "googleProtobufEmpty", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteResponse.prototype, "statusCode", void 0);
    return IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteResponse;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteResponse };
