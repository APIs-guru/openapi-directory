import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3EvaluationMetrics } from "./googleclouddocumentaiv1beta3evaluationmetrics";



// GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics
/** 
 * Evaluations metrics, at a specific confidence level.
**/
export class GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidenceLevel" })
  confidenceLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics?: GoogleCloudDocumentaiV1beta3EvaluationMetrics;
}
