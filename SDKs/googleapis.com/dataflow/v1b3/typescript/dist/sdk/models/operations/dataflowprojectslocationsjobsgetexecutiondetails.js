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
var DataflowProjectsLocationsJobsGetExecutionDetailsPathParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsGetExecutionDetailsPathParams, _super);
    function DataflowProjectsLocationsJobsGetExecutionDetailsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetExecutionDetailsPathParams.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetExecutionDetailsPathParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetExecutionDetailsPathParams.prototype, "projectId", void 0);
    return DataflowProjectsLocationsJobsGetExecutionDetailsPathParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsGetExecutionDetailsPathParams };
var DataflowProjectsLocationsJobsGetExecutionDetailsQueryParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsGetExecutionDetailsQueryParams, _super);
    function DataflowProjectsLocationsJobsGetExecutionDetailsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetExecutionDetailsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetExecutionDetailsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetExecutionDetailsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetExecutionDetailsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetExecutionDetailsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetExecutionDetailsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetExecutionDetailsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DataflowProjectsLocationsJobsGetExecutionDetailsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetExecutionDetailsQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsLocationsJobsGetExecutionDetailsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetExecutionDetailsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetExecutionDetailsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetExecutionDetailsQueryParams.prototype, "uploadProtocol", void 0);
    return DataflowProjectsLocationsJobsGetExecutionDetailsQueryParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsGetExecutionDetailsQueryParams };
var DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption1 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption1, _super);
    function DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption1.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption1;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption1 };
var DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption2 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption2, _super);
    function DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption2.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption2;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption2 };
var DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption3 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption3, _super);
    function DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption3.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption3;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption3 };
var DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption4 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption4, _super);
    function DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption4.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption4;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption4 };
var DataflowProjectsLocationsJobsGetExecutionDetailsSecurity = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsGetExecutionDetailsSecurity, _super);
    function DataflowProjectsLocationsJobsGetExecutionDetailsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption1)
    ], DataflowProjectsLocationsJobsGetExecutionDetailsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption2)
    ], DataflowProjectsLocationsJobsGetExecutionDetailsSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption3)
    ], DataflowProjectsLocationsJobsGetExecutionDetailsSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption4)
    ], DataflowProjectsLocationsJobsGetExecutionDetailsSecurity.prototype, "option4", void 0);
    return DataflowProjectsLocationsJobsGetExecutionDetailsSecurity;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsGetExecutionDetailsSecurity };
var DataflowProjectsLocationsJobsGetExecutionDetailsRequest = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsGetExecutionDetailsRequest, _super);
    function DataflowProjectsLocationsJobsGetExecutionDetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsJobsGetExecutionDetailsPathParams)
    ], DataflowProjectsLocationsJobsGetExecutionDetailsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsJobsGetExecutionDetailsQueryParams)
    ], DataflowProjectsLocationsJobsGetExecutionDetailsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsJobsGetExecutionDetailsSecurity)
    ], DataflowProjectsLocationsJobsGetExecutionDetailsRequest.prototype, "security", void 0);
    return DataflowProjectsLocationsJobsGetExecutionDetailsRequest;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsGetExecutionDetailsRequest };
var DataflowProjectsLocationsJobsGetExecutionDetailsResponse = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsGetExecutionDetailsResponse, _super);
    function DataflowProjectsLocationsJobsGetExecutionDetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetExecutionDetailsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.JobExecutionDetails)
    ], DataflowProjectsLocationsJobsGetExecutionDetailsResponse.prototype, "jobExecutionDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataflowProjectsLocationsJobsGetExecutionDetailsResponse.prototype, "statusCode", void 0);
    return DataflowProjectsLocationsJobsGetExecutionDetailsResponse;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsGetExecutionDetailsResponse };
