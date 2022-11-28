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
var DataflowProjectsLocationsJobsWorkItemsReportStatusPathParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsWorkItemsReportStatusPathParams, _super);
    function DataflowProjectsLocationsJobsWorkItemsReportStatusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsWorkItemsReportStatusPathParams.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsWorkItemsReportStatusPathParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsWorkItemsReportStatusPathParams.prototype, "projectId", void 0);
    return DataflowProjectsLocationsJobsWorkItemsReportStatusPathParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsWorkItemsReportStatusPathParams };
var DataflowProjectsLocationsJobsWorkItemsReportStatusQueryParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsWorkItemsReportStatusQueryParams, _super);
    function DataflowProjectsLocationsJobsWorkItemsReportStatusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsWorkItemsReportStatusQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsWorkItemsReportStatusQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsWorkItemsReportStatusQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsWorkItemsReportStatusQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsWorkItemsReportStatusQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsWorkItemsReportStatusQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsWorkItemsReportStatusQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsLocationsJobsWorkItemsReportStatusQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsWorkItemsReportStatusQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsWorkItemsReportStatusQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsWorkItemsReportStatusQueryParams.prototype, "uploadProtocol", void 0);
    return DataflowProjectsLocationsJobsWorkItemsReportStatusQueryParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsWorkItemsReportStatusQueryParams };
var DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption1 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption1, _super);
    function DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption1.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption1;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption1 };
var DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption2 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption2, _super);
    function DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption2.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption2;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption2 };
var DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption3 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption3, _super);
    function DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption3.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption3;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption3 };
var DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption4 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption4, _super);
    function DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption4.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption4;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption4 };
var DataflowProjectsLocationsJobsWorkItemsReportStatusSecurity = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsWorkItemsReportStatusSecurity, _super);
    function DataflowProjectsLocationsJobsWorkItemsReportStatusSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption1)
    ], DataflowProjectsLocationsJobsWorkItemsReportStatusSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption2)
    ], DataflowProjectsLocationsJobsWorkItemsReportStatusSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption3)
    ], DataflowProjectsLocationsJobsWorkItemsReportStatusSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption4)
    ], DataflowProjectsLocationsJobsWorkItemsReportStatusSecurity.prototype, "option4", void 0);
    return DataflowProjectsLocationsJobsWorkItemsReportStatusSecurity;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsWorkItemsReportStatusSecurity };
var DataflowProjectsLocationsJobsWorkItemsReportStatusRequest = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsWorkItemsReportStatusRequest, _super);
    function DataflowProjectsLocationsJobsWorkItemsReportStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsJobsWorkItemsReportStatusPathParams)
    ], DataflowProjectsLocationsJobsWorkItemsReportStatusRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsJobsWorkItemsReportStatusQueryParams)
    ], DataflowProjectsLocationsJobsWorkItemsReportStatusRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ReportWorkItemStatusRequest)
    ], DataflowProjectsLocationsJobsWorkItemsReportStatusRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsJobsWorkItemsReportStatusSecurity)
    ], DataflowProjectsLocationsJobsWorkItemsReportStatusRequest.prototype, "security", void 0);
    return DataflowProjectsLocationsJobsWorkItemsReportStatusRequest;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsWorkItemsReportStatusRequest };
var DataflowProjectsLocationsJobsWorkItemsReportStatusResponse = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsWorkItemsReportStatusResponse, _super);
    function DataflowProjectsLocationsJobsWorkItemsReportStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsWorkItemsReportStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ReportWorkItemStatusResponse)
    ], DataflowProjectsLocationsJobsWorkItemsReportStatusResponse.prototype, "reportWorkItemStatusResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataflowProjectsLocationsJobsWorkItemsReportStatusResponse.prototype, "statusCode", void 0);
    return DataflowProjectsLocationsJobsWorkItemsReportStatusResponse;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsWorkItemsReportStatusResponse };
