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
var JobsProjectsTenantsJobsBatchDeletePathParams = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsBatchDeletePathParams, _super);
    function JobsProjectsTenantsJobsBatchDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsBatchDeletePathParams.prototype, "parent", void 0);
    return JobsProjectsTenantsJobsBatchDeletePathParams;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsBatchDeletePathParams };
var JobsProjectsTenantsJobsBatchDeleteQueryParams = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsBatchDeleteQueryParams, _super);
    function JobsProjectsTenantsJobsBatchDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsBatchDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsBatchDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsBatchDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsBatchDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsBatchDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsBatchDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsBatchDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], JobsProjectsTenantsJobsBatchDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsBatchDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsBatchDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsBatchDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return JobsProjectsTenantsJobsBatchDeleteQueryParams;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsBatchDeleteQueryParams };
var JobsProjectsTenantsJobsBatchDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsBatchDeleteSecurityOption1, _super);
    function JobsProjectsTenantsJobsBatchDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsTenantsJobsBatchDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsTenantsJobsBatchDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return JobsProjectsTenantsJobsBatchDeleteSecurityOption1;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsBatchDeleteSecurityOption1 };
var JobsProjectsTenantsJobsBatchDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsBatchDeleteSecurityOption2, _super);
    function JobsProjectsTenantsJobsBatchDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsTenantsJobsBatchDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsTenantsJobsBatchDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return JobsProjectsTenantsJobsBatchDeleteSecurityOption2;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsBatchDeleteSecurityOption2 };
var JobsProjectsTenantsJobsBatchDeleteSecurity = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsBatchDeleteSecurity, _super);
    function JobsProjectsTenantsJobsBatchDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsTenantsJobsBatchDeleteSecurityOption1)
    ], JobsProjectsTenantsJobsBatchDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsTenantsJobsBatchDeleteSecurityOption2)
    ], JobsProjectsTenantsJobsBatchDeleteSecurity.prototype, "option2", void 0);
    return JobsProjectsTenantsJobsBatchDeleteSecurity;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsBatchDeleteSecurity };
var JobsProjectsTenantsJobsBatchDeleteRequest = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsBatchDeleteRequest, _super);
    function JobsProjectsTenantsJobsBatchDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsTenantsJobsBatchDeletePathParams)
    ], JobsProjectsTenantsJobsBatchDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsTenantsJobsBatchDeleteQueryParams)
    ], JobsProjectsTenantsJobsBatchDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchDeleteJobsRequest)
    ], JobsProjectsTenantsJobsBatchDeleteRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsTenantsJobsBatchDeleteSecurity)
    ], JobsProjectsTenantsJobsBatchDeleteRequest.prototype, "security", void 0);
    return JobsProjectsTenantsJobsBatchDeleteRequest;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsBatchDeleteRequest };
var JobsProjectsTenantsJobsBatchDeleteResponse = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsBatchDeleteResponse, _super);
    function JobsProjectsTenantsJobsBatchDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsBatchDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], JobsProjectsTenantsJobsBatchDeleteResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], JobsProjectsTenantsJobsBatchDeleteResponse.prototype, "statusCode", void 0);
    return JobsProjectsTenantsJobsBatchDeleteResponse;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsBatchDeleteResponse };
