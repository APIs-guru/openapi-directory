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
var JobsProjectsTenantsJobsListPathParams = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsListPathParams, _super);
    function JobsProjectsTenantsJobsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsListPathParams.prototype, "parent", void 0);
    return JobsProjectsTenantsJobsListPathParams;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsListPathParams };
export var JobsProjectsTenantsJobsListJobViewEnum;
(function (JobsProjectsTenantsJobsListJobViewEnum) {
    JobsProjectsTenantsJobsListJobViewEnum["JobViewUnspecified"] = "JOB_VIEW_UNSPECIFIED";
    JobsProjectsTenantsJobsListJobViewEnum["JobViewIdOnly"] = "JOB_VIEW_ID_ONLY";
    JobsProjectsTenantsJobsListJobViewEnum["JobViewMinimal"] = "JOB_VIEW_MINIMAL";
    JobsProjectsTenantsJobsListJobViewEnum["JobViewSmall"] = "JOB_VIEW_SMALL";
    JobsProjectsTenantsJobsListJobViewEnum["JobViewFull"] = "JOB_VIEW_FULL";
})(JobsProjectsTenantsJobsListJobViewEnum || (JobsProjectsTenantsJobsListJobViewEnum = {}));
var JobsProjectsTenantsJobsListQueryParams = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsListQueryParams, _super);
    function JobsProjectsTenantsJobsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jobView" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsListQueryParams.prototype, "jobView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], JobsProjectsTenantsJobsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], JobsProjectsTenantsJobsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsListQueryParams.prototype, "uploadProtocol", void 0);
    return JobsProjectsTenantsJobsListQueryParams;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsListQueryParams };
var JobsProjectsTenantsJobsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsListSecurityOption1, _super);
    function JobsProjectsTenantsJobsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsTenantsJobsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsTenantsJobsListSecurityOption1.prototype, "oauth2c", void 0);
    return JobsProjectsTenantsJobsListSecurityOption1;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsListSecurityOption1 };
var JobsProjectsTenantsJobsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsListSecurityOption2, _super);
    function JobsProjectsTenantsJobsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsTenantsJobsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsTenantsJobsListSecurityOption2.prototype, "oauth2c", void 0);
    return JobsProjectsTenantsJobsListSecurityOption2;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsListSecurityOption2 };
var JobsProjectsTenantsJobsListSecurity = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsListSecurity, _super);
    function JobsProjectsTenantsJobsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsTenantsJobsListSecurityOption1)
    ], JobsProjectsTenantsJobsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsTenantsJobsListSecurityOption2)
    ], JobsProjectsTenantsJobsListSecurity.prototype, "option2", void 0);
    return JobsProjectsTenantsJobsListSecurity;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsListSecurity };
var JobsProjectsTenantsJobsListRequest = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsListRequest, _super);
    function JobsProjectsTenantsJobsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsTenantsJobsListPathParams)
    ], JobsProjectsTenantsJobsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsTenantsJobsListQueryParams)
    ], JobsProjectsTenantsJobsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsTenantsJobsListSecurity)
    ], JobsProjectsTenantsJobsListRequest.prototype, "security", void 0);
    return JobsProjectsTenantsJobsListRequest;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsListRequest };
var JobsProjectsTenantsJobsListResponse = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsListResponse, _super);
    function JobsProjectsTenantsJobsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListJobsResponse)
    ], JobsProjectsTenantsJobsListResponse.prototype, "listJobsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], JobsProjectsTenantsJobsListResponse.prototype, "statusCode", void 0);
    return JobsProjectsTenantsJobsListResponse;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsListResponse };
