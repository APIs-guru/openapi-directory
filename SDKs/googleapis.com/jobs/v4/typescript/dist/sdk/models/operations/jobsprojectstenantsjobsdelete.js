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
var JobsProjectsTenantsJobsDeletePathParams = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsDeletePathParams, _super);
    function JobsProjectsTenantsJobsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsDeletePathParams.prototype, "name", void 0);
    return JobsProjectsTenantsJobsDeletePathParams;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsDeletePathParams };
var JobsProjectsTenantsJobsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsDeleteQueryParams, _super);
    function JobsProjectsTenantsJobsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], JobsProjectsTenantsJobsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return JobsProjectsTenantsJobsDeleteQueryParams;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsDeleteQueryParams };
var JobsProjectsTenantsJobsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsDeleteSecurityOption1, _super);
    function JobsProjectsTenantsJobsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsTenantsJobsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsTenantsJobsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return JobsProjectsTenantsJobsDeleteSecurityOption1;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsDeleteSecurityOption1 };
var JobsProjectsTenantsJobsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsDeleteSecurityOption2, _super);
    function JobsProjectsTenantsJobsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsTenantsJobsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsTenantsJobsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return JobsProjectsTenantsJobsDeleteSecurityOption2;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsDeleteSecurityOption2 };
var JobsProjectsTenantsJobsDeleteSecurity = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsDeleteSecurity, _super);
    function JobsProjectsTenantsJobsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsTenantsJobsDeleteSecurityOption1)
    ], JobsProjectsTenantsJobsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsTenantsJobsDeleteSecurityOption2)
    ], JobsProjectsTenantsJobsDeleteSecurity.prototype, "option2", void 0);
    return JobsProjectsTenantsJobsDeleteSecurity;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsDeleteSecurity };
var JobsProjectsTenantsJobsDeleteRequest = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsDeleteRequest, _super);
    function JobsProjectsTenantsJobsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsTenantsJobsDeletePathParams)
    ], JobsProjectsTenantsJobsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsTenantsJobsDeleteQueryParams)
    ], JobsProjectsTenantsJobsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsTenantsJobsDeleteSecurity)
    ], JobsProjectsTenantsJobsDeleteRequest.prototype, "security", void 0);
    return JobsProjectsTenantsJobsDeleteRequest;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsDeleteRequest };
var JobsProjectsTenantsJobsDeleteResponse = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsDeleteResponse, _super);
    function JobsProjectsTenantsJobsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], JobsProjectsTenantsJobsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], JobsProjectsTenantsJobsDeleteResponse.prototype, "statusCode", void 0);
    return JobsProjectsTenantsJobsDeleteResponse;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsDeleteResponse };
