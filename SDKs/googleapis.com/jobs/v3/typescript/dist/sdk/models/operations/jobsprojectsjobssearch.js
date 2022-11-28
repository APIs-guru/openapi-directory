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
var JobsProjectsJobsSearchPathParams = /** @class */ (function (_super) {
    __extends(JobsProjectsJobsSearchPathParams, _super);
    function JobsProjectsJobsSearchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsSearchPathParams.prototype, "parent", void 0);
    return JobsProjectsJobsSearchPathParams;
}(SpeakeasyBase));
export { JobsProjectsJobsSearchPathParams };
var JobsProjectsJobsSearchQueryParams = /** @class */ (function (_super) {
    __extends(JobsProjectsJobsSearchQueryParams, _super);
    function JobsProjectsJobsSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsSearchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsSearchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsSearchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsSearchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsSearchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsSearchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsSearchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], JobsProjectsJobsSearchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsSearchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsSearchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsSearchQueryParams.prototype, "uploadProtocol", void 0);
    return JobsProjectsJobsSearchQueryParams;
}(SpeakeasyBase));
export { JobsProjectsJobsSearchQueryParams };
var JobsProjectsJobsSearchSecurityOption1 = /** @class */ (function (_super) {
    __extends(JobsProjectsJobsSearchSecurityOption1, _super);
    function JobsProjectsJobsSearchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsJobsSearchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsJobsSearchSecurityOption1.prototype, "oauth2c", void 0);
    return JobsProjectsJobsSearchSecurityOption1;
}(SpeakeasyBase));
export { JobsProjectsJobsSearchSecurityOption1 };
var JobsProjectsJobsSearchSecurityOption2 = /** @class */ (function (_super) {
    __extends(JobsProjectsJobsSearchSecurityOption2, _super);
    function JobsProjectsJobsSearchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsJobsSearchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsJobsSearchSecurityOption2.prototype, "oauth2c", void 0);
    return JobsProjectsJobsSearchSecurityOption2;
}(SpeakeasyBase));
export { JobsProjectsJobsSearchSecurityOption2 };
var JobsProjectsJobsSearchSecurity = /** @class */ (function (_super) {
    __extends(JobsProjectsJobsSearchSecurity, _super);
    function JobsProjectsJobsSearchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsJobsSearchSecurityOption1)
    ], JobsProjectsJobsSearchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsJobsSearchSecurityOption2)
    ], JobsProjectsJobsSearchSecurity.prototype, "option2", void 0);
    return JobsProjectsJobsSearchSecurity;
}(SpeakeasyBase));
export { JobsProjectsJobsSearchSecurity };
var JobsProjectsJobsSearchRequest = /** @class */ (function (_super) {
    __extends(JobsProjectsJobsSearchRequest, _super);
    function JobsProjectsJobsSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsJobsSearchPathParams)
    ], JobsProjectsJobsSearchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsJobsSearchQueryParams)
    ], JobsProjectsJobsSearchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SearchJobsRequest)
    ], JobsProjectsJobsSearchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsJobsSearchSecurity)
    ], JobsProjectsJobsSearchRequest.prototype, "security", void 0);
    return JobsProjectsJobsSearchRequest;
}(SpeakeasyBase));
export { JobsProjectsJobsSearchRequest };
var JobsProjectsJobsSearchResponse = /** @class */ (function (_super) {
    __extends(JobsProjectsJobsSearchResponse, _super);
    function JobsProjectsJobsSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], JobsProjectsJobsSearchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SearchJobsResponse)
    ], JobsProjectsJobsSearchResponse.prototype, "searchJobsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], JobsProjectsJobsSearchResponse.prototype, "statusCode", void 0);
    return JobsProjectsJobsSearchResponse;
}(SpeakeasyBase));
export { JobsProjectsJobsSearchResponse };
