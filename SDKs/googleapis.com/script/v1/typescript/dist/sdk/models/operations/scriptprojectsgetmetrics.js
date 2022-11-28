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
var ScriptProjectsGetMetricsPathParams = /** @class */ (function (_super) {
    __extends(ScriptProjectsGetMetricsPathParams, _super);
    function ScriptProjectsGetMetricsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scriptId" }),
        __metadata("design:type", String)
    ], ScriptProjectsGetMetricsPathParams.prototype, "scriptId", void 0);
    return ScriptProjectsGetMetricsPathParams;
}(SpeakeasyBase));
export { ScriptProjectsGetMetricsPathParams };
export var ScriptProjectsGetMetricsMetricsGranularityEnum;
(function (ScriptProjectsGetMetricsMetricsGranularityEnum) {
    ScriptProjectsGetMetricsMetricsGranularityEnum["UnspecifiedGranularity"] = "UNSPECIFIED_GRANULARITY";
    ScriptProjectsGetMetricsMetricsGranularityEnum["Weekly"] = "WEEKLY";
    ScriptProjectsGetMetricsMetricsGranularityEnum["Daily"] = "DAILY";
})(ScriptProjectsGetMetricsMetricsGranularityEnum || (ScriptProjectsGetMetricsMetricsGranularityEnum = {}));
var ScriptProjectsGetMetricsQueryParams = /** @class */ (function (_super) {
    __extends(ScriptProjectsGetMetricsQueryParams, _super);
    function ScriptProjectsGetMetricsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ScriptProjectsGetMetricsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ScriptProjectsGetMetricsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ScriptProjectsGetMetricsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ScriptProjectsGetMetricsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ScriptProjectsGetMetricsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ScriptProjectsGetMetricsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=metricsFilter.deploymentId" }),
        __metadata("design:type", String)
    ], ScriptProjectsGetMetricsQueryParams.prototype, "metricsFilterDeploymentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=metricsGranularity" }),
        __metadata("design:type", String)
    ], ScriptProjectsGetMetricsQueryParams.prototype, "metricsGranularity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ScriptProjectsGetMetricsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ScriptProjectsGetMetricsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ScriptProjectsGetMetricsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ScriptProjectsGetMetricsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ScriptProjectsGetMetricsQueryParams.prototype, "uploadProtocol", void 0);
    return ScriptProjectsGetMetricsQueryParams;
}(SpeakeasyBase));
export { ScriptProjectsGetMetricsQueryParams };
var ScriptProjectsGetMetricsSecurity = /** @class */ (function (_super) {
    __extends(ScriptProjectsGetMetricsSecurity, _super);
    function ScriptProjectsGetMetricsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ScriptProjectsGetMetricsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ScriptProjectsGetMetricsSecurity.prototype, "oauth2c", void 0);
    return ScriptProjectsGetMetricsSecurity;
}(SpeakeasyBase));
export { ScriptProjectsGetMetricsSecurity };
var ScriptProjectsGetMetricsRequest = /** @class */ (function (_super) {
    __extends(ScriptProjectsGetMetricsRequest, _super);
    function ScriptProjectsGetMetricsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ScriptProjectsGetMetricsPathParams)
    ], ScriptProjectsGetMetricsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ScriptProjectsGetMetricsQueryParams)
    ], ScriptProjectsGetMetricsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ScriptProjectsGetMetricsSecurity)
    ], ScriptProjectsGetMetricsRequest.prototype, "security", void 0);
    return ScriptProjectsGetMetricsRequest;
}(SpeakeasyBase));
export { ScriptProjectsGetMetricsRequest };
var ScriptProjectsGetMetricsResponse = /** @class */ (function (_super) {
    __extends(ScriptProjectsGetMetricsResponse, _super);
    function ScriptProjectsGetMetricsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ScriptProjectsGetMetricsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Metrics)
    ], ScriptProjectsGetMetricsResponse.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ScriptProjectsGetMetricsResponse.prototype, "statusCode", void 0);
    return ScriptProjectsGetMetricsResponse;
}(SpeakeasyBase));
export { ScriptProjectsGetMetricsResponse };
