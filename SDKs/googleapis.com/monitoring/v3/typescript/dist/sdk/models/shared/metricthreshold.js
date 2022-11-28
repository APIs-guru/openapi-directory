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
import { Aggregation } from "./aggregation";
import { Trigger } from "./trigger";
export var MetricThresholdComparisonEnum;
(function (MetricThresholdComparisonEnum) {
    MetricThresholdComparisonEnum["ComparisonUnspecified"] = "COMPARISON_UNSPECIFIED";
    MetricThresholdComparisonEnum["ComparisonGt"] = "COMPARISON_GT";
    MetricThresholdComparisonEnum["ComparisonGe"] = "COMPARISON_GE";
    MetricThresholdComparisonEnum["ComparisonLt"] = "COMPARISON_LT";
    MetricThresholdComparisonEnum["ComparisonLe"] = "COMPARISON_LE";
    MetricThresholdComparisonEnum["ComparisonEq"] = "COMPARISON_EQ";
    MetricThresholdComparisonEnum["ComparisonNe"] = "COMPARISON_NE";
})(MetricThresholdComparisonEnum || (MetricThresholdComparisonEnum = {}));
export var MetricThresholdEvaluationMissingDataEnum;
(function (MetricThresholdEvaluationMissingDataEnum) {
    MetricThresholdEvaluationMissingDataEnum["EvaluationMissingDataUnspecified"] = "EVALUATION_MISSING_DATA_UNSPECIFIED";
    MetricThresholdEvaluationMissingDataEnum["EvaluationMissingDataInactive"] = "EVALUATION_MISSING_DATA_INACTIVE";
    MetricThresholdEvaluationMissingDataEnum["EvaluationMissingDataActive"] = "EVALUATION_MISSING_DATA_ACTIVE";
    MetricThresholdEvaluationMissingDataEnum["EvaluationMissingDataNoOp"] = "EVALUATION_MISSING_DATA_NO_OP";
})(MetricThresholdEvaluationMissingDataEnum || (MetricThresholdEvaluationMissingDataEnum = {}));
// MetricThreshold
/**
 * A condition type that compares a collection of time series against a threshold.
**/
var MetricThreshold = /** @class */ (function (_super) {
    __extends(MetricThreshold, _super);
    function MetricThreshold() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aggregations", elemType: Aggregation }),
        __metadata("design:type", Array)
    ], MetricThreshold.prototype, "aggregations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comparison" }),
        __metadata("design:type", String)
    ], MetricThreshold.prototype, "comparison", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=denominatorAggregations", elemType: Aggregation }),
        __metadata("design:type", Array)
    ], MetricThreshold.prototype, "denominatorAggregations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=denominatorFilter" }),
        __metadata("design:type", String)
    ], MetricThreshold.prototype, "denominatorFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration" }),
        __metadata("design:type", String)
    ], MetricThreshold.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=evaluationMissingData" }),
        __metadata("design:type", String)
    ], MetricThreshold.prototype, "evaluationMissingData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter" }),
        __metadata("design:type", String)
    ], MetricThreshold.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thresholdValue" }),
        __metadata("design:type", Number)
    ], MetricThreshold.prototype, "thresholdValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trigger" }),
        __metadata("design:type", Trigger)
    ], MetricThreshold.prototype, "trigger", void 0);
    return MetricThreshold;
}(SpeakeasyBase));
export { MetricThreshold };
