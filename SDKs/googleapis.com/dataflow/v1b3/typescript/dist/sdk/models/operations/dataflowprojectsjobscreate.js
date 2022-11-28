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
var DataflowProjectsJobsCreatePathParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsCreatePathParams, _super);
    function DataflowProjectsJobsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsCreatePathParams.prototype, "projectId", void 0);
    return DataflowProjectsJobsCreatePathParams;
}(SpeakeasyBase));
export { DataflowProjectsJobsCreatePathParams };
export var DataflowProjectsJobsCreateViewEnum;
(function (DataflowProjectsJobsCreateViewEnum) {
    DataflowProjectsJobsCreateViewEnum["JobViewUnknown"] = "JOB_VIEW_UNKNOWN";
    DataflowProjectsJobsCreateViewEnum["JobViewSummary"] = "JOB_VIEW_SUMMARY";
    DataflowProjectsJobsCreateViewEnum["JobViewAll"] = "JOB_VIEW_ALL";
    DataflowProjectsJobsCreateViewEnum["JobViewDescription"] = "JOB_VIEW_DESCRIPTION";
})(DataflowProjectsJobsCreateViewEnum || (DataflowProjectsJobsCreateViewEnum = {}));
var DataflowProjectsJobsCreateQueryParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsCreateQueryParams, _super);
    function DataflowProjectsJobsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsCreateQueryParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsJobsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=replaceJobId" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsCreateQueryParams.prototype, "replaceJobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsCreateQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsCreateQueryParams.prototype, "view", void 0);
    return DataflowProjectsJobsCreateQueryParams;
}(SpeakeasyBase));
export { DataflowProjectsJobsCreateQueryParams };
var DataflowProjectsJobsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsCreateSecurityOption1, _super);
    function DataflowProjectsJobsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsCreateSecurityOption1;
}(SpeakeasyBase));
export { DataflowProjectsJobsCreateSecurityOption1 };
var DataflowProjectsJobsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsCreateSecurityOption2, _super);
    function DataflowProjectsJobsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsCreateSecurityOption2;
}(SpeakeasyBase));
export { DataflowProjectsJobsCreateSecurityOption2 };
var DataflowProjectsJobsCreateSecurityOption3 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsCreateSecurityOption3, _super);
    function DataflowProjectsJobsCreateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsCreateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsCreateSecurityOption3.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsCreateSecurityOption3;
}(SpeakeasyBase));
export { DataflowProjectsJobsCreateSecurityOption3 };
var DataflowProjectsJobsCreateSecurityOption4 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsCreateSecurityOption4, _super);
    function DataflowProjectsJobsCreateSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsCreateSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsCreateSecurityOption4.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsCreateSecurityOption4;
}(SpeakeasyBase));
export { DataflowProjectsJobsCreateSecurityOption4 };
var DataflowProjectsJobsCreateSecurity = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsCreateSecurity, _super);
    function DataflowProjectsJobsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsCreateSecurityOption1)
    ], DataflowProjectsJobsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsCreateSecurityOption2)
    ], DataflowProjectsJobsCreateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsCreateSecurityOption3)
    ], DataflowProjectsJobsCreateSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsCreateSecurityOption4)
    ], DataflowProjectsJobsCreateSecurity.prototype, "option4", void 0);
    return DataflowProjectsJobsCreateSecurity;
}(SpeakeasyBase));
export { DataflowProjectsJobsCreateSecurity };
var DataflowProjectsJobsCreateRequest = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsCreateRequest, _super);
    function DataflowProjectsJobsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsJobsCreatePathParams)
    ], DataflowProjectsJobsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsJobsCreateQueryParams)
    ], DataflowProjectsJobsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.JobInput)
    ], DataflowProjectsJobsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsJobsCreateSecurity)
    ], DataflowProjectsJobsCreateRequest.prototype, "security", void 0);
    return DataflowProjectsJobsCreateRequest;
}(SpeakeasyBase));
export { DataflowProjectsJobsCreateRequest };
var DataflowProjectsJobsCreateResponse = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsCreateResponse, _super);
    function DataflowProjectsJobsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataflowProjectsJobsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Job)
    ], DataflowProjectsJobsCreateResponse.prototype, "job", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataflowProjectsJobsCreateResponse.prototype, "statusCode", void 0);
    return DataflowProjectsJobsCreateResponse;
}(SpeakeasyBase));
export { DataflowProjectsJobsCreateResponse };
