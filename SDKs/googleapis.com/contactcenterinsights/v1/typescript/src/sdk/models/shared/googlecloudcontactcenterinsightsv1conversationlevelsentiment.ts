import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1SentimentData } from "./googlecloudcontactcenterinsightsv1sentimentdata";



// GoogleCloudContactcenterinsightsV1ConversationLevelSentiment
/** 
 * One channel of conversation-level sentiment data.
**/
export class GoogleCloudContactcenterinsightsV1ConversationLevelSentiment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelTag" })
  channelTag?: number;

  @SpeakeasyMetadata({ data: "json, name=sentimentData" })
  sentimentData?: GoogleCloudContactcenterinsightsV1SentimentData;
}
