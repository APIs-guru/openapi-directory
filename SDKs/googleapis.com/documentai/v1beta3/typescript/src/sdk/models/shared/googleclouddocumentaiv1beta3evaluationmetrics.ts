import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDocumentaiV1beta3EvaluationMetrics
/** 
 * Evaluation metrics, either in aggregate or about a specific entity.
**/
export class GoogleCloudDocumentaiV1beta3EvaluationMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=f1Score" })
  f1Score?: number;

  @SpeakeasyMetadata({ data: "json, name=falseNegativesCount" })
  falseNegativesCount?: number;

  @SpeakeasyMetadata({ data: "json, name=falsePositivesCount" })
  falsePositivesCount?: number;

  @SpeakeasyMetadata({ data: "json, name=groundTruthDocumentCount" })
  groundTruthDocumentCount?: number;

  @SpeakeasyMetadata({ data: "json, name=groundTruthOccurrencesCount" })
  groundTruthOccurrencesCount?: number;

  @SpeakeasyMetadata({ data: "json, name=precision" })
  precision?: number;

  @SpeakeasyMetadata({ data: "json, name=predictedDocumentCount" })
  predictedDocumentCount?: number;

  @SpeakeasyMetadata({ data: "json, name=predictedOccurrencesCount" })
  predictedOccurrencesCount?: number;

  @SpeakeasyMetadata({ data: "json, name=recall" })
  recall?: number;

  @SpeakeasyMetadata({ data: "json, name=totalDocumentsCount" })
  totalDocumentsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=truePositivesCount" })
  truePositivesCount?: number;
}
