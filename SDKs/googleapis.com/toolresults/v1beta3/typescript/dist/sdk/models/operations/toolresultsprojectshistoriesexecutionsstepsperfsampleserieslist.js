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
var ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListPathParams = /** @class */ (function (_super) {
    __extends(ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListPathParams, _super);
    function ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=executionId" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListPathParams.prototype, "executionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=historyId" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListPathParams.prototype, "historyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListPathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=stepId" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListPathParams.prototype, "stepId", void 0);
    return ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListPathParams;
}(SpeakeasyBase));
export { ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListPathParams };
export var ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnum;
(function (ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnum) {
    ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnum["PerfMetricTypeUnspecified"] = "perfMetricTypeUnspecified";
    ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnum["Memory"] = "memory";
    ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnum["Cpu"] = "cpu";
    ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnum["Network"] = "network";
    ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnum["Graphics"] = "graphics";
})(ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnum || (ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnum = {}));
var ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListQueryParams = /** @class */ (function (_super) {
    __extends(ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListQueryParams, _super);
    function ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", Array)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListQueryParams.prototype, "uploadProtocol", void 0);
    return ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListQueryParams;
}(SpeakeasyBase));
export { ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListQueryParams };
var ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListSecurity = /** @class */ (function (_super) {
    __extends(ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListSecurity, _super);
    function ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListSecurity.prototype, "oauth2c", void 0);
    return ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListSecurity;
}(SpeakeasyBase));
export { ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListSecurity };
var ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListRequest = /** @class */ (function (_super) {
    __extends(ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListRequest, _super);
    function ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListPathParams)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListQueryParams)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListSecurity)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListRequest.prototype, "security", void 0);
    return ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListRequest;
}(SpeakeasyBase));
export { ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListRequest };
var ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListResponse = /** @class */ (function (_super) {
    __extends(ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListResponse, _super);
    function ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListPerfSampleSeriesResponse)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListResponse.prototype, "listPerfSampleSeriesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListResponse.prototype, "statusCode", void 0);
    return ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListResponse;
}(SpeakeasyBase));
export { ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListResponse };
