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
var CloudresourcemanagerProjectsGetOrgPolicyPathParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsGetOrgPolicyPathParams, _super);
    function CloudresourcemanagerProjectsGetOrgPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetOrgPolicyPathParams.prototype, "resource", void 0);
    return CloudresourcemanagerProjectsGetOrgPolicyPathParams;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsGetOrgPolicyPathParams };
var CloudresourcemanagerProjectsGetOrgPolicyQueryParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsGetOrgPolicyQueryParams, _super);
    function CloudresourcemanagerProjectsGetOrgPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetOrgPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetOrgPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetOrgPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetOrgPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetOrgPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetOrgPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetOrgPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudresourcemanagerProjectsGetOrgPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetOrgPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetOrgPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetOrgPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return CloudresourcemanagerProjectsGetOrgPolicyQueryParams;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsGetOrgPolicyQueryParams };
var CloudresourcemanagerProjectsGetOrgPolicySecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsGetOrgPolicySecurityOption1, _super);
    function CloudresourcemanagerProjectsGetOrgPolicySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerProjectsGetOrgPolicySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerProjectsGetOrgPolicySecurityOption1.prototype, "oauth2c", void 0);
    return CloudresourcemanagerProjectsGetOrgPolicySecurityOption1;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsGetOrgPolicySecurityOption1 };
var CloudresourcemanagerProjectsGetOrgPolicySecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsGetOrgPolicySecurityOption2, _super);
    function CloudresourcemanagerProjectsGetOrgPolicySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerProjectsGetOrgPolicySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerProjectsGetOrgPolicySecurityOption2.prototype, "oauth2c", void 0);
    return CloudresourcemanagerProjectsGetOrgPolicySecurityOption2;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsGetOrgPolicySecurityOption2 };
var CloudresourcemanagerProjectsGetOrgPolicySecurity = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsGetOrgPolicySecurity, _super);
    function CloudresourcemanagerProjectsGetOrgPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerProjectsGetOrgPolicySecurityOption1)
    ], CloudresourcemanagerProjectsGetOrgPolicySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerProjectsGetOrgPolicySecurityOption2)
    ], CloudresourcemanagerProjectsGetOrgPolicySecurity.prototype, "option2", void 0);
    return CloudresourcemanagerProjectsGetOrgPolicySecurity;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsGetOrgPolicySecurity };
var CloudresourcemanagerProjectsGetOrgPolicyRequest = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsGetOrgPolicyRequest, _super);
    function CloudresourcemanagerProjectsGetOrgPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudresourcemanagerProjectsGetOrgPolicyPathParams)
    ], CloudresourcemanagerProjectsGetOrgPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudresourcemanagerProjectsGetOrgPolicyQueryParams)
    ], CloudresourcemanagerProjectsGetOrgPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetOrgPolicyRequest)
    ], CloudresourcemanagerProjectsGetOrgPolicyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudresourcemanagerProjectsGetOrgPolicySecurity)
    ], CloudresourcemanagerProjectsGetOrgPolicyRequest.prototype, "security", void 0);
    return CloudresourcemanagerProjectsGetOrgPolicyRequest;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsGetOrgPolicyRequest };
var CloudresourcemanagerProjectsGetOrgPolicyResponse = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsGetOrgPolicyResponse, _super);
    function CloudresourcemanagerProjectsGetOrgPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetOrgPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OrgPolicy)
    ], CloudresourcemanagerProjectsGetOrgPolicyResponse.prototype, "orgPolicy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudresourcemanagerProjectsGetOrgPolicyResponse.prototype, "statusCode", void 0);
    return CloudresourcemanagerProjectsGetOrgPolicyResponse;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsGetOrgPolicyResponse };
