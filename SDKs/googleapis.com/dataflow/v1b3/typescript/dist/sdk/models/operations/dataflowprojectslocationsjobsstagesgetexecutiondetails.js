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
var DataflowProjectsLocationsJobsStagesGetExecutionDetailsPathParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsStagesGetExecutionDetailsPathParams, _super);
    function DataflowProjectsLocationsJobsStagesGetExecutionDetailsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsStagesGetExecutionDetailsPathParams.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsStagesGetExecutionDetailsPathParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsStagesGetExecutionDetailsPathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=stageId" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsStagesGetExecutionDetailsPathParams.prototype, "stageId", void 0);
    return DataflowProjectsLocationsJobsStagesGetExecutionDetailsPathParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsStagesGetExecutionDetailsPathParams };
var DataflowProjectsLocationsJobsStagesGetExecutionDetailsQueryParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsStagesGetExecutionDetailsQueryParams, _super);
    function DataflowProjectsLocationsJobsStagesGetExecutionDetailsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsStagesGetExecutionDetailsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsStagesGetExecutionDetailsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsStagesGetExecutionDetailsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsStagesGetExecutionDetailsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endTime" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsStagesGetExecutionDetailsQueryParams.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsStagesGetExecutionDetailsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsStagesGetExecutionDetailsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsStagesGetExecutionDetailsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DataflowProjectsLocationsJobsStagesGetExecutionDetailsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsStagesGetExecutionDetailsQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsLocationsJobsStagesGetExecutionDetailsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsStagesGetExecutionDetailsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTime" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsStagesGetExecutionDetailsQueryParams.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsStagesGetExecutionDetailsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsStagesGetExecutionDetailsQueryParams.prototype, "uploadProtocol", void 0);
    return DataflowProjectsLocationsJobsStagesGetExecutionDetailsQueryParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsStagesGetExecutionDetailsQueryParams };
var DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption1 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption1, _super);
    function DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption1.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption1;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption1 };
var DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption2 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption2, _super);
    function DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption2.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption2;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption2 };
var DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption3 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption3, _super);
    function DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption3.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption3;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption3 };
var DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption4 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption4, _super);
    function DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption4.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption4;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption4 };
var DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurity = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurity, _super);
    function DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption1)
    ], DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption2)
    ], DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption3)
    ], DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption4)
    ], DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurity.prototype, "option4", void 0);
    return DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurity;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurity };
var DataflowProjectsLocationsJobsStagesGetExecutionDetailsRequest = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsStagesGetExecutionDetailsRequest, _super);
    function DataflowProjectsLocationsJobsStagesGetExecutionDetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsJobsStagesGetExecutionDetailsPathParams)
    ], DataflowProjectsLocationsJobsStagesGetExecutionDetailsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsJobsStagesGetExecutionDetailsQueryParams)
    ], DataflowProjectsLocationsJobsStagesGetExecutionDetailsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurity)
    ], DataflowProjectsLocationsJobsStagesGetExecutionDetailsRequest.prototype, "security", void 0);
    return DataflowProjectsLocationsJobsStagesGetExecutionDetailsRequest;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsStagesGetExecutionDetailsRequest };
var DataflowProjectsLocationsJobsStagesGetExecutionDetailsResponse = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsStagesGetExecutionDetailsResponse, _super);
    function DataflowProjectsLocationsJobsStagesGetExecutionDetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsStagesGetExecutionDetailsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StageExecutionDetails)
    ], DataflowProjectsLocationsJobsStagesGetExecutionDetailsResponse.prototype, "stageExecutionDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataflowProjectsLocationsJobsStagesGetExecutionDetailsResponse.prototype, "statusCode", void 0);
    return DataflowProjectsLocationsJobsStagesGetExecutionDetailsResponse;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsStagesGetExecutionDetailsResponse };
