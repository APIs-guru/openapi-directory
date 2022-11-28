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
var CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyPathParams, _super);
    function CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyPathParams.prototype, "resource", void 0);
    return CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyPathParams;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyPathParams };
var CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyQueryParams, _super);
    function CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=options.requestedPolicyVersion" }),
        __metadata("design:type", Number)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyQueryParams.prototype, "optionsRequestedPolicyVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyQueryParams;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyQueryParams };
var CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicySecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicySecurityOption1, _super);
    function CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicySecurityOption1.prototype, "oauth2c", void 0);
    return CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicySecurityOption1;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicySecurityOption1 };
var CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicySecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicySecurityOption2, _super);
    function CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicySecurityOption2.prototype, "oauth2c", void 0);
    return CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicySecurityOption2;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicySecurityOption2 };
var CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicySecurity, _super);
    function CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicySecurityOption1)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicySecurityOption2)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicySecurity.prototype, "option2", void 0);
    return CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicySecurity;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicySecurity };
var CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyRequest, _super);
    function CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyPathParams)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyQueryParams)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicySecurity)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyRequest.prototype, "security", void 0);
    return CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyRequest;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyRequest };
var CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyResponse, _super);
    function CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Policy)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyResponse.prototype, "statusCode", void 0);
    return CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyResponse;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyResponse };
