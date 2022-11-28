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
var IdentitytoolkitProjectsTenantsGetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsGetIamPolicyPathParams, _super);
    function IdentitytoolkitProjectsTenantsGetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsGetIamPolicyPathParams.prototype, "resource", void 0);
    return IdentitytoolkitProjectsTenantsGetIamPolicyPathParams;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsGetIamPolicyPathParams };
var IdentitytoolkitProjectsTenantsGetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsGetIamPolicyQueryParams, _super);
    function IdentitytoolkitProjectsTenantsGetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsGetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsGetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsGetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsGetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsGetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsGetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsGetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IdentitytoolkitProjectsTenantsGetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsGetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsGetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsGetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return IdentitytoolkitProjectsTenantsGetIamPolicyQueryParams;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsGetIamPolicyQueryParams };
var IdentitytoolkitProjectsTenantsGetIamPolicySecurityOption1 = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsGetIamPolicySecurityOption1, _super);
    function IdentitytoolkitProjectsTenantsGetIamPolicySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IdentitytoolkitProjectsTenantsGetIamPolicySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IdentitytoolkitProjectsTenantsGetIamPolicySecurityOption1.prototype, "oauth2c", void 0);
    return IdentitytoolkitProjectsTenantsGetIamPolicySecurityOption1;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsGetIamPolicySecurityOption1 };
var IdentitytoolkitProjectsTenantsGetIamPolicySecurityOption2 = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsGetIamPolicySecurityOption2, _super);
    function IdentitytoolkitProjectsTenantsGetIamPolicySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IdentitytoolkitProjectsTenantsGetIamPolicySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IdentitytoolkitProjectsTenantsGetIamPolicySecurityOption2.prototype, "oauth2c", void 0);
    return IdentitytoolkitProjectsTenantsGetIamPolicySecurityOption2;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsGetIamPolicySecurityOption2 };
var IdentitytoolkitProjectsTenantsGetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsGetIamPolicySecurity, _super);
    function IdentitytoolkitProjectsTenantsGetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", IdentitytoolkitProjectsTenantsGetIamPolicySecurityOption1)
    ], IdentitytoolkitProjectsTenantsGetIamPolicySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", IdentitytoolkitProjectsTenantsGetIamPolicySecurityOption2)
    ], IdentitytoolkitProjectsTenantsGetIamPolicySecurity.prototype, "option2", void 0);
    return IdentitytoolkitProjectsTenantsGetIamPolicySecurity;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsGetIamPolicySecurity };
var IdentitytoolkitProjectsTenantsGetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsGetIamPolicyRequest, _super);
    function IdentitytoolkitProjectsTenantsGetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitProjectsTenantsGetIamPolicyPathParams)
    ], IdentitytoolkitProjectsTenantsGetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitProjectsTenantsGetIamPolicyQueryParams)
    ], IdentitytoolkitProjectsTenantsGetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleIamV1GetIamPolicyRequest)
    ], IdentitytoolkitProjectsTenantsGetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitProjectsTenantsGetIamPolicySecurity)
    ], IdentitytoolkitProjectsTenantsGetIamPolicyRequest.prototype, "security", void 0);
    return IdentitytoolkitProjectsTenantsGetIamPolicyRequest;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsGetIamPolicyRequest };
var IdentitytoolkitProjectsTenantsGetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsGetIamPolicyResponse, _super);
    function IdentitytoolkitProjectsTenantsGetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsGetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleIamV1Policy)
    ], IdentitytoolkitProjectsTenantsGetIamPolicyResponse.prototype, "googleIamV1Policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IdentitytoolkitProjectsTenantsGetIamPolicyResponse.prototype, "statusCode", void 0);
    return IdentitytoolkitProjectsTenantsGetIamPolicyResponse;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsGetIamPolicyResponse };
