import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1SentimentData } from "./googlecloudcontactcenterinsightsv1sentimentdata";


export enum GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnum {
    MentionTypeUnspecified = "MENTION_TYPE_UNSPECIFIED",
    Proper = "PROPER",
    Common = "COMMON"
}


// GoogleCloudContactcenterinsightsV1EntityMentionData
/** 
 * The data for an entity mention annotation. This represents a mention of an `Entity` in the conversation.
**/
export class GoogleCloudContactcenterinsightsV1EntityMentionData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entityUniqueId" })
  entityUniqueId?: string;

  @SpeakeasyMetadata({ data: "json, name=sentiment" })
  sentiment?: GoogleCloudContactcenterinsightsV1SentimentData;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnum;
}
