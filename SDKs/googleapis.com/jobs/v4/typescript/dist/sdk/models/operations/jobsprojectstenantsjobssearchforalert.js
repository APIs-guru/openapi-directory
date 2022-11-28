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
var JobsProjectsTenantsJobsSearchForAlertPathParams = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsSearchForAlertPathParams, _super);
    function JobsProjectsTenantsJobsSearchForAlertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsSearchForAlertPathParams.prototype, "parent", void 0);
    return JobsProjectsTenantsJobsSearchForAlertPathParams;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsSearchForAlertPathParams };
var JobsProjectsTenantsJobsSearchForAlertQueryParams = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsSearchForAlertQueryParams, _super);
    function JobsProjectsTenantsJobsSearchForAlertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsSearchForAlertQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsSearchForAlertQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsSearchForAlertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsSearchForAlertQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsSearchForAlertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsSearchForAlertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsSearchForAlertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], JobsProjectsTenantsJobsSearchForAlertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsSearchForAlertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsSearchForAlertQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsSearchForAlertQueryParams.prototype, "uploadProtocol", void 0);
    return JobsProjectsTenantsJobsSearchForAlertQueryParams;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsSearchForAlertQueryParams };
var JobsProjectsTenantsJobsSearchForAlertSecurityOption1 = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsSearchForAlertSecurityOption1, _super);
    function JobsProjectsTenantsJobsSearchForAlertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsTenantsJobsSearchForAlertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsTenantsJobsSearchForAlertSecurityOption1.prototype, "oauth2c", void 0);
    return JobsProjectsTenantsJobsSearchForAlertSecurityOption1;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsSearchForAlertSecurityOption1 };
var JobsProjectsTenantsJobsSearchForAlertSecurityOption2 = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsSearchForAlertSecurityOption2, _super);
    function JobsProjectsTenantsJobsSearchForAlertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsTenantsJobsSearchForAlertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsTenantsJobsSearchForAlertSecurityOption2.prototype, "oauth2c", void 0);
    return JobsProjectsTenantsJobsSearchForAlertSecurityOption2;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsSearchForAlertSecurityOption2 };
var JobsProjectsTenantsJobsSearchForAlertSecurity = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsSearchForAlertSecurity, _super);
    function JobsProjectsTenantsJobsSearchForAlertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsTenantsJobsSearchForAlertSecurityOption1)
    ], JobsProjectsTenantsJobsSearchForAlertSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsTenantsJobsSearchForAlertSecurityOption2)
    ], JobsProjectsTenantsJobsSearchForAlertSecurity.prototype, "option2", void 0);
    return JobsProjectsTenantsJobsSearchForAlertSecurity;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsSearchForAlertSecurity };
var JobsProjectsTenantsJobsSearchForAlertRequest = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsSearchForAlertRequest, _super);
    function JobsProjectsTenantsJobsSearchForAlertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsTenantsJobsSearchForAlertPathParams)
    ], JobsProjectsTenantsJobsSearchForAlertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsTenantsJobsSearchForAlertQueryParams)
    ], JobsProjectsTenantsJobsSearchForAlertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SearchJobsRequest)
    ], JobsProjectsTenantsJobsSearchForAlertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsTenantsJobsSearchForAlertSecurity)
    ], JobsProjectsTenantsJobsSearchForAlertRequest.prototype, "security", void 0);
    return JobsProjectsTenantsJobsSearchForAlertRequest;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsSearchForAlertRequest };
var JobsProjectsTenantsJobsSearchForAlertResponse = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsSearchForAlertResponse, _super);
    function JobsProjectsTenantsJobsSearchForAlertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsSearchForAlertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SearchJobsResponse)
    ], JobsProjectsTenantsJobsSearchForAlertResponse.prototype, "searchJobsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], JobsProjectsTenantsJobsSearchForAlertResponse.prototype, "statusCode", void 0);
    return JobsProjectsTenantsJobsSearchForAlertResponse;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsSearchForAlertResponse };
