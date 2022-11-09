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
var CloudresourcemanagerProjectsGetEffectiveOrgPolicyPathParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsGetEffectiveOrgPolicyPathParams, _super);
    function CloudresourcemanagerProjectsGetEffectiveOrgPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetEffectiveOrgPolicyPathParams.prototype, "resource", void 0);
    return CloudresourcemanagerProjectsGetEffectiveOrgPolicyPathParams;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsGetEffectiveOrgPolicyPathParams };
var CloudresourcemanagerProjectsGetEffectiveOrgPolicyQueryParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsGetEffectiveOrgPolicyQueryParams, _super);
    function CloudresourcemanagerProjectsGetEffectiveOrgPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetEffectiveOrgPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetEffectiveOrgPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetEffectiveOrgPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetEffectiveOrgPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetEffectiveOrgPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetEffectiveOrgPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetEffectiveOrgPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudresourcemanagerProjectsGetEffectiveOrgPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetEffectiveOrgPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetEffectiveOrgPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetEffectiveOrgPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return CloudresourcemanagerProjectsGetEffectiveOrgPolicyQueryParams;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsGetEffectiveOrgPolicyQueryParams };
var CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurityOption1, _super);
    function CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurityOption1.prototype, "oauth2c", void 0);
    return CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurityOption1;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurityOption1 };
var CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurityOption2, _super);
    function CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurityOption2.prototype, "oauth2c", void 0);
    return CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurityOption2;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurityOption2 };
var CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurity = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurity, _super);
    function CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurityOption1)
    ], CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurityOption2)
    ], CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurity.prototype, "option2", void 0);
    return CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurity;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurity };
var CloudresourcemanagerProjectsGetEffectiveOrgPolicyRequest = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsGetEffectiveOrgPolicyRequest, _super);
    function CloudresourcemanagerProjectsGetEffectiveOrgPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudresourcemanagerProjectsGetEffectiveOrgPolicyPathParams)
    ], CloudresourcemanagerProjectsGetEffectiveOrgPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudresourcemanagerProjectsGetEffectiveOrgPolicyQueryParams)
    ], CloudresourcemanagerProjectsGetEffectiveOrgPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetEffectiveOrgPolicyRequest)
    ], CloudresourcemanagerProjectsGetEffectiveOrgPolicyRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurity)
    ], CloudresourcemanagerProjectsGetEffectiveOrgPolicyRequest.prototype, "security", void 0);
    return CloudresourcemanagerProjectsGetEffectiveOrgPolicyRequest;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsGetEffectiveOrgPolicyRequest };
var CloudresourcemanagerProjectsGetEffectiveOrgPolicyResponse = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsGetEffectiveOrgPolicyResponse, _super);
    function CloudresourcemanagerProjectsGetEffectiveOrgPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetEffectiveOrgPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.OrgPolicy)
    ], CloudresourcemanagerProjectsGetEffectiveOrgPolicyResponse.prototype, "orgPolicy", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudresourcemanagerProjectsGetEffectiveOrgPolicyResponse.prototype, "statusCode", void 0);
    return CloudresourcemanagerProjectsGetEffectiveOrgPolicyResponse;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsGetEffectiveOrgPolicyResponse };
