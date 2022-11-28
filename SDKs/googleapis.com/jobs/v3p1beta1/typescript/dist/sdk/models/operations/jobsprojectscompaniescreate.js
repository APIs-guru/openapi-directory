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
var JobsProjectsCompaniesCreatePathParams = /** @class */ (function (_super) {
    __extends(JobsProjectsCompaniesCreatePathParams, _super);
    function JobsProjectsCompaniesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], JobsProjectsCompaniesCreatePathParams.prototype, "parent", void 0);
    return JobsProjectsCompaniesCreatePathParams;
}(SpeakeasyBase));
export { JobsProjectsCompaniesCreatePathParams };
var JobsProjectsCompaniesCreateQueryParams = /** @class */ (function (_super) {
    __extends(JobsProjectsCompaniesCreateQueryParams, _super);
    function JobsProjectsCompaniesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], JobsProjectsCompaniesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], JobsProjectsCompaniesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], JobsProjectsCompaniesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], JobsProjectsCompaniesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], JobsProjectsCompaniesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], JobsProjectsCompaniesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], JobsProjectsCompaniesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], JobsProjectsCompaniesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], JobsProjectsCompaniesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], JobsProjectsCompaniesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], JobsProjectsCompaniesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return JobsProjectsCompaniesCreateQueryParams;
}(SpeakeasyBase));
export { JobsProjectsCompaniesCreateQueryParams };
var JobsProjectsCompaniesCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(JobsProjectsCompaniesCreateSecurityOption1, _super);
    function JobsProjectsCompaniesCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsCompaniesCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsCompaniesCreateSecurityOption1.prototype, "oauth2c", void 0);
    return JobsProjectsCompaniesCreateSecurityOption1;
}(SpeakeasyBase));
export { JobsProjectsCompaniesCreateSecurityOption1 };
var JobsProjectsCompaniesCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(JobsProjectsCompaniesCreateSecurityOption2, _super);
    function JobsProjectsCompaniesCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsCompaniesCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsCompaniesCreateSecurityOption2.prototype, "oauth2c", void 0);
    return JobsProjectsCompaniesCreateSecurityOption2;
}(SpeakeasyBase));
export { JobsProjectsCompaniesCreateSecurityOption2 };
var JobsProjectsCompaniesCreateSecurity = /** @class */ (function (_super) {
    __extends(JobsProjectsCompaniesCreateSecurity, _super);
    function JobsProjectsCompaniesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsCompaniesCreateSecurityOption1)
    ], JobsProjectsCompaniesCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsCompaniesCreateSecurityOption2)
    ], JobsProjectsCompaniesCreateSecurity.prototype, "option2", void 0);
    return JobsProjectsCompaniesCreateSecurity;
}(SpeakeasyBase));
export { JobsProjectsCompaniesCreateSecurity };
var JobsProjectsCompaniesCreateRequest = /** @class */ (function (_super) {
    __extends(JobsProjectsCompaniesCreateRequest, _super);
    function JobsProjectsCompaniesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsCompaniesCreatePathParams)
    ], JobsProjectsCompaniesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsCompaniesCreateQueryParams)
    ], JobsProjectsCompaniesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateCompanyRequest)
    ], JobsProjectsCompaniesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsCompaniesCreateSecurity)
    ], JobsProjectsCompaniesCreateRequest.prototype, "security", void 0);
    return JobsProjectsCompaniesCreateRequest;
}(SpeakeasyBase));
export { JobsProjectsCompaniesCreateRequest };
var JobsProjectsCompaniesCreateResponse = /** @class */ (function (_super) {
    __extends(JobsProjectsCompaniesCreateResponse, _super);
    function JobsProjectsCompaniesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Company)
    ], JobsProjectsCompaniesCreateResponse.prototype, "company", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], JobsProjectsCompaniesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], JobsProjectsCompaniesCreateResponse.prototype, "statusCode", void 0);
    return JobsProjectsCompaniesCreateResponse;
}(SpeakeasyBase));
export { JobsProjectsCompaniesCreateResponse };
