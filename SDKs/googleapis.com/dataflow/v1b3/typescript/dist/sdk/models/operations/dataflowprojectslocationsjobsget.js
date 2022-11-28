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
var DataflowProjectsLocationsJobsGetPathParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsGetPathParams, _super);
    function DataflowProjectsLocationsJobsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetPathParams.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetPathParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetPathParams.prototype, "projectId", void 0);
    return DataflowProjectsLocationsJobsGetPathParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsGetPathParams };
export var DataflowProjectsLocationsJobsGetViewEnum;
(function (DataflowProjectsLocationsJobsGetViewEnum) {
    DataflowProjectsLocationsJobsGetViewEnum["JobViewUnknown"] = "JOB_VIEW_UNKNOWN";
    DataflowProjectsLocationsJobsGetViewEnum["JobViewSummary"] = "JOB_VIEW_SUMMARY";
    DataflowProjectsLocationsJobsGetViewEnum["JobViewAll"] = "JOB_VIEW_ALL";
    DataflowProjectsLocationsJobsGetViewEnum["JobViewDescription"] = "JOB_VIEW_DESCRIPTION";
})(DataflowProjectsLocationsJobsGetViewEnum || (DataflowProjectsLocationsJobsGetViewEnum = {}));
var DataflowProjectsLocationsJobsGetQueryParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsGetQueryParams, _super);
    function DataflowProjectsLocationsJobsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsLocationsJobsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetQueryParams.prototype, "view", void 0);
    return DataflowProjectsLocationsJobsGetQueryParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsGetQueryParams };
var DataflowProjectsLocationsJobsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsGetSecurityOption1, _super);
    function DataflowProjectsLocationsJobsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsGetSecurityOption1.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsGetSecurityOption1;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsGetSecurityOption1 };
var DataflowProjectsLocationsJobsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsGetSecurityOption2, _super);
    function DataflowProjectsLocationsJobsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsGetSecurityOption2.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsGetSecurityOption2;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsGetSecurityOption2 };
var DataflowProjectsLocationsJobsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsGetSecurityOption3, _super);
    function DataflowProjectsLocationsJobsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsGetSecurityOption3.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsGetSecurityOption3;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsGetSecurityOption3 };
var DataflowProjectsLocationsJobsGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsGetSecurityOption4, _super);
    function DataflowProjectsLocationsJobsGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsGetSecurityOption4.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsGetSecurityOption4;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsGetSecurityOption4 };
var DataflowProjectsLocationsJobsGetSecurity = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsGetSecurity, _super);
    function DataflowProjectsLocationsJobsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsGetSecurityOption1)
    ], DataflowProjectsLocationsJobsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsGetSecurityOption2)
    ], DataflowProjectsLocationsJobsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsGetSecurityOption3)
    ], DataflowProjectsLocationsJobsGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsGetSecurityOption4)
    ], DataflowProjectsLocationsJobsGetSecurity.prototype, "option4", void 0);
    return DataflowProjectsLocationsJobsGetSecurity;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsGetSecurity };
var DataflowProjectsLocationsJobsGetRequest = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsGetRequest, _super);
    function DataflowProjectsLocationsJobsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsJobsGetPathParams)
    ], DataflowProjectsLocationsJobsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsJobsGetQueryParams)
    ], DataflowProjectsLocationsJobsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsJobsGetSecurity)
    ], DataflowProjectsLocationsJobsGetRequest.prototype, "security", void 0);
    return DataflowProjectsLocationsJobsGetRequest;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsGetRequest };
var DataflowProjectsLocationsJobsGetResponse = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsGetResponse, _super);
    function DataflowProjectsLocationsJobsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Job)
    ], DataflowProjectsLocationsJobsGetResponse.prototype, "job", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataflowProjectsLocationsJobsGetResponse.prototype, "statusCode", void 0);
    return DataflowProjectsLocationsJobsGetResponse;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsGetResponse };
