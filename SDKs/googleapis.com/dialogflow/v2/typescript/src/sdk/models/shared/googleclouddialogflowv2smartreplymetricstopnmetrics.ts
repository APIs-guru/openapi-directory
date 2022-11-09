import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics
/** 
 * Evaluation metrics when retrieving `n` smart replies with the model.
**/
export class GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=n" })
  n?: number;

  @Metadata({ data: "json, name=recall" })
  recall?: number;
}
