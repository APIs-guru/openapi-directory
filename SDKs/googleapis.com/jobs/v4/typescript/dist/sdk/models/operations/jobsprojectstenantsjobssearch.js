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
var JobsProjectsTenantsJobsSearchPathParams = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsSearchPathParams, _super);
    function JobsProjectsTenantsJobsSearchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsSearchPathParams.prototype, "parent", void 0);
    return JobsProjectsTenantsJobsSearchPathParams;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsSearchPathParams };
var JobsProjectsTenantsJobsSearchQueryParams = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsSearchQueryParams, _super);
    function JobsProjectsTenantsJobsSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsSearchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsSearchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsSearchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsSearchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsSearchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsSearchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsSearchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], JobsProjectsTenantsJobsSearchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsSearchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsSearchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsSearchQueryParams.prototype, "uploadProtocol", void 0);
    return JobsProjectsTenantsJobsSearchQueryParams;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsSearchQueryParams };
var JobsProjectsTenantsJobsSearchSecurityOption1 = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsSearchSecurityOption1, _super);
    function JobsProjectsTenantsJobsSearchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsTenantsJobsSearchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsTenantsJobsSearchSecurityOption1.prototype, "oauth2c", void 0);
    return JobsProjectsTenantsJobsSearchSecurityOption1;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsSearchSecurityOption1 };
var JobsProjectsTenantsJobsSearchSecurityOption2 = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsSearchSecurityOption2, _super);
    function JobsProjectsTenantsJobsSearchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsTenantsJobsSearchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsTenantsJobsSearchSecurityOption2.prototype, "oauth2c", void 0);
    return JobsProjectsTenantsJobsSearchSecurityOption2;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsSearchSecurityOption2 };
var JobsProjectsTenantsJobsSearchSecurity = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsSearchSecurity, _super);
    function JobsProjectsTenantsJobsSearchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsTenantsJobsSearchSecurityOption1)
    ], JobsProjectsTenantsJobsSearchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsTenantsJobsSearchSecurityOption2)
    ], JobsProjectsTenantsJobsSearchSecurity.prototype, "option2", void 0);
    return JobsProjectsTenantsJobsSearchSecurity;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsSearchSecurity };
var JobsProjectsTenantsJobsSearchRequest = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsSearchRequest, _super);
    function JobsProjectsTenantsJobsSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsTenantsJobsSearchPathParams)
    ], JobsProjectsTenantsJobsSearchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsTenantsJobsSearchQueryParams)
    ], JobsProjectsTenantsJobsSearchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SearchJobsRequest)
    ], JobsProjectsTenantsJobsSearchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsTenantsJobsSearchSecurity)
    ], JobsProjectsTenantsJobsSearchRequest.prototype, "security", void 0);
    return JobsProjectsTenantsJobsSearchRequest;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsSearchRequest };
var JobsProjectsTenantsJobsSearchResponse = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsSearchResponse, _super);
    function JobsProjectsTenantsJobsSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsSearchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SearchJobsResponse)
    ], JobsProjectsTenantsJobsSearchResponse.prototype, "searchJobsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], JobsProjectsTenantsJobsSearchResponse.prototype, "statusCode", void 0);
    return JobsProjectsTenantsJobsSearchResponse;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsSearchResponse };
