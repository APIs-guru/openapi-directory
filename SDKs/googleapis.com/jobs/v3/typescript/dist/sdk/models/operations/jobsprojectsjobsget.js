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
var JobsProjectsJobsGetPathParams = /** @class */ (function (_super) {
    __extends(JobsProjectsJobsGetPathParams, _super);
    function JobsProjectsJobsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsGetPathParams.prototype, "name", void 0);
    return JobsProjectsJobsGetPathParams;
}(SpeakeasyBase));
export { JobsProjectsJobsGetPathParams };
var JobsProjectsJobsGetQueryParams = /** @class */ (function (_super) {
    __extends(JobsProjectsJobsGetQueryParams, _super);
    function JobsProjectsJobsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], JobsProjectsJobsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsGetQueryParams.prototype, "uploadProtocol", void 0);
    return JobsProjectsJobsGetQueryParams;
}(SpeakeasyBase));
export { JobsProjectsJobsGetQueryParams };
var JobsProjectsJobsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(JobsProjectsJobsGetSecurityOption1, _super);
    function JobsProjectsJobsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsJobsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsJobsGetSecurityOption1.prototype, "oauth2c", void 0);
    return JobsProjectsJobsGetSecurityOption1;
}(SpeakeasyBase));
export { JobsProjectsJobsGetSecurityOption1 };
var JobsProjectsJobsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(JobsProjectsJobsGetSecurityOption2, _super);
    function JobsProjectsJobsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsJobsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsJobsGetSecurityOption2.prototype, "oauth2c", void 0);
    return JobsProjectsJobsGetSecurityOption2;
}(SpeakeasyBase));
export { JobsProjectsJobsGetSecurityOption2 };
var JobsProjectsJobsGetSecurity = /** @class */ (function (_super) {
    __extends(JobsProjectsJobsGetSecurity, _super);
    function JobsProjectsJobsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsJobsGetSecurityOption1)
    ], JobsProjectsJobsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsJobsGetSecurityOption2)
    ], JobsProjectsJobsGetSecurity.prototype, "option2", void 0);
    return JobsProjectsJobsGetSecurity;
}(SpeakeasyBase));
export { JobsProjectsJobsGetSecurity };
var JobsProjectsJobsGetRequest = /** @class */ (function (_super) {
    __extends(JobsProjectsJobsGetRequest, _super);
    function JobsProjectsJobsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsJobsGetPathParams)
    ], JobsProjectsJobsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsJobsGetQueryParams)
    ], JobsProjectsJobsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsJobsGetSecurity)
    ], JobsProjectsJobsGetRequest.prototype, "security", void 0);
    return JobsProjectsJobsGetRequest;
}(SpeakeasyBase));
export { JobsProjectsJobsGetRequest };
var JobsProjectsJobsGetResponse = /** @class */ (function (_super) {
    __extends(JobsProjectsJobsGetResponse, _super);
    function JobsProjectsJobsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], JobsProjectsJobsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Job)
    ], JobsProjectsJobsGetResponse.prototype, "job", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], JobsProjectsJobsGetResponse.prototype, "statusCode", void 0);
    return JobsProjectsJobsGetResponse;
}(SpeakeasyBase));
export { JobsProjectsJobsGetResponse };
