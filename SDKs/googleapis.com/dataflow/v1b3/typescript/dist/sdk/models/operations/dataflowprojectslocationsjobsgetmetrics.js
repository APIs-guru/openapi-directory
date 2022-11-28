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
var DataflowProjectsLocationsJobsGetMetricsPathParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsGetMetricsPathParams, _super);
    function DataflowProjectsLocationsJobsGetMetricsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetMetricsPathParams.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetMetricsPathParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetMetricsPathParams.prototype, "projectId", void 0);
    return DataflowProjectsLocationsJobsGetMetricsPathParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsGetMetricsPathParams };
var DataflowProjectsLocationsJobsGetMetricsQueryParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsGetMetricsQueryParams, _super);
    function DataflowProjectsLocationsJobsGetMetricsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetMetricsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetMetricsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetMetricsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetMetricsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetMetricsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetMetricsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetMetricsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsLocationsJobsGetMetricsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetMetricsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTime" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetMetricsQueryParams.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetMetricsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetMetricsQueryParams.prototype, "uploadProtocol", void 0);
    return DataflowProjectsLocationsJobsGetMetricsQueryParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsGetMetricsQueryParams };
var DataflowProjectsLocationsJobsGetMetricsSecurityOption1 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsGetMetricsSecurityOption1, _super);
    function DataflowProjectsLocationsJobsGetMetricsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsGetMetricsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsGetMetricsSecurityOption1.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsGetMetricsSecurityOption1;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsGetMetricsSecurityOption1 };
var DataflowProjectsLocationsJobsGetMetricsSecurityOption2 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsGetMetricsSecurityOption2, _super);
    function DataflowProjectsLocationsJobsGetMetricsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsGetMetricsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsGetMetricsSecurityOption2.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsGetMetricsSecurityOption2;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsGetMetricsSecurityOption2 };
var DataflowProjectsLocationsJobsGetMetricsSecurityOption3 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsGetMetricsSecurityOption3, _super);
    function DataflowProjectsLocationsJobsGetMetricsSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsGetMetricsSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsGetMetricsSecurityOption3.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsGetMetricsSecurityOption3;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsGetMetricsSecurityOption3 };
var DataflowProjectsLocationsJobsGetMetricsSecurityOption4 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsGetMetricsSecurityOption4, _super);
    function DataflowProjectsLocationsJobsGetMetricsSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsGetMetricsSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsGetMetricsSecurityOption4.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsGetMetricsSecurityOption4;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsGetMetricsSecurityOption4 };
var DataflowProjectsLocationsJobsGetMetricsSecurity = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsGetMetricsSecurity, _super);
    function DataflowProjectsLocationsJobsGetMetricsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsGetMetricsSecurityOption1)
    ], DataflowProjectsLocationsJobsGetMetricsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsGetMetricsSecurityOption2)
    ], DataflowProjectsLocationsJobsGetMetricsSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsGetMetricsSecurityOption3)
    ], DataflowProjectsLocationsJobsGetMetricsSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsGetMetricsSecurityOption4)
    ], DataflowProjectsLocationsJobsGetMetricsSecurity.prototype, "option4", void 0);
    return DataflowProjectsLocationsJobsGetMetricsSecurity;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsGetMetricsSecurity };
var DataflowProjectsLocationsJobsGetMetricsRequest = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsGetMetricsRequest, _super);
    function DataflowProjectsLocationsJobsGetMetricsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsJobsGetMetricsPathParams)
    ], DataflowProjectsLocationsJobsGetMetricsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsJobsGetMetricsQueryParams)
    ], DataflowProjectsLocationsJobsGetMetricsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsJobsGetMetricsSecurity)
    ], DataflowProjectsLocationsJobsGetMetricsRequest.prototype, "security", void 0);
    return DataflowProjectsLocationsJobsGetMetricsRequest;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsGetMetricsRequest };
var DataflowProjectsLocationsJobsGetMetricsResponse = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsGetMetricsResponse, _super);
    function DataflowProjectsLocationsJobsGetMetricsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsGetMetricsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.JobMetrics)
    ], DataflowProjectsLocationsJobsGetMetricsResponse.prototype, "jobMetrics", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataflowProjectsLocationsJobsGetMetricsResponse.prototype, "statusCode", void 0);
    return DataflowProjectsLocationsJobsGetMetricsResponse;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsGetMetricsResponse };
