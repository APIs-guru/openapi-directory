import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics } from "./googleclouddocumentaiv1beta3evaluationconfidencelevelmetrics";
export declare enum GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetricsMetricsTypeEnum {
    MetricsTypeUnspecified = "METRICS_TYPE_UNSPECIFIED",
    Aggregate = "AGGREGATE"
}
/**
 * Metrics across multiple confidence levels.
**/
export declare class GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics extends SpeakeasyBase {
    auprc?: number;
    auprcExact?: number;
    confidenceLevelMetrics?: GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics[];
    confidenceLevelMetricsExact?: GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics[];
    estimatedCalibrationError?: number;
    estimatedCalibrationErrorExact?: number;
    metricsType?: GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetricsMetricsTypeEnum;
}
