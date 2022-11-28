import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Evaluation metrics, either in aggregate or about a specific entity.
**/
export declare class GoogleCloudDocumentaiV1beta3EvaluationMetrics extends SpeakeasyBase {
    f1Score?: number;
    falseNegativesCount?: number;
    falsePositivesCount?: number;
    groundTruthDocumentCount?: number;
    groundTruthOccurrencesCount?: number;
    precision?: number;
    predictedDocumentCount?: number;
    predictedOccurrencesCount?: number;
    recall?: number;
    totalDocumentsCount?: number;
    truePositivesCount?: number;
}
