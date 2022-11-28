import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics } from "./googleclouddocumentaiv1beta3evaluationmulticonfidencemetrics";
import { GoogleCloudDocumentaiV1beta3EvaluationCounters } from "./googleclouddocumentaiv1beta3evaluationcounters";



// GoogleCloudDocumentaiV1beta3Evaluation
/** 
 * An evaluation of a ProcessorVersion's performance.
**/
export class GoogleCloudDocumentaiV1beta3Evaluation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allEntitiesMetrics" })
  allEntitiesMetrics?: GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=documentCounters" })
  documentCounters?: GoogleCloudDocumentaiV1beta3EvaluationCounters;

  @SpeakeasyMetadata({ data: "json, name=entityMetrics", elemType: GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics })
  entityMetrics?: Map<string, GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics>;

  @SpeakeasyMetadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;

  @SpeakeasyMetadata({ data: "json, name=kmsKeyVersionName" })
  kmsKeyVersionName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
