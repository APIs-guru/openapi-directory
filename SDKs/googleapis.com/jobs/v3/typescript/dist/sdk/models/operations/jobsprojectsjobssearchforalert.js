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
var JobsProjectsJobsSearchForAlertPathParams = /** @class */ (function (_super) {
    __extends(JobsProjectsJobsSearchForAlertPathParams, _super);
    function JobsProjectsJobsSearchForAlertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsSearchForAlertPathParams.prototype, "parent", void 0);
    return JobsProjectsJobsSearchForAlertPathParams;
}(SpeakeasyBase));
export { JobsProjectsJobsSearchForAlertPathParams };
var JobsProjectsJobsSearchForAlertQueryParams = /** @class */ (function (_super) {
    __extends(JobsProjectsJobsSearchForAlertQueryParams, _super);
    function JobsProjectsJobsSearchForAlertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsSearchForAlertQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsSearchForAlertQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsSearchForAlertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsSearchForAlertQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsSearchForAlertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsSearchForAlertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsSearchForAlertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], JobsProjectsJobsSearchForAlertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsSearchForAlertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsSearchForAlertQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsSearchForAlertQueryParams.prototype, "uploadProtocol", void 0);
    return JobsProjectsJobsSearchForAlertQueryParams;
}(SpeakeasyBase));
export { JobsProjectsJobsSearchForAlertQueryParams };
var JobsProjectsJobsSearchForAlertSecurityOption1 = /** @class */ (function (_super) {
    __extends(JobsProjectsJobsSearchForAlertSecurityOption1, _super);
    function JobsProjectsJobsSearchForAlertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsJobsSearchForAlertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsJobsSearchForAlertSecurityOption1.prototype, "oauth2c", void 0);
    return JobsProjectsJobsSearchForAlertSecurityOption1;
}(SpeakeasyBase));
export { JobsProjectsJobsSearchForAlertSecurityOption1 };
var JobsProjectsJobsSearchForAlertSecurityOption2 = /** @class */ (function (_super) {
    __extends(JobsProjectsJobsSearchForAlertSecurityOption2, _super);
    function JobsProjectsJobsSearchForAlertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsJobsSearchForAlertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsJobsSearchForAlertSecurityOption2.prototype, "oauth2c", void 0);
    return JobsProjectsJobsSearchForAlertSecurityOption2;
}(SpeakeasyBase));
export { JobsProjectsJobsSearchForAlertSecurityOption2 };
var JobsProjectsJobsSearchForAlertSecurity = /** @class */ (function (_super) {
    __extends(JobsProjectsJobsSearchForAlertSecurity, _super);
    function JobsProjectsJobsSearchForAlertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsJobsSearchForAlertSecurityOption1)
    ], JobsProjectsJobsSearchForAlertSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsJobsSearchForAlertSecurityOption2)
    ], JobsProjectsJobsSearchForAlertSecurity.prototype, "option2", void 0);
    return JobsProjectsJobsSearchForAlertSecurity;
}(SpeakeasyBase));
export { JobsProjectsJobsSearchForAlertSecurity };
var JobsProjectsJobsSearchForAlertRequest = /** @class */ (function (_super) {
    __extends(JobsProjectsJobsSearchForAlertRequest, _super);
    function JobsProjectsJobsSearchForAlertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsJobsSearchForAlertPathParams)
    ], JobsProjectsJobsSearchForAlertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsJobsSearchForAlertQueryParams)
    ], JobsProjectsJobsSearchForAlertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SearchJobsRequest)
    ], JobsProjectsJobsSearchForAlertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsJobsSearchForAlertSecurity)
    ], JobsProjectsJobsSearchForAlertRequest.prototype, "security", void 0);
    return JobsProjectsJobsSearchForAlertRequest;
}(SpeakeasyBase));
export { JobsProjectsJobsSearchForAlertRequest };
var JobsProjectsJobsSearchForAlertResponse = /** @class */ (function (_super) {
    __extends(JobsProjectsJobsSearchForAlertResponse, _super);
    function JobsProjectsJobsSearchForAlertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], JobsProjectsJobsSearchForAlertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SearchJobsResponse)
    ], JobsProjectsJobsSearchForAlertResponse.prototype, "searchJobsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], JobsProjectsJobsSearchForAlertResponse.prototype, "statusCode", void 0);
    return JobsProjectsJobsSearchForAlertResponse;
}(SpeakeasyBase));
export { JobsProjectsJobsSearchForAlertResponse };
