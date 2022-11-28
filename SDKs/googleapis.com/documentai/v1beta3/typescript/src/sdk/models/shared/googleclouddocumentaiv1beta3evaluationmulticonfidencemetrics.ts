import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics } from "./googleclouddocumentaiv1beta3evaluationconfidencelevelmetrics";


export enum GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetricsMetricsTypeEnum {
    MetricsTypeUnspecified = "METRICS_TYPE_UNSPECIFIED",
    Aggregate = "AGGREGATE"
}


// GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics
/** 
 * Metrics across multiple confidence levels.
**/
export class GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auprc" })
  auprc?: number;

  @SpeakeasyMetadata({ data: "json, name=auprcExact" })
  auprcExact?: number;

  @SpeakeasyMetadata({ data: "json, name=confidenceLevelMetrics", elemType: GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics })
  confidenceLevelMetrics?: GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics[];

  @SpeakeasyMetadata({ data: "json, name=confidenceLevelMetricsExact", elemType: GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics })
  confidenceLevelMetricsExact?: GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics[];

  @SpeakeasyMetadata({ data: "json, name=estimatedCalibrationError" })
  estimatedCalibrationError?: number;

  @SpeakeasyMetadata({ data: "json, name=estimatedCalibrationErrorExact" })
  estimatedCalibrationErrorExact?: number;

  @SpeakeasyMetadata({ data: "json, name=metricsType" })
  metricsType?: GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetricsMetricsTypeEnum;
}
