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
var SourcerepoProjectsReposGetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposGetIamPolicyPathParams, _super);
    function SourcerepoProjectsReposGetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposGetIamPolicyPathParams.prototype, "resource", void 0);
    return SourcerepoProjectsReposGetIamPolicyPathParams;
}(SpeakeasyBase));
export { SourcerepoProjectsReposGetIamPolicyPathParams };
var SourcerepoProjectsReposGetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposGetIamPolicyQueryParams, _super);
    function SourcerepoProjectsReposGetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposGetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposGetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposGetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposGetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposGetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposGetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposGetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=options.requestedPolicyVersion" }),
        __metadata("design:type", Number)
    ], SourcerepoProjectsReposGetIamPolicyQueryParams.prototype, "optionsRequestedPolicyVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SourcerepoProjectsReposGetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposGetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposGetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposGetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return SourcerepoProjectsReposGetIamPolicyQueryParams;
}(SpeakeasyBase));
export { SourcerepoProjectsReposGetIamPolicyQueryParams };
var SourcerepoProjectsReposGetIamPolicySecurityOption1 = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposGetIamPolicySecurityOption1, _super);
    function SourcerepoProjectsReposGetIamPolicySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SourcerepoProjectsReposGetIamPolicySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SourcerepoProjectsReposGetIamPolicySecurityOption1.prototype, "oauth2c", void 0);
    return SourcerepoProjectsReposGetIamPolicySecurityOption1;
}(SpeakeasyBase));
export { SourcerepoProjectsReposGetIamPolicySecurityOption1 };
var SourcerepoProjectsReposGetIamPolicySecurityOption2 = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposGetIamPolicySecurityOption2, _super);
    function SourcerepoProjectsReposGetIamPolicySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SourcerepoProjectsReposGetIamPolicySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SourcerepoProjectsReposGetIamPolicySecurityOption2.prototype, "oauth2c", void 0);
    return SourcerepoProjectsReposGetIamPolicySecurityOption2;
}(SpeakeasyBase));
export { SourcerepoProjectsReposGetIamPolicySecurityOption2 };
var SourcerepoProjectsReposGetIamPolicySecurityOption3 = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposGetIamPolicySecurityOption3, _super);
    function SourcerepoProjectsReposGetIamPolicySecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SourcerepoProjectsReposGetIamPolicySecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SourcerepoProjectsReposGetIamPolicySecurityOption3.prototype, "oauth2c", void 0);
    return SourcerepoProjectsReposGetIamPolicySecurityOption3;
}(SpeakeasyBase));
export { SourcerepoProjectsReposGetIamPolicySecurityOption3 };
var SourcerepoProjectsReposGetIamPolicySecurityOption4 = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposGetIamPolicySecurityOption4, _super);
    function SourcerepoProjectsReposGetIamPolicySecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SourcerepoProjectsReposGetIamPolicySecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SourcerepoProjectsReposGetIamPolicySecurityOption4.prototype, "oauth2c", void 0);
    return SourcerepoProjectsReposGetIamPolicySecurityOption4;
}(SpeakeasyBase));
export { SourcerepoProjectsReposGetIamPolicySecurityOption4 };
var SourcerepoProjectsReposGetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposGetIamPolicySecurity, _super);
    function SourcerepoProjectsReposGetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", SourcerepoProjectsReposGetIamPolicySecurityOption1)
    ], SourcerepoProjectsReposGetIamPolicySecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", SourcerepoProjectsReposGetIamPolicySecurityOption2)
    ], SourcerepoProjectsReposGetIamPolicySecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", SourcerepoProjectsReposGetIamPolicySecurityOption3)
    ], SourcerepoProjectsReposGetIamPolicySecurity.prototype, "option3", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", SourcerepoProjectsReposGetIamPolicySecurityOption4)
    ], SourcerepoProjectsReposGetIamPolicySecurity.prototype, "option4", void 0);
    return SourcerepoProjectsReposGetIamPolicySecurity;
}(SpeakeasyBase));
export { SourcerepoProjectsReposGetIamPolicySecurity };
var SourcerepoProjectsReposGetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposGetIamPolicyRequest, _super);
    function SourcerepoProjectsReposGetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SourcerepoProjectsReposGetIamPolicyPathParams)
    ], SourcerepoProjectsReposGetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SourcerepoProjectsReposGetIamPolicyQueryParams)
    ], SourcerepoProjectsReposGetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SourcerepoProjectsReposGetIamPolicySecurity)
    ], SourcerepoProjectsReposGetIamPolicyRequest.prototype, "security", void 0);
    return SourcerepoProjectsReposGetIamPolicyRequest;
}(SpeakeasyBase));
export { SourcerepoProjectsReposGetIamPolicyRequest };
var SourcerepoProjectsReposGetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposGetIamPolicyResponse, _super);
    function SourcerepoProjectsReposGetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposGetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Policy)
    ], SourcerepoProjectsReposGetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SourcerepoProjectsReposGetIamPolicyResponse.prototype, "statusCode", void 0);
    return SourcerepoProjectsReposGetIamPolicyResponse;
}(SpeakeasyBase));
export { SourcerepoProjectsReposGetIamPolicyResponse };
