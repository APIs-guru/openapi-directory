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
var JobsProjectsTenantsJobsBatchCreatePathParams = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsBatchCreatePathParams, _super);
    function JobsProjectsTenantsJobsBatchCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsBatchCreatePathParams.prototype, "parent", void 0);
    return JobsProjectsTenantsJobsBatchCreatePathParams;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsBatchCreatePathParams };
var JobsProjectsTenantsJobsBatchCreateQueryParams = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsBatchCreateQueryParams, _super);
    function JobsProjectsTenantsJobsBatchCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsBatchCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsBatchCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsBatchCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsBatchCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsBatchCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsBatchCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsBatchCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], JobsProjectsTenantsJobsBatchCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsBatchCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsBatchCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsBatchCreateQueryParams.prototype, "uploadProtocol", void 0);
    return JobsProjectsTenantsJobsBatchCreateQueryParams;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsBatchCreateQueryParams };
var JobsProjectsTenantsJobsBatchCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsBatchCreateSecurityOption1, _super);
    function JobsProjectsTenantsJobsBatchCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsTenantsJobsBatchCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsTenantsJobsBatchCreateSecurityOption1.prototype, "oauth2c", void 0);
    return JobsProjectsTenantsJobsBatchCreateSecurityOption1;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsBatchCreateSecurityOption1 };
var JobsProjectsTenantsJobsBatchCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsBatchCreateSecurityOption2, _super);
    function JobsProjectsTenantsJobsBatchCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsTenantsJobsBatchCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsTenantsJobsBatchCreateSecurityOption2.prototype, "oauth2c", void 0);
    return JobsProjectsTenantsJobsBatchCreateSecurityOption2;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsBatchCreateSecurityOption2 };
var JobsProjectsTenantsJobsBatchCreateSecurity = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsBatchCreateSecurity, _super);
    function JobsProjectsTenantsJobsBatchCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsTenantsJobsBatchCreateSecurityOption1)
    ], JobsProjectsTenantsJobsBatchCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsTenantsJobsBatchCreateSecurityOption2)
    ], JobsProjectsTenantsJobsBatchCreateSecurity.prototype, "option2", void 0);
    return JobsProjectsTenantsJobsBatchCreateSecurity;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsBatchCreateSecurity };
var JobsProjectsTenantsJobsBatchCreateRequest = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsBatchCreateRequest, _super);
    function JobsProjectsTenantsJobsBatchCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsTenantsJobsBatchCreatePathParams)
    ], JobsProjectsTenantsJobsBatchCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsTenantsJobsBatchCreateQueryParams)
    ], JobsProjectsTenantsJobsBatchCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchCreateJobsRequestInput)
    ], JobsProjectsTenantsJobsBatchCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsTenantsJobsBatchCreateSecurity)
    ], JobsProjectsTenantsJobsBatchCreateRequest.prototype, "security", void 0);
    return JobsProjectsTenantsJobsBatchCreateRequest;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsBatchCreateRequest };
var JobsProjectsTenantsJobsBatchCreateResponse = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsBatchCreateResponse, _super);
    function JobsProjectsTenantsJobsBatchCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsBatchCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], JobsProjectsTenantsJobsBatchCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], JobsProjectsTenantsJobsBatchCreateResponse.prototype, "statusCode", void 0);
    return JobsProjectsTenantsJobsBatchCreateResponse;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsBatchCreateResponse };
