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
var CloudresourcemanagerProjectsGetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsGetIamPolicyPathParams, _super);
    function CloudresourcemanagerProjectsGetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetIamPolicyPathParams.prototype, "resource", void 0);
    return CloudresourcemanagerProjectsGetIamPolicyPathParams;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsGetIamPolicyPathParams };
var CloudresourcemanagerProjectsGetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsGetIamPolicyQueryParams, _super);
    function CloudresourcemanagerProjectsGetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudresourcemanagerProjectsGetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return CloudresourcemanagerProjectsGetIamPolicyQueryParams;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsGetIamPolicyQueryParams };
var CloudresourcemanagerProjectsGetIamPolicySecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsGetIamPolicySecurityOption1, _super);
    function CloudresourcemanagerProjectsGetIamPolicySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerProjectsGetIamPolicySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerProjectsGetIamPolicySecurityOption1.prototype, "oauth2c", void 0);
    return CloudresourcemanagerProjectsGetIamPolicySecurityOption1;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsGetIamPolicySecurityOption1 };
var CloudresourcemanagerProjectsGetIamPolicySecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsGetIamPolicySecurityOption2, _super);
    function CloudresourcemanagerProjectsGetIamPolicySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerProjectsGetIamPolicySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerProjectsGetIamPolicySecurityOption2.prototype, "oauth2c", void 0);
    return CloudresourcemanagerProjectsGetIamPolicySecurityOption2;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsGetIamPolicySecurityOption2 };
var CloudresourcemanagerProjectsGetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsGetIamPolicySecurity, _super);
    function CloudresourcemanagerProjectsGetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerProjectsGetIamPolicySecurityOption1)
    ], CloudresourcemanagerProjectsGetIamPolicySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerProjectsGetIamPolicySecurityOption2)
    ], CloudresourcemanagerProjectsGetIamPolicySecurity.prototype, "option2", void 0);
    return CloudresourcemanagerProjectsGetIamPolicySecurity;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsGetIamPolicySecurity };
var CloudresourcemanagerProjectsGetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsGetIamPolicyRequest, _super);
    function CloudresourcemanagerProjectsGetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudresourcemanagerProjectsGetIamPolicyPathParams)
    ], CloudresourcemanagerProjectsGetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudresourcemanagerProjectsGetIamPolicyQueryParams)
    ], CloudresourcemanagerProjectsGetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetIamPolicyRequest)
    ], CloudresourcemanagerProjectsGetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudresourcemanagerProjectsGetIamPolicySecurity)
    ], CloudresourcemanagerProjectsGetIamPolicyRequest.prototype, "security", void 0);
    return CloudresourcemanagerProjectsGetIamPolicyRequest;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsGetIamPolicyRequest };
var CloudresourcemanagerProjectsGetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsGetIamPolicyResponse, _super);
    function CloudresourcemanagerProjectsGetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Policy)
    ], CloudresourcemanagerProjectsGetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudresourcemanagerProjectsGetIamPolicyResponse.prototype, "statusCode", void 0);
    return CloudresourcemanagerProjectsGetIamPolicyResponse;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsGetIamPolicyResponse };
