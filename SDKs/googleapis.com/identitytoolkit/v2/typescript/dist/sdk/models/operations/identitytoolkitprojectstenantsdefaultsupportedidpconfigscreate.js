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
var IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreatePathParams = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreatePathParams, _super);
    function IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreatePathParams.prototype, "parent", void 0);
    return IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreatePathParams;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreatePathParams };
var IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateQueryParams = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateQueryParams, _super);
    function IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=idpId" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateQueryParams.prototype, "idpId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateQueryParams;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateQueryParams };
var IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurityOption1, _super);
    function IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurityOption1;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurityOption1 };
var IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurityOption2, _super);
    function IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurityOption2;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurityOption2 };
var IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurity = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurity, _super);
    function IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurityOption1)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurityOption2)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurity.prototype, "option2", void 0);
    return IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurity;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurity };
var IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateRequest = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateRequest, _super);
    function IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreatePathParams)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateQueryParams)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurity)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateRequest.prototype, "security", void 0);
    return IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateRequest;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateRequest };
var IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateResponse = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateResponse, _super);
    function IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateResponse.prototype, "googleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateResponse.prototype, "statusCode", void 0);
    return IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateResponse;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateResponse };
