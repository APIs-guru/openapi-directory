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
var JobsProjectsTenantsJobsCreatePathParams = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsCreatePathParams, _super);
    function JobsProjectsTenantsJobsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsCreatePathParams.prototype, "parent", void 0);
    return JobsProjectsTenantsJobsCreatePathParams;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsCreatePathParams };
var JobsProjectsTenantsJobsCreateQueryParams = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsCreateQueryParams, _super);
    function JobsProjectsTenantsJobsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], JobsProjectsTenantsJobsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return JobsProjectsTenantsJobsCreateQueryParams;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsCreateQueryParams };
var JobsProjectsTenantsJobsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsCreateSecurityOption1, _super);
    function JobsProjectsTenantsJobsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsTenantsJobsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsTenantsJobsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return JobsProjectsTenantsJobsCreateSecurityOption1;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsCreateSecurityOption1 };
var JobsProjectsTenantsJobsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsCreateSecurityOption2, _super);
    function JobsProjectsTenantsJobsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsTenantsJobsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsTenantsJobsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return JobsProjectsTenantsJobsCreateSecurityOption2;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsCreateSecurityOption2 };
var JobsProjectsTenantsJobsCreateSecurity = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsCreateSecurity, _super);
    function JobsProjectsTenantsJobsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsTenantsJobsCreateSecurityOption1)
    ], JobsProjectsTenantsJobsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsTenantsJobsCreateSecurityOption2)
    ], JobsProjectsTenantsJobsCreateSecurity.prototype, "option2", void 0);
    return JobsProjectsTenantsJobsCreateSecurity;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsCreateSecurity };
var JobsProjectsTenantsJobsCreateRequest = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsCreateRequest, _super);
    function JobsProjectsTenantsJobsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsTenantsJobsCreatePathParams)
    ], JobsProjectsTenantsJobsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsTenantsJobsCreateQueryParams)
    ], JobsProjectsTenantsJobsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.JobInput)
    ], JobsProjectsTenantsJobsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsTenantsJobsCreateSecurity)
    ], JobsProjectsTenantsJobsCreateRequest.prototype, "security", void 0);
    return JobsProjectsTenantsJobsCreateRequest;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsCreateRequest };
var JobsProjectsTenantsJobsCreateResponse = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsCreateResponse, _super);
    function JobsProjectsTenantsJobsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Job)
    ], JobsProjectsTenantsJobsCreateResponse.prototype, "job", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], JobsProjectsTenantsJobsCreateResponse.prototype, "statusCode", void 0);
    return JobsProjectsTenantsJobsCreateResponse;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsCreateResponse };
