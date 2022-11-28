import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics } from "./googleclouddocumentaiv1beta3evaluationmulticonfidencemetrics";
import { GoogleCloudDocumentaiV1beta3EvaluationCounters } from "./googleclouddocumentaiv1beta3evaluationcounters";
/**
 * An evaluation of a ProcessorVersion's performance.
**/
export declare class GoogleCloudDocumentaiV1beta3Evaluation extends SpeakeasyBase {
    allEntitiesMetrics?: GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics;
    createTime?: string;
    documentCounters?: GoogleCloudDocumentaiV1beta3EvaluationCounters;
    entityMetrics?: Map<string, GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics>;
    kmsKeyName?: string;
    kmsKeyVersionName?: string;
    name?: string;
}
