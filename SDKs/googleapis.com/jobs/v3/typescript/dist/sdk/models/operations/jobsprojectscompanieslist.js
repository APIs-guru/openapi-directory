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
var JobsProjectsCompaniesListPathParams = /** @class */ (function (_super) {
    __extends(JobsProjectsCompaniesListPathParams, _super);
    function JobsProjectsCompaniesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], JobsProjectsCompaniesListPathParams.prototype, "parent", void 0);
    return JobsProjectsCompaniesListPathParams;
}(SpeakeasyBase));
export { JobsProjectsCompaniesListPathParams };
var JobsProjectsCompaniesListQueryParams = /** @class */ (function (_super) {
    __extends(JobsProjectsCompaniesListQueryParams, _super);
    function JobsProjectsCompaniesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], JobsProjectsCompaniesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], JobsProjectsCompaniesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], JobsProjectsCompaniesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], JobsProjectsCompaniesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], JobsProjectsCompaniesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], JobsProjectsCompaniesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], JobsProjectsCompaniesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], JobsProjectsCompaniesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], JobsProjectsCompaniesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], JobsProjectsCompaniesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], JobsProjectsCompaniesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requireOpenJobs" }),
        __metadata("design:type", Boolean)
    ], JobsProjectsCompaniesListQueryParams.prototype, "requireOpenJobs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], JobsProjectsCompaniesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], JobsProjectsCompaniesListQueryParams.prototype, "uploadProtocol", void 0);
    return JobsProjectsCompaniesListQueryParams;
}(SpeakeasyBase));
export { JobsProjectsCompaniesListQueryParams };
var JobsProjectsCompaniesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(JobsProjectsCompaniesListSecurityOption1, _super);
    function JobsProjectsCompaniesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsCompaniesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsCompaniesListSecurityOption1.prototype, "oauth2c", void 0);
    return JobsProjectsCompaniesListSecurityOption1;
}(SpeakeasyBase));
export { JobsProjectsCompaniesListSecurityOption1 };
var JobsProjectsCompaniesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(JobsProjectsCompaniesListSecurityOption2, _super);
    function JobsProjectsCompaniesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsCompaniesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsCompaniesListSecurityOption2.prototype, "oauth2c", void 0);
    return JobsProjectsCompaniesListSecurityOption2;
}(SpeakeasyBase));
export { JobsProjectsCompaniesListSecurityOption2 };
var JobsProjectsCompaniesListSecurity = /** @class */ (function (_super) {
    __extends(JobsProjectsCompaniesListSecurity, _super);
    function JobsProjectsCompaniesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsCompaniesListSecurityOption1)
    ], JobsProjectsCompaniesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsCompaniesListSecurityOption2)
    ], JobsProjectsCompaniesListSecurity.prototype, "option2", void 0);
    return JobsProjectsCompaniesListSecurity;
}(SpeakeasyBase));
export { JobsProjectsCompaniesListSecurity };
var JobsProjectsCompaniesListRequest = /** @class */ (function (_super) {
    __extends(JobsProjectsCompaniesListRequest, _super);
    function JobsProjectsCompaniesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsCompaniesListPathParams)
    ], JobsProjectsCompaniesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsCompaniesListQueryParams)
    ], JobsProjectsCompaniesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsCompaniesListSecurity)
    ], JobsProjectsCompaniesListRequest.prototype, "security", void 0);
    return JobsProjectsCompaniesListRequest;
}(SpeakeasyBase));
export { JobsProjectsCompaniesListRequest };
var JobsProjectsCompaniesListResponse = /** @class */ (function (_super) {
    __extends(JobsProjectsCompaniesListResponse, _super);
    function JobsProjectsCompaniesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], JobsProjectsCompaniesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListCompaniesResponse)
    ], JobsProjectsCompaniesListResponse.prototype, "listCompaniesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], JobsProjectsCompaniesListResponse.prototype, "statusCode", void 0);
    return JobsProjectsCompaniesListResponse;
}(SpeakeasyBase));
export { JobsProjectsCompaniesListResponse };
