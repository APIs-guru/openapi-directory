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
var CloudresourcemanagerOrganizationsGetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOrganizationsGetIamPolicyPathParams, _super);
    function CloudresourcemanagerOrganizationsGetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsGetIamPolicyPathParams.prototype, "resource", void 0);
    return CloudresourcemanagerOrganizationsGetIamPolicyPathParams;
}(SpeakeasyBase));
export { CloudresourcemanagerOrganizationsGetIamPolicyPathParams };
var CloudresourcemanagerOrganizationsGetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOrganizationsGetIamPolicyQueryParams, _super);
    function CloudresourcemanagerOrganizationsGetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsGetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsGetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsGetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsGetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsGetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsGetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsGetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudresourcemanagerOrganizationsGetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsGetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsGetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsGetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return CloudresourcemanagerOrganizationsGetIamPolicyQueryParams;
}(SpeakeasyBase));
export { CloudresourcemanagerOrganizationsGetIamPolicyQueryParams };
var CloudresourcemanagerOrganizationsGetIamPolicySecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOrganizationsGetIamPolicySecurityOption1, _super);
    function CloudresourcemanagerOrganizationsGetIamPolicySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerOrganizationsGetIamPolicySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerOrganizationsGetIamPolicySecurityOption1.prototype, "oauth2c", void 0);
    return CloudresourcemanagerOrganizationsGetIamPolicySecurityOption1;
}(SpeakeasyBase));
export { CloudresourcemanagerOrganizationsGetIamPolicySecurityOption1 };
var CloudresourcemanagerOrganizationsGetIamPolicySecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOrganizationsGetIamPolicySecurityOption2, _super);
    function CloudresourcemanagerOrganizationsGetIamPolicySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerOrganizationsGetIamPolicySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerOrganizationsGetIamPolicySecurityOption2.prototype, "oauth2c", void 0);
    return CloudresourcemanagerOrganizationsGetIamPolicySecurityOption2;
}(SpeakeasyBase));
export { CloudresourcemanagerOrganizationsGetIamPolicySecurityOption2 };
var CloudresourcemanagerOrganizationsGetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOrganizationsGetIamPolicySecurity, _super);
    function CloudresourcemanagerOrganizationsGetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerOrganizationsGetIamPolicySecurityOption1)
    ], CloudresourcemanagerOrganizationsGetIamPolicySecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerOrganizationsGetIamPolicySecurityOption2)
    ], CloudresourcemanagerOrganizationsGetIamPolicySecurity.prototype, "option2", void 0);
    return CloudresourcemanagerOrganizationsGetIamPolicySecurity;
}(SpeakeasyBase));
export { CloudresourcemanagerOrganizationsGetIamPolicySecurity };
var CloudresourcemanagerOrganizationsGetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOrganizationsGetIamPolicyRequest, _super);
    function CloudresourcemanagerOrganizationsGetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudresourcemanagerOrganizationsGetIamPolicyPathParams)
    ], CloudresourcemanagerOrganizationsGetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudresourcemanagerOrganizationsGetIamPolicyQueryParams)
    ], CloudresourcemanagerOrganizationsGetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetIamPolicyRequest)
    ], CloudresourcemanagerOrganizationsGetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudresourcemanagerOrganizationsGetIamPolicySecurity)
    ], CloudresourcemanagerOrganizationsGetIamPolicyRequest.prototype, "security", void 0);
    return CloudresourcemanagerOrganizationsGetIamPolicyRequest;
}(SpeakeasyBase));
export { CloudresourcemanagerOrganizationsGetIamPolicyRequest };
var CloudresourcemanagerOrganizationsGetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOrganizationsGetIamPolicyResponse, _super);
    function CloudresourcemanagerOrganizationsGetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsGetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Policy)
    ], CloudresourcemanagerOrganizationsGetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudresourcemanagerOrganizationsGetIamPolicyResponse.prototype, "statusCode", void 0);
    return CloudresourcemanagerOrganizationsGetIamPolicyResponse;
}(SpeakeasyBase));
export { CloudresourcemanagerOrganizationsGetIamPolicyResponse };
