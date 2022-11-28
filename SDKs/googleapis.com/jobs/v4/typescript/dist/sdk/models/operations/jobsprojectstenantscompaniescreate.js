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
var JobsProjectsTenantsCompaniesCreatePathParams = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsCompaniesCreatePathParams, _super);
    function JobsProjectsTenantsCompaniesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsCompaniesCreatePathParams.prototype, "parent", void 0);
    return JobsProjectsTenantsCompaniesCreatePathParams;
}(SpeakeasyBase));
export { JobsProjectsTenantsCompaniesCreatePathParams };
var JobsProjectsTenantsCompaniesCreateQueryParams = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsCompaniesCreateQueryParams, _super);
    function JobsProjectsTenantsCompaniesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsCompaniesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsCompaniesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsCompaniesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsCompaniesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsCompaniesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsCompaniesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsCompaniesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], JobsProjectsTenantsCompaniesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsCompaniesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsCompaniesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsCompaniesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return JobsProjectsTenantsCompaniesCreateQueryParams;
}(SpeakeasyBase));
export { JobsProjectsTenantsCompaniesCreateQueryParams };
var JobsProjectsTenantsCompaniesCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsCompaniesCreateSecurityOption1, _super);
    function JobsProjectsTenantsCompaniesCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsTenantsCompaniesCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsTenantsCompaniesCreateSecurityOption1.prototype, "oauth2c", void 0);
    return JobsProjectsTenantsCompaniesCreateSecurityOption1;
}(SpeakeasyBase));
export { JobsProjectsTenantsCompaniesCreateSecurityOption1 };
var JobsProjectsTenantsCompaniesCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsCompaniesCreateSecurityOption2, _super);
    function JobsProjectsTenantsCompaniesCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsTenantsCompaniesCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsTenantsCompaniesCreateSecurityOption2.prototype, "oauth2c", void 0);
    return JobsProjectsTenantsCompaniesCreateSecurityOption2;
}(SpeakeasyBase));
export { JobsProjectsTenantsCompaniesCreateSecurityOption2 };
var JobsProjectsTenantsCompaniesCreateSecurity = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsCompaniesCreateSecurity, _super);
    function JobsProjectsTenantsCompaniesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsTenantsCompaniesCreateSecurityOption1)
    ], JobsProjectsTenantsCompaniesCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsTenantsCompaniesCreateSecurityOption2)
    ], JobsProjectsTenantsCompaniesCreateSecurity.prototype, "option2", void 0);
    return JobsProjectsTenantsCompaniesCreateSecurity;
}(SpeakeasyBase));
export { JobsProjectsTenantsCompaniesCreateSecurity };
var JobsProjectsTenantsCompaniesCreateRequest = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsCompaniesCreateRequest, _super);
    function JobsProjectsTenantsCompaniesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsTenantsCompaniesCreatePathParams)
    ], JobsProjectsTenantsCompaniesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsTenantsCompaniesCreateQueryParams)
    ], JobsProjectsTenantsCompaniesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CompanyInput)
    ], JobsProjectsTenantsCompaniesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsTenantsCompaniesCreateSecurity)
    ], JobsProjectsTenantsCompaniesCreateRequest.prototype, "security", void 0);
    return JobsProjectsTenantsCompaniesCreateRequest;
}(SpeakeasyBase));
export { JobsProjectsTenantsCompaniesCreateRequest };
var JobsProjectsTenantsCompaniesCreateResponse = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsCompaniesCreateResponse, _super);
    function JobsProjectsTenantsCompaniesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Company)
    ], JobsProjectsTenantsCompaniesCreateResponse.prototype, "company", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], JobsProjectsTenantsCompaniesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], JobsProjectsTenantsCompaniesCreateResponse.prototype, "statusCode", void 0);
    return JobsProjectsTenantsCompaniesCreateResponse;
}(SpeakeasyBase));
export { JobsProjectsTenantsCompaniesCreateResponse };
