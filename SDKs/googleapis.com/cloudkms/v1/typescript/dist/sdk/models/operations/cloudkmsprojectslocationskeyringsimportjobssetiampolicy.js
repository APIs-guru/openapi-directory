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
var CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyPathParams, _super);
    function CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyPathParams.prototype, "resource", void 0);
    return CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyPathParams;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyPathParams };
var CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyQueryParams, _super);
    function CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyQueryParams;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyQueryParams };
var CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurityOption1, _super);
    function CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurityOption1.prototype, "oauth2c", void 0);
    return CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurityOption1;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurityOption1 };
var CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurityOption2, _super);
    function CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurityOption2.prototype, "oauth2c", void 0);
    return CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurityOption2;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurityOption2 };
var CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurity, _super);
    function CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurityOption1)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurityOption2)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurity.prototype, "option2", void 0);
    return CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurity;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurity };
var CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyRequest, _super);
    function CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyPathParams)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyQueryParams)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SetIamPolicyRequest)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurity)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyRequest.prototype, "security", void 0);
    return CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyRequest;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyRequest };
var CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyResponse, _super);
    function CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Policy)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyResponse.prototype, "statusCode", void 0);
    return CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyResponse;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyResponse };
