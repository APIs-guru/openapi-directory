import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ContentInstreamPositionTargetingOptionDetailsContentInstreamPositionEnum {
    ContentInstreamPositionUnspecified = "CONTENT_INSTREAM_POSITION_UNSPECIFIED",
    ContentInstreamPositionPreRoll = "CONTENT_INSTREAM_POSITION_PRE_ROLL",
    ContentInstreamPositionMidRoll = "CONTENT_INSTREAM_POSITION_MID_ROLL",
    ContentInstreamPositionPostRoll = "CONTENT_INSTREAM_POSITION_POST_ROLL",
    ContentInstreamPositionUnknown = "CONTENT_INSTREAM_POSITION_UNKNOWN"
}
/**
 * Represents a targetable content instream position, which could be used by video and audio ads. This will be populated in the content_instream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_INSTREAM_POSITION`.
**/
export declare class ContentInstreamPositionTargetingOptionDetails extends SpeakeasyBase {
    contentInstreamPosition?: ContentInstreamPositionTargetingOptionDetailsContentInstreamPositionEnum;
}
