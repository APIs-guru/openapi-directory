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
import { GoogleCloudDialogflowCxV3ExperimentResultConfidenceInterval } from "./googleclouddialogflowcxv3experimentresultconfidenceinterval";
export var GoogleCloudDialogflowCxV3ExperimentResultMetricCountTypeEnum;
(function (GoogleCloudDialogflowCxV3ExperimentResultMetricCountTypeEnum) {
    GoogleCloudDialogflowCxV3ExperimentResultMetricCountTypeEnum["CountTypeUnspecified"] = "COUNT_TYPE_UNSPECIFIED";
    GoogleCloudDialogflowCxV3ExperimentResultMetricCountTypeEnum["TotalNoMatchCount"] = "TOTAL_NO_MATCH_COUNT";
    GoogleCloudDialogflowCxV3ExperimentResultMetricCountTypeEnum["TotalTurnCount"] = "TOTAL_TURN_COUNT";
    GoogleCloudDialogflowCxV3ExperimentResultMetricCountTypeEnum["AverageTurnCount"] = "AVERAGE_TURN_COUNT";
})(GoogleCloudDialogflowCxV3ExperimentResultMetricCountTypeEnum || (GoogleCloudDialogflowCxV3ExperimentResultMetricCountTypeEnum = {}));
export var GoogleCloudDialogflowCxV3ExperimentResultMetricTypeEnum;
(function (GoogleCloudDialogflowCxV3ExperimentResultMetricTypeEnum) {
    GoogleCloudDialogflowCxV3ExperimentResultMetricTypeEnum["MetricUnspecified"] = "METRIC_UNSPECIFIED";
    GoogleCloudDialogflowCxV3ExperimentResultMetricTypeEnum["ContainedSessionNoCallbackRate"] = "CONTAINED_SESSION_NO_CALLBACK_RATE";
    GoogleCloudDialogflowCxV3ExperimentResultMetricTypeEnum["LiveAgentHandoffRate"] = "LIVE_AGENT_HANDOFF_RATE";
    GoogleCloudDialogflowCxV3ExperimentResultMetricTypeEnum["CallbackSessionRate"] = "CALLBACK_SESSION_RATE";
    GoogleCloudDialogflowCxV3ExperimentResultMetricTypeEnum["AbandonedSessionRate"] = "ABANDONED_SESSION_RATE";
    GoogleCloudDialogflowCxV3ExperimentResultMetricTypeEnum["SessionEndRate"] = "SESSION_END_RATE";
})(GoogleCloudDialogflowCxV3ExperimentResultMetricTypeEnum || (GoogleCloudDialogflowCxV3ExperimentResultMetricTypeEnum = {}));
// GoogleCloudDialogflowCxV3ExperimentResultMetric
/**
 * Metric and corresponding confidence intervals.
**/
var GoogleCloudDialogflowCxV3ExperimentResultMetric = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3ExperimentResultMetric, _super);
    function GoogleCloudDialogflowCxV3ExperimentResultMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=confidenceInterval" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3ExperimentResultConfidenceInterval)
    ], GoogleCloudDialogflowCxV3ExperimentResultMetric.prototype, "confidenceInterval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GoogleCloudDialogflowCxV3ExperimentResultMetric.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=countType" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3ExperimentResultMetric.prototype, "countType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ratio" }),
        __metadata("design:type", Number)
    ], GoogleCloudDialogflowCxV3ExperimentResultMetric.prototype, "ratio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3ExperimentResultMetric.prototype, "type", void 0);
    return GoogleCloudDialogflowCxV3ExperimentResultMetric;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3ExperimentResultMetric };
