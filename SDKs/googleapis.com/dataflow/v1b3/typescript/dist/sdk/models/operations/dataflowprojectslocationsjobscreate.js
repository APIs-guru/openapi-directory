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
var DataflowProjectsLocationsJobsCreatePathParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsCreatePathParams, _super);
    function DataflowProjectsLocationsJobsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsCreatePathParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsCreatePathParams.prototype, "projectId", void 0);
    return DataflowProjectsLocationsJobsCreatePathParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsCreatePathParams };
export var DataflowProjectsLocationsJobsCreateViewEnum;
(function (DataflowProjectsLocationsJobsCreateViewEnum) {
    DataflowProjectsLocationsJobsCreateViewEnum["JobViewUnknown"] = "JOB_VIEW_UNKNOWN";
    DataflowProjectsLocationsJobsCreateViewEnum["JobViewSummary"] = "JOB_VIEW_SUMMARY";
    DataflowProjectsLocationsJobsCreateViewEnum["JobViewAll"] = "JOB_VIEW_ALL";
    DataflowProjectsLocationsJobsCreateViewEnum["JobViewDescription"] = "JOB_VIEW_DESCRIPTION";
})(DataflowProjectsLocationsJobsCreateViewEnum || (DataflowProjectsLocationsJobsCreateViewEnum = {}));
var DataflowProjectsLocationsJobsCreateQueryParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsCreateQueryParams, _super);
    function DataflowProjectsLocationsJobsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsLocationsJobsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=replaceJobId" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsCreateQueryParams.prototype, "replaceJobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsCreateQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsCreateQueryParams.prototype, "view", void 0);
    return DataflowProjectsLocationsJobsCreateQueryParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsCreateQueryParams };
var DataflowProjectsLocationsJobsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsCreateSecurityOption1, _super);
    function DataflowProjectsLocationsJobsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsCreateSecurityOption1;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsCreateSecurityOption1 };
var DataflowProjectsLocationsJobsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsCreateSecurityOption2, _super);
    function DataflowProjectsLocationsJobsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsCreateSecurityOption2;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsCreateSecurityOption2 };
var DataflowProjectsLocationsJobsCreateSecurityOption3 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsCreateSecurityOption3, _super);
    function DataflowProjectsLocationsJobsCreateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsCreateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsCreateSecurityOption3.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsCreateSecurityOption3;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsCreateSecurityOption3 };
var DataflowProjectsLocationsJobsCreateSecurityOption4 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsCreateSecurityOption4, _super);
    function DataflowProjectsLocationsJobsCreateSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsCreateSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsCreateSecurityOption4.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsCreateSecurityOption4;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsCreateSecurityOption4 };
var DataflowProjectsLocationsJobsCreateSecurity = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsCreateSecurity, _super);
    function DataflowProjectsLocationsJobsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsCreateSecurityOption1)
    ], DataflowProjectsLocationsJobsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsCreateSecurityOption2)
    ], DataflowProjectsLocationsJobsCreateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsCreateSecurityOption3)
    ], DataflowProjectsLocationsJobsCreateSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsCreateSecurityOption4)
    ], DataflowProjectsLocationsJobsCreateSecurity.prototype, "option4", void 0);
    return DataflowProjectsLocationsJobsCreateSecurity;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsCreateSecurity };
var DataflowProjectsLocationsJobsCreateRequest = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsCreateRequest, _super);
    function DataflowProjectsLocationsJobsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsJobsCreatePathParams)
    ], DataflowProjectsLocationsJobsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsJobsCreateQueryParams)
    ], DataflowProjectsLocationsJobsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.JobInput)
    ], DataflowProjectsLocationsJobsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsJobsCreateSecurity)
    ], DataflowProjectsLocationsJobsCreateRequest.prototype, "security", void 0);
    return DataflowProjectsLocationsJobsCreateRequest;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsCreateRequest };
var DataflowProjectsLocationsJobsCreateResponse = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsCreateResponse, _super);
    function DataflowProjectsLocationsJobsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Job)
    ], DataflowProjectsLocationsJobsCreateResponse.prototype, "job", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataflowProjectsLocationsJobsCreateResponse.prototype, "statusCode", void 0);
    return DataflowProjectsLocationsJobsCreateResponse;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsCreateResponse };
