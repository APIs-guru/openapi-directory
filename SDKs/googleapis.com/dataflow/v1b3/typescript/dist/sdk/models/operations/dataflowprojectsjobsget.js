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
var DataflowProjectsJobsGetPathParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsGetPathParams, _super);
    function DataflowProjectsJobsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsGetPathParams.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsGetPathParams.prototype, "projectId", void 0);
    return DataflowProjectsJobsGetPathParams;
}(SpeakeasyBase));
export { DataflowProjectsJobsGetPathParams };
export var DataflowProjectsJobsGetViewEnum;
(function (DataflowProjectsJobsGetViewEnum) {
    DataflowProjectsJobsGetViewEnum["JobViewUnknown"] = "JOB_VIEW_UNKNOWN";
    DataflowProjectsJobsGetViewEnum["JobViewSummary"] = "JOB_VIEW_SUMMARY";
    DataflowProjectsJobsGetViewEnum["JobViewAll"] = "JOB_VIEW_ALL";
    DataflowProjectsJobsGetViewEnum["JobViewDescription"] = "JOB_VIEW_DESCRIPTION";
})(DataflowProjectsJobsGetViewEnum || (DataflowProjectsJobsGetViewEnum = {}));
var DataflowProjectsJobsGetQueryParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsGetQueryParams, _super);
    function DataflowProjectsJobsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsGetQueryParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsJobsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsGetQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsGetQueryParams.prototype, "view", void 0);
    return DataflowProjectsJobsGetQueryParams;
}(SpeakeasyBase));
export { DataflowProjectsJobsGetQueryParams };
var DataflowProjectsJobsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsGetSecurityOption1, _super);
    function DataflowProjectsJobsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsGetSecurityOption1.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsGetSecurityOption1;
}(SpeakeasyBase));
export { DataflowProjectsJobsGetSecurityOption1 };
var DataflowProjectsJobsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsGetSecurityOption2, _super);
    function DataflowProjectsJobsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsGetSecurityOption2.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsGetSecurityOption2;
}(SpeakeasyBase));
export { DataflowProjectsJobsGetSecurityOption2 };
var DataflowProjectsJobsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsGetSecurityOption3, _super);
    function DataflowProjectsJobsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsGetSecurityOption3.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsGetSecurityOption3;
}(SpeakeasyBase));
export { DataflowProjectsJobsGetSecurityOption3 };
var DataflowProjectsJobsGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsGetSecurityOption4, _super);
    function DataflowProjectsJobsGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsGetSecurityOption4.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsGetSecurityOption4;
}(SpeakeasyBase));
export { DataflowProjectsJobsGetSecurityOption4 };
var DataflowProjectsJobsGetSecurity = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsGetSecurity, _super);
    function DataflowProjectsJobsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsGetSecurityOption1)
    ], DataflowProjectsJobsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsGetSecurityOption2)
    ], DataflowProjectsJobsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsGetSecurityOption3)
    ], DataflowProjectsJobsGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsGetSecurityOption4)
    ], DataflowProjectsJobsGetSecurity.prototype, "option4", void 0);
    return DataflowProjectsJobsGetSecurity;
}(SpeakeasyBase));
export { DataflowProjectsJobsGetSecurity };
var DataflowProjectsJobsGetRequest = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsGetRequest, _super);
    function DataflowProjectsJobsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsJobsGetPathParams)
    ], DataflowProjectsJobsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsJobsGetQueryParams)
    ], DataflowProjectsJobsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsJobsGetSecurity)
    ], DataflowProjectsJobsGetRequest.prototype, "security", void 0);
    return DataflowProjectsJobsGetRequest;
}(SpeakeasyBase));
export { DataflowProjectsJobsGetRequest };
var DataflowProjectsJobsGetResponse = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsGetResponse, _super);
    function DataflowProjectsJobsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataflowProjectsJobsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Job)
    ], DataflowProjectsJobsGetResponse.prototype, "job", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataflowProjectsJobsGetResponse.prototype, "statusCode", void 0);
    return DataflowProjectsJobsGetResponse;
}(SpeakeasyBase));
export { DataflowProjectsJobsGetResponse };
