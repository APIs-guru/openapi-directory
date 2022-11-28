import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatalabelingV1beta1SentimentConfig
/** 
 * Config for setting up sentiments.
**/
export class GoogleCloudDatalabelingV1beta1SentimentConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableLabelSentimentSelection" })
  enableLabelSentimentSelection?: boolean;
}
