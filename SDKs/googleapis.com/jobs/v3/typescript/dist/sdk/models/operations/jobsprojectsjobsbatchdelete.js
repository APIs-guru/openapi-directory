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
var JobsProjectsJobsBatchDeletePathParams = /** @class */ (function (_super) {
    __extends(JobsProjectsJobsBatchDeletePathParams, _super);
    function JobsProjectsJobsBatchDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsBatchDeletePathParams.prototype, "parent", void 0);
    return JobsProjectsJobsBatchDeletePathParams;
}(SpeakeasyBase));
export { JobsProjectsJobsBatchDeletePathParams };
var JobsProjectsJobsBatchDeleteQueryParams = /** @class */ (function (_super) {
    __extends(JobsProjectsJobsBatchDeleteQueryParams, _super);
    function JobsProjectsJobsBatchDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsBatchDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsBatchDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsBatchDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsBatchDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsBatchDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsBatchDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsBatchDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], JobsProjectsJobsBatchDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsBatchDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsBatchDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsBatchDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return JobsProjectsJobsBatchDeleteQueryParams;
}(SpeakeasyBase));
export { JobsProjectsJobsBatchDeleteQueryParams };
var JobsProjectsJobsBatchDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(JobsProjectsJobsBatchDeleteSecurityOption1, _super);
    function JobsProjectsJobsBatchDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsJobsBatchDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsJobsBatchDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return JobsProjectsJobsBatchDeleteSecurityOption1;
}(SpeakeasyBase));
export { JobsProjectsJobsBatchDeleteSecurityOption1 };
var JobsProjectsJobsBatchDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(JobsProjectsJobsBatchDeleteSecurityOption2, _super);
    function JobsProjectsJobsBatchDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsJobsBatchDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsJobsBatchDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return JobsProjectsJobsBatchDeleteSecurityOption2;
}(SpeakeasyBase));
export { JobsProjectsJobsBatchDeleteSecurityOption2 };
var JobsProjectsJobsBatchDeleteSecurity = /** @class */ (function (_super) {
    __extends(JobsProjectsJobsBatchDeleteSecurity, _super);
    function JobsProjectsJobsBatchDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsJobsBatchDeleteSecurityOption1)
    ], JobsProjectsJobsBatchDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsJobsBatchDeleteSecurityOption2)
    ], JobsProjectsJobsBatchDeleteSecurity.prototype, "option2", void 0);
    return JobsProjectsJobsBatchDeleteSecurity;
}(SpeakeasyBase));
export { JobsProjectsJobsBatchDeleteSecurity };
var JobsProjectsJobsBatchDeleteRequest = /** @class */ (function (_super) {
    __extends(JobsProjectsJobsBatchDeleteRequest, _super);
    function JobsProjectsJobsBatchDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsJobsBatchDeletePathParams)
    ], JobsProjectsJobsBatchDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsJobsBatchDeleteQueryParams)
    ], JobsProjectsJobsBatchDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchDeleteJobsRequest)
    ], JobsProjectsJobsBatchDeleteRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsJobsBatchDeleteSecurity)
    ], JobsProjectsJobsBatchDeleteRequest.prototype, "security", void 0);
    return JobsProjectsJobsBatchDeleteRequest;
}(SpeakeasyBase));
export { JobsProjectsJobsBatchDeleteRequest };
var JobsProjectsJobsBatchDeleteResponse = /** @class */ (function (_super) {
    __extends(JobsProjectsJobsBatchDeleteResponse, _super);
    function JobsProjectsJobsBatchDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], JobsProjectsJobsBatchDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], JobsProjectsJobsBatchDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], JobsProjectsJobsBatchDeleteResponse.prototype, "statusCode", void 0);
    return JobsProjectsJobsBatchDeleteResponse;
}(SpeakeasyBase));
export { JobsProjectsJobsBatchDeleteResponse };
