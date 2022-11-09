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
var CloudresourcemanagerFoldersGetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerFoldersGetIamPolicyPathParams, _super);
    function CloudresourcemanagerFoldersGetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersGetIamPolicyPathParams.prototype, "resource", void 0);
    return CloudresourcemanagerFoldersGetIamPolicyPathParams;
}(SpeakeasyBase));
export { CloudresourcemanagerFoldersGetIamPolicyPathParams };
var CloudresourcemanagerFoldersGetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerFoldersGetIamPolicyQueryParams, _super);
    function CloudresourcemanagerFoldersGetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersGetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersGetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersGetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersGetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersGetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersGetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersGetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudresourcemanagerFoldersGetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersGetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersGetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersGetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return CloudresourcemanagerFoldersGetIamPolicyQueryParams;
}(SpeakeasyBase));
export { CloudresourcemanagerFoldersGetIamPolicyQueryParams };
var CloudresourcemanagerFoldersGetIamPolicySecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerFoldersGetIamPolicySecurityOption1, _super);
    function CloudresourcemanagerFoldersGetIamPolicySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerFoldersGetIamPolicySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerFoldersGetIamPolicySecurityOption1.prototype, "oauth2c", void 0);
    return CloudresourcemanagerFoldersGetIamPolicySecurityOption1;
}(SpeakeasyBase));
export { CloudresourcemanagerFoldersGetIamPolicySecurityOption1 };
var CloudresourcemanagerFoldersGetIamPolicySecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerFoldersGetIamPolicySecurityOption2, _super);
    function CloudresourcemanagerFoldersGetIamPolicySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerFoldersGetIamPolicySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerFoldersGetIamPolicySecurityOption2.prototype, "oauth2c", void 0);
    return CloudresourcemanagerFoldersGetIamPolicySecurityOption2;
}(SpeakeasyBase));
export { CloudresourcemanagerFoldersGetIamPolicySecurityOption2 };
var CloudresourcemanagerFoldersGetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerFoldersGetIamPolicySecurity, _super);
    function CloudresourcemanagerFoldersGetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerFoldersGetIamPolicySecurityOption1)
    ], CloudresourcemanagerFoldersGetIamPolicySecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerFoldersGetIamPolicySecurityOption2)
    ], CloudresourcemanagerFoldersGetIamPolicySecurity.prototype, "option2", void 0);
    return CloudresourcemanagerFoldersGetIamPolicySecurity;
}(SpeakeasyBase));
export { CloudresourcemanagerFoldersGetIamPolicySecurity };
var CloudresourcemanagerFoldersGetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerFoldersGetIamPolicyRequest, _super);
    function CloudresourcemanagerFoldersGetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudresourcemanagerFoldersGetIamPolicyPathParams)
    ], CloudresourcemanagerFoldersGetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudresourcemanagerFoldersGetIamPolicyQueryParams)
    ], CloudresourcemanagerFoldersGetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetIamPolicyRequest)
    ], CloudresourcemanagerFoldersGetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudresourcemanagerFoldersGetIamPolicySecurity)
    ], CloudresourcemanagerFoldersGetIamPolicyRequest.prototype, "security", void 0);
    return CloudresourcemanagerFoldersGetIamPolicyRequest;
}(SpeakeasyBase));
export { CloudresourcemanagerFoldersGetIamPolicyRequest };
var CloudresourcemanagerFoldersGetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerFoldersGetIamPolicyResponse, _super);
    function CloudresourcemanagerFoldersGetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersGetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Policy)
    ], CloudresourcemanagerFoldersGetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudresourcemanagerFoldersGetIamPolicyResponse.prototype, "statusCode", void 0);
    return CloudresourcemanagerFoldersGetIamPolicyResponse;
}(SpeakeasyBase));
export { CloudresourcemanagerFoldersGetIamPolicyResponse };
