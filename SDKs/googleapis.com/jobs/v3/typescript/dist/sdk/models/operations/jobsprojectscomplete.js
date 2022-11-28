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
var JobsProjectsCompletePathParams = /** @class */ (function (_super) {
    __extends(JobsProjectsCompletePathParams, _super);
    function JobsProjectsCompletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], JobsProjectsCompletePathParams.prototype, "name", void 0);
    return JobsProjectsCompletePathParams;
}(SpeakeasyBase));
export { JobsProjectsCompletePathParams };
export var JobsProjectsCompleteScopeEnum;
(function (JobsProjectsCompleteScopeEnum) {
    JobsProjectsCompleteScopeEnum["CompletionScopeUnspecified"] = "COMPLETION_SCOPE_UNSPECIFIED";
    JobsProjectsCompleteScopeEnum["Tenant"] = "TENANT";
    JobsProjectsCompleteScopeEnum["Public"] = "PUBLIC";
})(JobsProjectsCompleteScopeEnum || (JobsProjectsCompleteScopeEnum = {}));
export var JobsProjectsCompleteTypeEnum;
(function (JobsProjectsCompleteTypeEnum) {
    JobsProjectsCompleteTypeEnum["CompletionTypeUnspecified"] = "COMPLETION_TYPE_UNSPECIFIED";
    JobsProjectsCompleteTypeEnum["JobTitle"] = "JOB_TITLE";
    JobsProjectsCompleteTypeEnum["CompanyName"] = "COMPANY_NAME";
    JobsProjectsCompleteTypeEnum["Combined"] = "COMBINED";
})(JobsProjectsCompleteTypeEnum || (JobsProjectsCompleteTypeEnum = {}));
var JobsProjectsCompleteQueryParams = /** @class */ (function (_super) {
    __extends(JobsProjectsCompleteQueryParams, _super);
    function JobsProjectsCompleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], JobsProjectsCompleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], JobsProjectsCompleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], JobsProjectsCompleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], JobsProjectsCompleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=companyName" }),
        __metadata("design:type", String)
    ], JobsProjectsCompleteQueryParams.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], JobsProjectsCompleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], JobsProjectsCompleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languageCode" }),
        __metadata("design:type", String)
    ], JobsProjectsCompleteQueryParams.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languageCodes" }),
        __metadata("design:type", Array)
    ], JobsProjectsCompleteQueryParams.prototype, "languageCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], JobsProjectsCompleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], JobsProjectsCompleteQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], JobsProjectsCompleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], JobsProjectsCompleteQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], JobsProjectsCompleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scope" }),
        __metadata("design:type", String)
    ], JobsProjectsCompleteQueryParams.prototype, "scope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], JobsProjectsCompleteQueryParams.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], JobsProjectsCompleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], JobsProjectsCompleteQueryParams.prototype, "uploadProtocol", void 0);
    return JobsProjectsCompleteQueryParams;
}(SpeakeasyBase));
export { JobsProjectsCompleteQueryParams };
var JobsProjectsCompleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(JobsProjectsCompleteSecurityOption1, _super);
    function JobsProjectsCompleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsCompleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsCompleteSecurityOption1.prototype, "oauth2c", void 0);
    return JobsProjectsCompleteSecurityOption1;
}(SpeakeasyBase));
export { JobsProjectsCompleteSecurityOption1 };
var JobsProjectsCompleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(JobsProjectsCompleteSecurityOption2, _super);
    function JobsProjectsCompleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsCompleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsCompleteSecurityOption2.prototype, "oauth2c", void 0);
    return JobsProjectsCompleteSecurityOption2;
}(SpeakeasyBase));
export { JobsProjectsCompleteSecurityOption2 };
var JobsProjectsCompleteSecurity = /** @class */ (function (_super) {
    __extends(JobsProjectsCompleteSecurity, _super);
    function JobsProjectsCompleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsCompleteSecurityOption1)
    ], JobsProjectsCompleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsCompleteSecurityOption2)
    ], JobsProjectsCompleteSecurity.prototype, "option2", void 0);
    return JobsProjectsCompleteSecurity;
}(SpeakeasyBase));
export { JobsProjectsCompleteSecurity };
var JobsProjectsCompleteRequest = /** @class */ (function (_super) {
    __extends(JobsProjectsCompleteRequest, _super);
    function JobsProjectsCompleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsCompletePathParams)
    ], JobsProjectsCompleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsCompleteQueryParams)
    ], JobsProjectsCompleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsCompleteSecurity)
    ], JobsProjectsCompleteRequest.prototype, "security", void 0);
    return JobsProjectsCompleteRequest;
}(SpeakeasyBase));
export { JobsProjectsCompleteRequest };
var JobsProjectsCompleteResponse = /** @class */ (function (_super) {
    __extends(JobsProjectsCompleteResponse, _super);
    function JobsProjectsCompleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CompleteQueryResponse)
    ], JobsProjectsCompleteResponse.prototype, "completeQueryResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], JobsProjectsCompleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], JobsProjectsCompleteResponse.prototype, "statusCode", void 0);
    return JobsProjectsCompleteResponse;
}(SpeakeasyBase));
export { JobsProjectsCompleteResponse };
