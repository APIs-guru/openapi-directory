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
var ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreatePathParams = /** @class */ (function (_super) {
    __extends(ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreatePathParams, _super);
    function ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=executionId" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreatePathParams.prototype, "executionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=historyId" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreatePathParams.prototype, "historyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreatePathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=stepId" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreatePathParams.prototype, "stepId", void 0);
    return ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreatePathParams;
}(SpeakeasyBase));
export { ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreatePathParams };
var ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateQueryParams = /** @class */ (function (_super) {
    __extends(ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateQueryParams, _super);
    function ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateQueryParams;
}(SpeakeasyBase));
export { ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateQueryParams };
var ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateSecurity = /** @class */ (function (_super) {
    __extends(ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateSecurity, _super);
    function ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateSecurity.prototype, "oauth2c", void 0);
    return ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateSecurity;
}(SpeakeasyBase));
export { ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateSecurity };
var ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateRequest = /** @class */ (function (_super) {
    __extends(ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateRequest, _super);
    function ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreatePathParams)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateQueryParams)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PerfMetricsSummary)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateSecurity)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateRequest.prototype, "security", void 0);
    return ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateRequest;
}(SpeakeasyBase));
export { ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateRequest };
var ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateResponse = /** @class */ (function (_super) {
    __extends(ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateResponse, _super);
    function ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PerfMetricsSummary)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateResponse.prototype, "perfMetricsSummary", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateResponse.prototype, "statusCode", void 0);
    return ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateResponse;
}(SpeakeasyBase));
export { ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateResponse };
