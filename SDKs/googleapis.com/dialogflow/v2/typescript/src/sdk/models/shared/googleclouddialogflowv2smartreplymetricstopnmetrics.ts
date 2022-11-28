import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics
/** 
 * Evaluation metrics when retrieving `n` smart replies with the model.
**/
export class GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=n" })
  n?: number;

  @SpeakeasyMetadata({ data: "json, name=recall" })
  recall?: number;
}
