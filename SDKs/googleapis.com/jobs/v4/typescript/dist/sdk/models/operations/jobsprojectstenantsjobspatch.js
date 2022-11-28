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
var JobsProjectsTenantsJobsPatchPathParams = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsPatchPathParams, _super);
    function JobsProjectsTenantsJobsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsPatchPathParams.prototype, "name", void 0);
    return JobsProjectsTenantsJobsPatchPathParams;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsPatchPathParams };
var JobsProjectsTenantsJobsPatchQueryParams = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsPatchQueryParams, _super);
    function JobsProjectsTenantsJobsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], JobsProjectsTenantsJobsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return JobsProjectsTenantsJobsPatchQueryParams;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsPatchQueryParams };
var JobsProjectsTenantsJobsPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsPatchSecurityOption1, _super);
    function JobsProjectsTenantsJobsPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsTenantsJobsPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsTenantsJobsPatchSecurityOption1.prototype, "oauth2c", void 0);
    return JobsProjectsTenantsJobsPatchSecurityOption1;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsPatchSecurityOption1 };
var JobsProjectsTenantsJobsPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsPatchSecurityOption2, _super);
    function JobsProjectsTenantsJobsPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsTenantsJobsPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsTenantsJobsPatchSecurityOption2.prototype, "oauth2c", void 0);
    return JobsProjectsTenantsJobsPatchSecurityOption2;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsPatchSecurityOption2 };
var JobsProjectsTenantsJobsPatchSecurity = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsPatchSecurity, _super);
    function JobsProjectsTenantsJobsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsTenantsJobsPatchSecurityOption1)
    ], JobsProjectsTenantsJobsPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsTenantsJobsPatchSecurityOption2)
    ], JobsProjectsTenantsJobsPatchSecurity.prototype, "option2", void 0);
    return JobsProjectsTenantsJobsPatchSecurity;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsPatchSecurity };
var JobsProjectsTenantsJobsPatchRequest = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsPatchRequest, _super);
    function JobsProjectsTenantsJobsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsTenantsJobsPatchPathParams)
    ], JobsProjectsTenantsJobsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsTenantsJobsPatchQueryParams)
    ], JobsProjectsTenantsJobsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.JobInput)
    ], JobsProjectsTenantsJobsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsTenantsJobsPatchSecurity)
    ], JobsProjectsTenantsJobsPatchRequest.prototype, "security", void 0);
    return JobsProjectsTenantsJobsPatchRequest;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsPatchRequest };
var JobsProjectsTenantsJobsPatchResponse = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsJobsPatchResponse, _super);
    function JobsProjectsTenantsJobsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], JobsProjectsTenantsJobsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Job)
    ], JobsProjectsTenantsJobsPatchResponse.prototype, "job", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], JobsProjectsTenantsJobsPatchResponse.prototype, "statusCode", void 0);
    return JobsProjectsTenantsJobsPatchResponse;
}(SpeakeasyBase));
export { JobsProjectsTenantsJobsPatchResponse };
