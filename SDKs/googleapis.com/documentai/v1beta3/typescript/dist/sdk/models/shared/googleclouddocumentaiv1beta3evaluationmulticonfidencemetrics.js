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
import { GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics } from "./googleclouddocumentaiv1beta3evaluationconfidencelevelmetrics";
export var GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetricsMetricsTypeEnum;
(function (GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetricsMetricsTypeEnum) {
    GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetricsMetricsTypeEnum["MetricsTypeUnspecified"] = "METRICS_TYPE_UNSPECIFIED";
    GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetricsMetricsTypeEnum["Aggregate"] = "AGGREGATE";
})(GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetricsMetricsTypeEnum || (GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetricsMetricsTypeEnum = {}));
// GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics
/**
 * Metrics across multiple confidence levels.
**/
var GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics = /** @class */ (function (_super) {
    __extends(GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics, _super);
    function GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auprc" }),
        __metadata("design:type", Number)
    ], GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics.prototype, "auprc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auprcExact" }),
        __metadata("design:type", Number)
    ], GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics.prototype, "auprcExact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=confidenceLevelMetrics", elemType: GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics.prototype, "confidenceLevelMetrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=confidenceLevelMetricsExact", elemType: GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics.prototype, "confidenceLevelMetricsExact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=estimatedCalibrationError" }),
        __metadata("design:type", Number)
    ], GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics.prototype, "estimatedCalibrationError", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=estimatedCalibrationErrorExact" }),
        __metadata("design:type", Number)
    ], GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics.prototype, "estimatedCalibrationErrorExact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metricsType" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics.prototype, "metricsType", void 0);
    return GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics;
}(SpeakeasyBase));
export { GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics };
