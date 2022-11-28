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
var JobsProjectsTenantsCompleteQueryPathParams = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsCompleteQueryPathParams, _super);
    function JobsProjectsTenantsCompleteQueryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenant" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsCompleteQueryPathParams.prototype, "tenant", void 0);
    return JobsProjectsTenantsCompleteQueryPathParams;
}(SpeakeasyBase));
export { JobsProjectsTenantsCompleteQueryPathParams };
export var JobsProjectsTenantsCompleteQueryScopeEnum;
(function (JobsProjectsTenantsCompleteQueryScopeEnum) {
    JobsProjectsTenantsCompleteQueryScopeEnum["CompletionScopeUnspecified"] = "COMPLETION_SCOPE_UNSPECIFIED";
    JobsProjectsTenantsCompleteQueryScopeEnum["Tenant"] = "TENANT";
    JobsProjectsTenantsCompleteQueryScopeEnum["Public"] = "PUBLIC";
})(JobsProjectsTenantsCompleteQueryScopeEnum || (JobsProjectsTenantsCompleteQueryScopeEnum = {}));
export var JobsProjectsTenantsCompleteQueryTypeEnum;
(function (JobsProjectsTenantsCompleteQueryTypeEnum) {
    JobsProjectsTenantsCompleteQueryTypeEnum["CompletionTypeUnspecified"] = "COMPLETION_TYPE_UNSPECIFIED";
    JobsProjectsTenantsCompleteQueryTypeEnum["JobTitle"] = "JOB_TITLE";
    JobsProjectsTenantsCompleteQueryTypeEnum["CompanyName"] = "COMPANY_NAME";
    JobsProjectsTenantsCompleteQueryTypeEnum["Combined"] = "COMBINED";
})(JobsProjectsTenantsCompleteQueryTypeEnum || (JobsProjectsTenantsCompleteQueryTypeEnum = {}));
var JobsProjectsTenantsCompleteQueryQueryParams = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsCompleteQueryQueryParams, _super);
    function JobsProjectsTenantsCompleteQueryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsCompleteQueryQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsCompleteQueryQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsCompleteQueryQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsCompleteQueryQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=company" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsCompleteQueryQueryParams.prototype, "company", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsCompleteQueryQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsCompleteQueryQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languageCodes" }),
        __metadata("design:type", Array)
    ], JobsProjectsTenantsCompleteQueryQueryParams.prototype, "languageCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsCompleteQueryQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], JobsProjectsTenantsCompleteQueryQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], JobsProjectsTenantsCompleteQueryQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsCompleteQueryQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsCompleteQueryQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scope" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsCompleteQueryQueryParams.prototype, "scope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsCompleteQueryQueryParams.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsCompleteQueryQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsCompleteQueryQueryParams.prototype, "uploadProtocol", void 0);
    return JobsProjectsTenantsCompleteQueryQueryParams;
}(SpeakeasyBase));
export { JobsProjectsTenantsCompleteQueryQueryParams };
var JobsProjectsTenantsCompleteQuerySecurityOption1 = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsCompleteQuerySecurityOption1, _super);
    function JobsProjectsTenantsCompleteQuerySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsTenantsCompleteQuerySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsTenantsCompleteQuerySecurityOption1.prototype, "oauth2c", void 0);
    return JobsProjectsTenantsCompleteQuerySecurityOption1;
}(SpeakeasyBase));
export { JobsProjectsTenantsCompleteQuerySecurityOption1 };
var JobsProjectsTenantsCompleteQuerySecurityOption2 = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsCompleteQuerySecurityOption2, _super);
    function JobsProjectsTenantsCompleteQuerySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsTenantsCompleteQuerySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsTenantsCompleteQuerySecurityOption2.prototype, "oauth2c", void 0);
    return JobsProjectsTenantsCompleteQuerySecurityOption2;
}(SpeakeasyBase));
export { JobsProjectsTenantsCompleteQuerySecurityOption2 };
var JobsProjectsTenantsCompleteQuerySecurity = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsCompleteQuerySecurity, _super);
    function JobsProjectsTenantsCompleteQuerySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsTenantsCompleteQuerySecurityOption1)
    ], JobsProjectsTenantsCompleteQuerySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsTenantsCompleteQuerySecurityOption2)
    ], JobsProjectsTenantsCompleteQuerySecurity.prototype, "option2", void 0);
    return JobsProjectsTenantsCompleteQuerySecurity;
}(SpeakeasyBase));
export { JobsProjectsTenantsCompleteQuerySecurity };
var JobsProjectsTenantsCompleteQueryRequest = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsCompleteQueryRequest, _super);
    function JobsProjectsTenantsCompleteQueryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsTenantsCompleteQueryPathParams)
    ], JobsProjectsTenantsCompleteQueryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsTenantsCompleteQueryQueryParams)
    ], JobsProjectsTenantsCompleteQueryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsTenantsCompleteQuerySecurity)
    ], JobsProjectsTenantsCompleteQueryRequest.prototype, "security", void 0);
    return JobsProjectsTenantsCompleteQueryRequest;
}(SpeakeasyBase));
export { JobsProjectsTenantsCompleteQueryRequest };
var JobsProjectsTenantsCompleteQueryResponse = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsCompleteQueryResponse, _super);
    function JobsProjectsTenantsCompleteQueryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CompleteQueryResponse)
    ], JobsProjectsTenantsCompleteQueryResponse.prototype, "completeQueryResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], JobsProjectsTenantsCompleteQueryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], JobsProjectsTenantsCompleteQueryResponse.prototype, "statusCode", void 0);
    return JobsProjectsTenantsCompleteQueryResponse;
}(SpeakeasyBase));
export { JobsProjectsTenantsCompleteQueryResponse };
