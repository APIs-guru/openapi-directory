import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ContentOutstreamPositionAssignedTargetingOptionDetailsAdTypeEnum {
    AdTypeUnspecified = "AD_TYPE_UNSPECIFIED",
    AdTypeDisplay = "AD_TYPE_DISPLAY",
    AdTypeVideo = "AD_TYPE_VIDEO",
    AdTypeAudio = "AD_TYPE_AUDIO"
}

export enum ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum {
    ContentOutstreamPositionUnspecified = "CONTENT_OUTSTREAM_POSITION_UNSPECIFIED",
    ContentOutstreamPositionUnknown = "CONTENT_OUTSTREAM_POSITION_UNKNOWN",
    ContentOutstreamPositionInArticle = "CONTENT_OUTSTREAM_POSITION_IN_ARTICLE",
    ContentOutstreamPositionInBanner = "CONTENT_OUTSTREAM_POSITION_IN_BANNER",
    ContentOutstreamPositionInFeed = "CONTENT_OUTSTREAM_POSITION_IN_FEED",
    ContentOutstreamPositionInterstitial = "CONTENT_OUTSTREAM_POSITION_INTERSTITIAL"
}


// ContentOutstreamPositionAssignedTargetingOptionDetailsInput
/** 
 * Assigned content outstream position targeting option details. This will be populated in the content_outstream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION`.
**/
export class ContentOutstreamPositionAssignedTargetingOptionDetailsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentOutstreamPosition" })
  contentOutstreamPosition?: ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum;

  @SpeakeasyMetadata({ data: "json, name=targetingOptionId" })
  targetingOptionId?: string;
}


// ContentOutstreamPositionAssignedTargetingOptionDetails
/** 
 * Assigned content outstream position targeting option details. This will be populated in the content_outstream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION`.
**/
export class ContentOutstreamPositionAssignedTargetingOptionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adType" })
  adType?: ContentOutstreamPositionAssignedTargetingOptionDetailsAdTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=contentOutstreamPosition" })
  contentOutstreamPosition?: ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum;

  @SpeakeasyMetadata({ data: "json, name=targetingOptionId" })
  targetingOptionId?: string;
}
