import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1SentimentData } from "./googlecloudcontactcenterinsightsv1sentimentdata";
export declare enum GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnum {
    MentionTypeUnspecified = "MENTION_TYPE_UNSPECIFIED",
    Proper = "PROPER",
    Common = "COMMON"
}
/**
 * The data for an entity mention annotation. This represents a mention of an `Entity` in the conversation.
**/
export declare class GoogleCloudContactcenterinsightsV1EntityMentionData extends SpeakeasyBase {
    entityUniqueId?: string;
    sentiment?: GoogleCloudContactcenterinsightsV1SentimentData;
    type?: GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnum;
}
