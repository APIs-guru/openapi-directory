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
var DataflowProjectsJobsGetMetricsPathParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsGetMetricsPathParams, _super);
    function DataflowProjectsJobsGetMetricsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsGetMetricsPathParams.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsGetMetricsPathParams.prototype, "projectId", void 0);
    return DataflowProjectsJobsGetMetricsPathParams;
}(SpeakeasyBase));
export { DataflowProjectsJobsGetMetricsPathParams };
var DataflowProjectsJobsGetMetricsQueryParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsGetMetricsQueryParams, _super);
    function DataflowProjectsJobsGetMetricsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsGetMetricsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsGetMetricsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsGetMetricsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsGetMetricsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsGetMetricsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsGetMetricsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsGetMetricsQueryParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsGetMetricsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsJobsGetMetricsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsGetMetricsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTime" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsGetMetricsQueryParams.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsGetMetricsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsGetMetricsQueryParams.prototype, "uploadProtocol", void 0);
    return DataflowProjectsJobsGetMetricsQueryParams;
}(SpeakeasyBase));
export { DataflowProjectsJobsGetMetricsQueryParams };
var DataflowProjectsJobsGetMetricsSecurityOption1 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsGetMetricsSecurityOption1, _super);
    function DataflowProjectsJobsGetMetricsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsGetMetricsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsGetMetricsSecurityOption1.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsGetMetricsSecurityOption1;
}(SpeakeasyBase));
export { DataflowProjectsJobsGetMetricsSecurityOption1 };
var DataflowProjectsJobsGetMetricsSecurityOption2 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsGetMetricsSecurityOption2, _super);
    function DataflowProjectsJobsGetMetricsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsGetMetricsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsGetMetricsSecurityOption2.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsGetMetricsSecurityOption2;
}(SpeakeasyBase));
export { DataflowProjectsJobsGetMetricsSecurityOption2 };
var DataflowProjectsJobsGetMetricsSecurityOption3 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsGetMetricsSecurityOption3, _super);
    function DataflowProjectsJobsGetMetricsSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsGetMetricsSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsGetMetricsSecurityOption3.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsGetMetricsSecurityOption3;
}(SpeakeasyBase));
export { DataflowProjectsJobsGetMetricsSecurityOption3 };
var DataflowProjectsJobsGetMetricsSecurityOption4 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsGetMetricsSecurityOption4, _super);
    function DataflowProjectsJobsGetMetricsSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsGetMetricsSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsGetMetricsSecurityOption4.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsGetMetricsSecurityOption4;
}(SpeakeasyBase));
export { DataflowProjectsJobsGetMetricsSecurityOption4 };
var DataflowProjectsJobsGetMetricsSecurity = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsGetMetricsSecurity, _super);
    function DataflowProjectsJobsGetMetricsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsGetMetricsSecurityOption1)
    ], DataflowProjectsJobsGetMetricsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsGetMetricsSecurityOption2)
    ], DataflowProjectsJobsGetMetricsSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsGetMetricsSecurityOption3)
    ], DataflowProjectsJobsGetMetricsSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsGetMetricsSecurityOption4)
    ], DataflowProjectsJobsGetMetricsSecurity.prototype, "option4", void 0);
    return DataflowProjectsJobsGetMetricsSecurity;
}(SpeakeasyBase));
export { DataflowProjectsJobsGetMetricsSecurity };
var DataflowProjectsJobsGetMetricsRequest = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsGetMetricsRequest, _super);
    function DataflowProjectsJobsGetMetricsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsJobsGetMetricsPathParams)
    ], DataflowProjectsJobsGetMetricsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsJobsGetMetricsQueryParams)
    ], DataflowProjectsJobsGetMetricsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsJobsGetMetricsSecurity)
    ], DataflowProjectsJobsGetMetricsRequest.prototype, "security", void 0);
    return DataflowProjectsJobsGetMetricsRequest;
}(SpeakeasyBase));
export { DataflowProjectsJobsGetMetricsRequest };
var DataflowProjectsJobsGetMetricsResponse = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsGetMetricsResponse, _super);
    function DataflowProjectsJobsGetMetricsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataflowProjectsJobsGetMetricsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.JobMetrics)
    ], DataflowProjectsJobsGetMetricsResponse.prototype, "jobMetrics", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataflowProjectsJobsGetMetricsResponse.prototype, "statusCode", void 0);
    return DataflowProjectsJobsGetMetricsResponse;
}(SpeakeasyBase));
export { DataflowProjectsJobsGetMetricsResponse };
