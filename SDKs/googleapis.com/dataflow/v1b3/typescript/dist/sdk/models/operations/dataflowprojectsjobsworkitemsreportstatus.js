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
var DataflowProjectsJobsWorkItemsReportStatusPathParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsWorkItemsReportStatusPathParams, _super);
    function DataflowProjectsJobsWorkItemsReportStatusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsWorkItemsReportStatusPathParams.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsWorkItemsReportStatusPathParams.prototype, "projectId", void 0);
    return DataflowProjectsJobsWorkItemsReportStatusPathParams;
}(SpeakeasyBase));
export { DataflowProjectsJobsWorkItemsReportStatusPathParams };
var DataflowProjectsJobsWorkItemsReportStatusQueryParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsWorkItemsReportStatusQueryParams, _super);
    function DataflowProjectsJobsWorkItemsReportStatusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsWorkItemsReportStatusQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsWorkItemsReportStatusQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsWorkItemsReportStatusQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsWorkItemsReportStatusQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsWorkItemsReportStatusQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsWorkItemsReportStatusQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsWorkItemsReportStatusQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsJobsWorkItemsReportStatusQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsWorkItemsReportStatusQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsWorkItemsReportStatusQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsWorkItemsReportStatusQueryParams.prototype, "uploadProtocol", void 0);
    return DataflowProjectsJobsWorkItemsReportStatusQueryParams;
}(SpeakeasyBase));
export { DataflowProjectsJobsWorkItemsReportStatusQueryParams };
var DataflowProjectsJobsWorkItemsReportStatusSecurityOption1 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsWorkItemsReportStatusSecurityOption1, _super);
    function DataflowProjectsJobsWorkItemsReportStatusSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsWorkItemsReportStatusSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsWorkItemsReportStatusSecurityOption1.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsWorkItemsReportStatusSecurityOption1;
}(SpeakeasyBase));
export { DataflowProjectsJobsWorkItemsReportStatusSecurityOption1 };
var DataflowProjectsJobsWorkItemsReportStatusSecurityOption2 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsWorkItemsReportStatusSecurityOption2, _super);
    function DataflowProjectsJobsWorkItemsReportStatusSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsWorkItemsReportStatusSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsWorkItemsReportStatusSecurityOption2.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsWorkItemsReportStatusSecurityOption2;
}(SpeakeasyBase));
export { DataflowProjectsJobsWorkItemsReportStatusSecurityOption2 };
var DataflowProjectsJobsWorkItemsReportStatusSecurityOption3 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsWorkItemsReportStatusSecurityOption3, _super);
    function DataflowProjectsJobsWorkItemsReportStatusSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsWorkItemsReportStatusSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsWorkItemsReportStatusSecurityOption3.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsWorkItemsReportStatusSecurityOption3;
}(SpeakeasyBase));
export { DataflowProjectsJobsWorkItemsReportStatusSecurityOption3 };
var DataflowProjectsJobsWorkItemsReportStatusSecurityOption4 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsWorkItemsReportStatusSecurityOption4, _super);
    function DataflowProjectsJobsWorkItemsReportStatusSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsWorkItemsReportStatusSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsWorkItemsReportStatusSecurityOption4.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsWorkItemsReportStatusSecurityOption4;
}(SpeakeasyBase));
export { DataflowProjectsJobsWorkItemsReportStatusSecurityOption4 };
var DataflowProjectsJobsWorkItemsReportStatusSecurity = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsWorkItemsReportStatusSecurity, _super);
    function DataflowProjectsJobsWorkItemsReportStatusSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsWorkItemsReportStatusSecurityOption1)
    ], DataflowProjectsJobsWorkItemsReportStatusSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsWorkItemsReportStatusSecurityOption2)
    ], DataflowProjectsJobsWorkItemsReportStatusSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsWorkItemsReportStatusSecurityOption3)
    ], DataflowProjectsJobsWorkItemsReportStatusSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsWorkItemsReportStatusSecurityOption4)
    ], DataflowProjectsJobsWorkItemsReportStatusSecurity.prototype, "option4", void 0);
    return DataflowProjectsJobsWorkItemsReportStatusSecurity;
}(SpeakeasyBase));
export { DataflowProjectsJobsWorkItemsReportStatusSecurity };
var DataflowProjectsJobsWorkItemsReportStatusRequest = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsWorkItemsReportStatusRequest, _super);
    function DataflowProjectsJobsWorkItemsReportStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsJobsWorkItemsReportStatusPathParams)
    ], DataflowProjectsJobsWorkItemsReportStatusRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsJobsWorkItemsReportStatusQueryParams)
    ], DataflowProjectsJobsWorkItemsReportStatusRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ReportWorkItemStatusRequest)
    ], DataflowProjectsJobsWorkItemsReportStatusRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsJobsWorkItemsReportStatusSecurity)
    ], DataflowProjectsJobsWorkItemsReportStatusRequest.prototype, "security", void 0);
    return DataflowProjectsJobsWorkItemsReportStatusRequest;
}(SpeakeasyBase));
export { DataflowProjectsJobsWorkItemsReportStatusRequest };
var DataflowProjectsJobsWorkItemsReportStatusResponse = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsWorkItemsReportStatusResponse, _super);
    function DataflowProjectsJobsWorkItemsReportStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataflowProjectsJobsWorkItemsReportStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ReportWorkItemStatusResponse)
    ], DataflowProjectsJobsWorkItemsReportStatusResponse.prototype, "reportWorkItemStatusResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataflowProjectsJobsWorkItemsReportStatusResponse.prototype, "statusCode", void 0);
    return DataflowProjectsJobsWorkItemsReportStatusResponse;
}(SpeakeasyBase));
export { DataflowProjectsJobsWorkItemsReportStatusResponse };
