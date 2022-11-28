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
var SourcerepoProjectsReposSetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposSetIamPolicyPathParams, _super);
    function SourcerepoProjectsReposSetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposSetIamPolicyPathParams.prototype, "resource", void 0);
    return SourcerepoProjectsReposSetIamPolicyPathParams;
}(SpeakeasyBase));
export { SourcerepoProjectsReposSetIamPolicyPathParams };
var SourcerepoProjectsReposSetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposSetIamPolicyQueryParams, _super);
    function SourcerepoProjectsReposSetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposSetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposSetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposSetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposSetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposSetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposSetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposSetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SourcerepoProjectsReposSetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposSetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposSetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposSetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return SourcerepoProjectsReposSetIamPolicyQueryParams;
}(SpeakeasyBase));
export { SourcerepoProjectsReposSetIamPolicyQueryParams };
var SourcerepoProjectsReposSetIamPolicySecurityOption1 = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposSetIamPolicySecurityOption1, _super);
    function SourcerepoProjectsReposSetIamPolicySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SourcerepoProjectsReposSetIamPolicySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SourcerepoProjectsReposSetIamPolicySecurityOption1.prototype, "oauth2c", void 0);
    return SourcerepoProjectsReposSetIamPolicySecurityOption1;
}(SpeakeasyBase));
export { SourcerepoProjectsReposSetIamPolicySecurityOption1 };
var SourcerepoProjectsReposSetIamPolicySecurityOption2 = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposSetIamPolicySecurityOption2, _super);
    function SourcerepoProjectsReposSetIamPolicySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SourcerepoProjectsReposSetIamPolicySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SourcerepoProjectsReposSetIamPolicySecurityOption2.prototype, "oauth2c", void 0);
    return SourcerepoProjectsReposSetIamPolicySecurityOption2;
}(SpeakeasyBase));
export { SourcerepoProjectsReposSetIamPolicySecurityOption2 };
var SourcerepoProjectsReposSetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposSetIamPolicySecurity, _super);
    function SourcerepoProjectsReposSetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SourcerepoProjectsReposSetIamPolicySecurityOption1)
    ], SourcerepoProjectsReposSetIamPolicySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SourcerepoProjectsReposSetIamPolicySecurityOption2)
    ], SourcerepoProjectsReposSetIamPolicySecurity.prototype, "option2", void 0);
    return SourcerepoProjectsReposSetIamPolicySecurity;
}(SpeakeasyBase));
export { SourcerepoProjectsReposSetIamPolicySecurity };
var SourcerepoProjectsReposSetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposSetIamPolicyRequest, _super);
    function SourcerepoProjectsReposSetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SourcerepoProjectsReposSetIamPolicyPathParams)
    ], SourcerepoProjectsReposSetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SourcerepoProjectsReposSetIamPolicyQueryParams)
    ], SourcerepoProjectsReposSetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SetIamPolicyRequest)
    ], SourcerepoProjectsReposSetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SourcerepoProjectsReposSetIamPolicySecurity)
    ], SourcerepoProjectsReposSetIamPolicyRequest.prototype, "security", void 0);
    return SourcerepoProjectsReposSetIamPolicyRequest;
}(SpeakeasyBase));
export { SourcerepoProjectsReposSetIamPolicyRequest };
var SourcerepoProjectsReposSetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposSetIamPolicyResponse, _super);
    function SourcerepoProjectsReposSetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposSetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Policy)
    ], SourcerepoProjectsReposSetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SourcerepoProjectsReposSetIamPolicyResponse.prototype, "statusCode", void 0);
    return SourcerepoProjectsReposSetIamPolicyResponse;
}(SpeakeasyBase));
export { SourcerepoProjectsReposSetIamPolicyResponse };
