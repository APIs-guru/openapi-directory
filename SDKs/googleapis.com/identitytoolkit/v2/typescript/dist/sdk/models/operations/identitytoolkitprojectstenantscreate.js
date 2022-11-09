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
var IdentitytoolkitProjectsTenantsCreatePathParams = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsCreatePathParams, _super);
    function IdentitytoolkitProjectsTenantsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsCreatePathParams.prototype, "parent", void 0);
    return IdentitytoolkitProjectsTenantsCreatePathParams;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsCreatePathParams };
var IdentitytoolkitProjectsTenantsCreateQueryParams = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsCreateQueryParams, _super);
    function IdentitytoolkitProjectsTenantsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IdentitytoolkitProjectsTenantsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return IdentitytoolkitProjectsTenantsCreateQueryParams;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsCreateQueryParams };
var IdentitytoolkitProjectsTenantsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsCreateSecurityOption1, _super);
    function IdentitytoolkitProjectsTenantsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IdentitytoolkitProjectsTenantsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IdentitytoolkitProjectsTenantsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return IdentitytoolkitProjectsTenantsCreateSecurityOption1;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsCreateSecurityOption1 };
var IdentitytoolkitProjectsTenantsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsCreateSecurityOption2, _super);
    function IdentitytoolkitProjectsTenantsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IdentitytoolkitProjectsTenantsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IdentitytoolkitProjectsTenantsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return IdentitytoolkitProjectsTenantsCreateSecurityOption2;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsCreateSecurityOption2 };
var IdentitytoolkitProjectsTenantsCreateSecurity = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsCreateSecurity, _super);
    function IdentitytoolkitProjectsTenantsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", IdentitytoolkitProjectsTenantsCreateSecurityOption1)
    ], IdentitytoolkitProjectsTenantsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", IdentitytoolkitProjectsTenantsCreateSecurityOption2)
    ], IdentitytoolkitProjectsTenantsCreateSecurity.prototype, "option2", void 0);
    return IdentitytoolkitProjectsTenantsCreateSecurity;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsCreateSecurity };
var IdentitytoolkitProjectsTenantsCreateRequest = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsCreateRequest, _super);
    function IdentitytoolkitProjectsTenantsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", IdentitytoolkitProjectsTenantsCreatePathParams)
    ], IdentitytoolkitProjectsTenantsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", IdentitytoolkitProjectsTenantsCreateQueryParams)
    ], IdentitytoolkitProjectsTenantsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudIdentitytoolkitAdminV2Tenant)
    ], IdentitytoolkitProjectsTenantsCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", IdentitytoolkitProjectsTenantsCreateSecurity)
    ], IdentitytoolkitProjectsTenantsCreateRequest.prototype, "security", void 0);
    return IdentitytoolkitProjectsTenantsCreateRequest;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsCreateRequest };
var IdentitytoolkitProjectsTenantsCreateResponse = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsCreateResponse, _super);
    function IdentitytoolkitProjectsTenantsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleCloudIdentitytoolkitAdminV2Tenant)
    ], IdentitytoolkitProjectsTenantsCreateResponse.prototype, "googleCloudIdentitytoolkitAdminV2Tenant", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], IdentitytoolkitProjectsTenantsCreateResponse.prototype, "statusCode", void 0);
    return IdentitytoolkitProjectsTenantsCreateResponse;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsCreateResponse };
