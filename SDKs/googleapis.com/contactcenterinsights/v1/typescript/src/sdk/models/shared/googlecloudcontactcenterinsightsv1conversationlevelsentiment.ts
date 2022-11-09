import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudContactcenterinsightsV1SentimentData } from "./googlecloudcontactcenterinsightsv1sentimentdata";


// GoogleCloudContactcenterinsightsV1ConversationLevelSentiment
/** 
 * One channel of conversation-level sentiment data.
**/
export class GoogleCloudContactcenterinsightsV1ConversationLevelSentiment extends SpeakeasyBase {
  @Metadata({ data: "json, name=channelTag" })
  channelTag?: number;

  @Metadata({ data: "json, name=sentimentData" })
  sentimentData?: GoogleCloudContactcenterinsightsV1SentimentData;
}
