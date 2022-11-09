import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ContentInstreamPositionAssignedTargetingOptionDetailsAdTypeEnum {
    AdTypeUnspecified = "AD_TYPE_UNSPECIFIED"
,    AdTypeDisplay = "AD_TYPE_DISPLAY"
,    AdTypeVideo = "AD_TYPE_VIDEO"
,    AdTypeAudio = "AD_TYPE_AUDIO"
}

export enum ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum {
    ContentInstreamPositionUnspecified = "CONTENT_INSTREAM_POSITION_UNSPECIFIED"
,    ContentInstreamPositionPreRoll = "CONTENT_INSTREAM_POSITION_PRE_ROLL"
,    ContentInstreamPositionMidRoll = "CONTENT_INSTREAM_POSITION_MID_ROLL"
,    ContentInstreamPositionPostRoll = "CONTENT_INSTREAM_POSITION_POST_ROLL"
,    ContentInstreamPositionUnknown = "CONTENT_INSTREAM_POSITION_UNKNOWN"
}


// ContentInstreamPositionAssignedTargetingOptionDetails
/** 
 * Assigned content instream position targeting option details. This will be populated in the content_instream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_INSTREAM_POSITION`.
**/
export class ContentInstreamPositionAssignedTargetingOptionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=adType" })
  adType?: ContentInstreamPositionAssignedTargetingOptionDetailsAdTypeEnum;

  @Metadata({ data: "json, name=contentInstreamPosition" })
  contentInstreamPosition?: ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum;

  @Metadata({ data: "json, name=targetingOptionId" })
  targetingOptionId?: string;
}
