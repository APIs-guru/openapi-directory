import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ContentInstreamPositionAssignedTargetingOptionDetailsAdTypeEnum {
    AdTypeUnspecified = "AD_TYPE_UNSPECIFIED",
    AdTypeDisplay = "AD_TYPE_DISPLAY",
    AdTypeVideo = "AD_TYPE_VIDEO",
    AdTypeAudio = "AD_TYPE_AUDIO"
}
export declare enum ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum {
    ContentInstreamPositionUnspecified = "CONTENT_INSTREAM_POSITION_UNSPECIFIED",
    ContentInstreamPositionPreRoll = "CONTENT_INSTREAM_POSITION_PRE_ROLL",
    ContentInstreamPositionMidRoll = "CONTENT_INSTREAM_POSITION_MID_ROLL",
    ContentInstreamPositionPostRoll = "CONTENT_INSTREAM_POSITION_POST_ROLL",
    ContentInstreamPositionUnknown = "CONTENT_INSTREAM_POSITION_UNKNOWN"
}
/**
 * Assigned content instream position targeting option details. This will be populated in the content_instream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_INSTREAM_POSITION`.
**/
export declare class ContentInstreamPositionAssignedTargetingOptionDetailsInput extends SpeakeasyBase {
    contentInstreamPosition?: ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum;
}
/**
 * Assigned content instream position targeting option details. This will be populated in the content_instream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_INSTREAM_POSITION`.
**/
export declare class ContentInstreamPositionAssignedTargetingOptionDetails extends SpeakeasyBase {
    adType?: ContentInstreamPositionAssignedTargetingOptionDetailsAdTypeEnum;
    contentInstreamPosition?: ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum;
}
