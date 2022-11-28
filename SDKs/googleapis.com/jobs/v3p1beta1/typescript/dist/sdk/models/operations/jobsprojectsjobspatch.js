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
var JobsProjectsJobsPatchPathParams = /** @class */ (function (_super) {
    __extends(JobsProjectsJobsPatchPathParams, _super);
    function JobsProjectsJobsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsPatchPathParams.prototype, "name", void 0);
    return JobsProjectsJobsPatchPathParams;
}(SpeakeasyBase));
export { JobsProjectsJobsPatchPathParams };
var JobsProjectsJobsPatchQueryParams = /** @class */ (function (_super) {
    __extends(JobsProjectsJobsPatchQueryParams, _super);
    function JobsProjectsJobsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], JobsProjectsJobsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], JobsProjectsJobsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return JobsProjectsJobsPatchQueryParams;
}(SpeakeasyBase));
export { JobsProjectsJobsPatchQueryParams };
var JobsProjectsJobsPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(JobsProjectsJobsPatchSecurityOption1, _super);
    function JobsProjectsJobsPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsJobsPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsJobsPatchSecurityOption1.prototype, "oauth2c", void 0);
    return JobsProjectsJobsPatchSecurityOption1;
}(SpeakeasyBase));
export { JobsProjectsJobsPatchSecurityOption1 };
var JobsProjectsJobsPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(JobsProjectsJobsPatchSecurityOption2, _super);
    function JobsProjectsJobsPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsJobsPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsJobsPatchSecurityOption2.prototype, "oauth2c", void 0);
    return JobsProjectsJobsPatchSecurityOption2;
}(SpeakeasyBase));
export { JobsProjectsJobsPatchSecurityOption2 };
var JobsProjectsJobsPatchSecurity = /** @class */ (function (_super) {
    __extends(JobsProjectsJobsPatchSecurity, _super);
    function JobsProjectsJobsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsJobsPatchSecurityOption1)
    ], JobsProjectsJobsPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsJobsPatchSecurityOption2)
    ], JobsProjectsJobsPatchSecurity.prototype, "option2", void 0);
    return JobsProjectsJobsPatchSecurity;
}(SpeakeasyBase));
export { JobsProjectsJobsPatchSecurity };
var JobsProjectsJobsPatchRequest = /** @class */ (function (_super) {
    __extends(JobsProjectsJobsPatchRequest, _super);
    function JobsProjectsJobsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsJobsPatchPathParams)
    ], JobsProjectsJobsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsJobsPatchQueryParams)
    ], JobsProjectsJobsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateJobRequest)
    ], JobsProjectsJobsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsJobsPatchSecurity)
    ], JobsProjectsJobsPatchRequest.prototype, "security", void 0);
    return JobsProjectsJobsPatchRequest;
}(SpeakeasyBase));
export { JobsProjectsJobsPatchRequest };
var JobsProjectsJobsPatchResponse = /** @class */ (function (_super) {
    __extends(JobsProjectsJobsPatchResponse, _super);
    function JobsProjectsJobsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], JobsProjectsJobsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Job)
    ], JobsProjectsJobsPatchResponse.prototype, "job", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], JobsProjectsJobsPatchResponse.prototype, "statusCode", void 0);
    return JobsProjectsJobsPatchResponse;
}(SpeakeasyBase));
export { JobsProjectsJobsPatchResponse };
