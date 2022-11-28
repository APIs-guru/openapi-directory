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
var JobsProjectsTenantsCompaniesListPathParams = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsCompaniesListPathParams, _super);
    function JobsProjectsTenantsCompaniesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsCompaniesListPathParams.prototype, "parent", void 0);
    return JobsProjectsTenantsCompaniesListPathParams;
}(SpeakeasyBase));
export { JobsProjectsTenantsCompaniesListPathParams };
var JobsProjectsTenantsCompaniesListQueryParams = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsCompaniesListQueryParams, _super);
    function JobsProjectsTenantsCompaniesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsCompaniesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsCompaniesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsCompaniesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsCompaniesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsCompaniesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsCompaniesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsCompaniesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], JobsProjectsTenantsCompaniesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsCompaniesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], JobsProjectsTenantsCompaniesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsCompaniesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requireOpenJobs" }),
        __metadata("design:type", Boolean)
    ], JobsProjectsTenantsCompaniesListQueryParams.prototype, "requireOpenJobs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsCompaniesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsCompaniesListQueryParams.prototype, "uploadProtocol", void 0);
    return JobsProjectsTenantsCompaniesListQueryParams;
}(SpeakeasyBase));
export { JobsProjectsTenantsCompaniesListQueryParams };
var JobsProjectsTenantsCompaniesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsCompaniesListSecurityOption1, _super);
    function JobsProjectsTenantsCompaniesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsTenantsCompaniesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsTenantsCompaniesListSecurityOption1.prototype, "oauth2c", void 0);
    return JobsProjectsTenantsCompaniesListSecurityOption1;
}(SpeakeasyBase));
export { JobsProjectsTenantsCompaniesListSecurityOption1 };
var JobsProjectsTenantsCompaniesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsCompaniesListSecurityOption2, _super);
    function JobsProjectsTenantsCompaniesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsTenantsCompaniesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsTenantsCompaniesListSecurityOption2.prototype, "oauth2c", void 0);
    return JobsProjectsTenantsCompaniesListSecurityOption2;
}(SpeakeasyBase));
export { JobsProjectsTenantsCompaniesListSecurityOption2 };
var JobsProjectsTenantsCompaniesListSecurity = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsCompaniesListSecurity, _super);
    function JobsProjectsTenantsCompaniesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsTenantsCompaniesListSecurityOption1)
    ], JobsProjectsTenantsCompaniesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsTenantsCompaniesListSecurityOption2)
    ], JobsProjectsTenantsCompaniesListSecurity.prototype, "option2", void 0);
    return JobsProjectsTenantsCompaniesListSecurity;
}(SpeakeasyBase));
export { JobsProjectsTenantsCompaniesListSecurity };
var JobsProjectsTenantsCompaniesListRequest = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsCompaniesListRequest, _super);
    function JobsProjectsTenantsCompaniesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsTenantsCompaniesListPathParams)
    ], JobsProjectsTenantsCompaniesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsTenantsCompaniesListQueryParams)
    ], JobsProjectsTenantsCompaniesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsTenantsCompaniesListSecurity)
    ], JobsProjectsTenantsCompaniesListRequest.prototype, "security", void 0);
    return JobsProjectsTenantsCompaniesListRequest;
}(SpeakeasyBase));
export { JobsProjectsTenantsCompaniesListRequest };
var JobsProjectsTenantsCompaniesListResponse = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsCompaniesListResponse, _super);
    function JobsProjectsTenantsCompaniesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], JobsProjectsTenantsCompaniesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListCompaniesResponse)
    ], JobsProjectsTenantsCompaniesListResponse.prototype, "listCompaniesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], JobsProjectsTenantsCompaniesListResponse.prototype, "statusCode", void 0);
    return JobsProjectsTenantsCompaniesListResponse;
}(SpeakeasyBase));
export { JobsProjectsTenantsCompaniesListResponse };
