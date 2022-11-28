import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ContentOutstreamPositionAssignedTargetingOptionDetailsAdTypeEnum {
    AdTypeUnspecified = "AD_TYPE_UNSPECIFIED",
    AdTypeDisplay = "AD_TYPE_DISPLAY",
    AdTypeVideo = "AD_TYPE_VIDEO",
    AdTypeAudio = "AD_TYPE_AUDIO"
}
export declare enum ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum {
    ContentOutstreamPositionUnspecified = "CONTENT_OUTSTREAM_POSITION_UNSPECIFIED",
    ContentOutstreamPositionUnknown = "CONTENT_OUTSTREAM_POSITION_UNKNOWN",
    ContentOutstreamPositionInArticle = "CONTENT_OUTSTREAM_POSITION_IN_ARTICLE",
    ContentOutstreamPositionInBanner = "CONTENT_OUTSTREAM_POSITION_IN_BANNER",
    ContentOutstreamPositionInFeed = "CONTENT_OUTSTREAM_POSITION_IN_FEED",
    ContentOutstreamPositionInterstitial = "CONTENT_OUTSTREAM_POSITION_INTERSTITIAL"
}
/**
 * Assigned content outstream position targeting option details. This will be populated in the content_outstream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION`.
**/
export declare class ContentOutstreamPositionAssignedTargetingOptionDetailsInput extends SpeakeasyBase {
    contentOutstreamPosition?: ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum;
    targetingOptionId?: string;
}
/**
 * Assigned content outstream position targeting option details. This will be populated in the content_outstream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION`.
**/
export declare class ContentOutstreamPositionAssignedTargetingOptionDetails extends SpeakeasyBase {
    adType?: ContentOutstreamPositionAssignedTargetingOptionDetailsAdTypeEnum;
    contentOutstreamPosition?: ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum;
    targetingOptionId?: string;
}
