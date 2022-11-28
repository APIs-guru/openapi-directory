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
var JobsProjectsJobsListPathParams = /** @class */ (function (_super) {
    __extends(JobsProjectsJobsListPathParams, _super);
    function JobsProjectsJobsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsListPathParams.prototype, "parent", void 0);
    return JobsProjectsJobsListPathParams;
}(SpeakeasyBase));
export { JobsProjectsJobsListPathParams };
export var JobsProjectsJobsListJobViewEnum;
(function (JobsProjectsJobsListJobViewEnum) {
    JobsProjectsJobsListJobViewEnum["JobViewUnspecified"] = "JOB_VIEW_UNSPECIFIED";
    JobsProjectsJobsListJobViewEnum["JobViewIdOnly"] = "JOB_VIEW_ID_ONLY";
    JobsProjectsJobsListJobViewEnum["JobViewMinimal"] = "JOB_VIEW_MINIMAL";
    JobsProjectsJobsListJobViewEnum["JobViewSmall"] = "JOB_VIEW_SMALL";
    JobsProjectsJobsListJobViewEnum["JobViewFull"] = "JOB_VIEW_FULL";
})(JobsProjectsJobsListJobViewEnum || (JobsProjectsJobsListJobViewEnum = {}));
var JobsProjectsJobsListQueryParams = /** @class */ (function (_super) {
    __extends(JobsProjectsJobsListQueryParams, _super);
    function JobsProjectsJobsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jobView" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsListQueryParams.prototype, "jobView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], JobsProjectsJobsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], JobsProjectsJobsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsListQueryParams.prototype, "uploadProtocol", void 0);
    return JobsProjectsJobsListQueryParams;
}(SpeakeasyBase));
export { JobsProjectsJobsListQueryParams };
var JobsProjectsJobsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(JobsProjectsJobsListSecurityOption1, _super);
    function JobsProjectsJobsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsJobsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsJobsListSecurityOption1.prototype, "oauth2c", void 0);
    return JobsProjectsJobsListSecurityOption1;
}(SpeakeasyBase));
export { JobsProjectsJobsListSecurityOption1 };
var JobsProjectsJobsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(JobsProjectsJobsListSecurityOption2, _super);
    function JobsProjectsJobsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsJobsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsJobsListSecurityOption2.prototype, "oauth2c", void 0);
    return JobsProjectsJobsListSecurityOption2;
}(SpeakeasyBase));
export { JobsProjectsJobsListSecurityOption2 };
var JobsProjectsJobsListSecurity = /** @class */ (function (_super) {
    __extends(JobsProjectsJobsListSecurity, _super);
    function JobsProjectsJobsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsJobsListSecurityOption1)
    ], JobsProjectsJobsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsJobsListSecurityOption2)
    ], JobsProjectsJobsListSecurity.prototype, "option2", void 0);
    return JobsProjectsJobsListSecurity;
}(SpeakeasyBase));
export { JobsProjectsJobsListSecurity };
var JobsProjectsJobsListRequest = /** @class */ (function (_super) {
    __extends(JobsProjectsJobsListRequest, _super);
    function JobsProjectsJobsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsJobsListPathParams)
    ], JobsProjectsJobsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsJobsListQueryParams)
    ], JobsProjectsJobsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsJobsListSecurity)
    ], JobsProjectsJobsListRequest.prototype, "security", void 0);
    return JobsProjectsJobsListRequest;
}(SpeakeasyBase));
export { JobsProjectsJobsListRequest };
var JobsProjectsJobsListResponse = /** @class */ (function (_super) {
    __extends(JobsProjectsJobsListResponse, _super);
    function JobsProjectsJobsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], JobsProjectsJobsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListJobsResponse)
    ], JobsProjectsJobsListResponse.prototype, "listJobsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], JobsProjectsJobsListResponse.prototype, "statusCode", void 0);
    return JobsProjectsJobsListResponse;
}(SpeakeasyBase));
export { JobsProjectsJobsListResponse };
