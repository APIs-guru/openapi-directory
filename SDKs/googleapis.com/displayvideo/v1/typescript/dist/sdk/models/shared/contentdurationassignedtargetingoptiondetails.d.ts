import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ContentDurationAssignedTargetingOptionDetailsContentDurationEnum {
    ContentDurationUnspecified = "CONTENT_DURATION_UNSPECIFIED",
    ContentDurationUnknown = "CONTENT_DURATION_UNKNOWN",
    ContentDuration0To1Min = "CONTENT_DURATION_0_TO_1_MIN",
    ContentDuration1To5Min = "CONTENT_DURATION_1_TO_5_MIN",
    ContentDuration5To15Min = "CONTENT_DURATION_5_TO_15_MIN",
    ContentDuration15To30Min = "CONTENT_DURATION_15_TO_30_MIN",
    ContentDuration30To60Min = "CONTENT_DURATION_30_TO_60_MIN",
    ContentDurationOver60Min = "CONTENT_DURATION_OVER_60_MIN"
}
/**
 * Details for content duration assigned targeting option. This will be populated in the content_duration_details field when targeting_type is `TARGETING_TYPE_CONTENT_DURATION`. Explicitly targeting all options is not supported. Remove all content duration targeting options to achieve this effect.
**/
export declare class ContentDurationAssignedTargetingOptionDetailsInput extends SpeakeasyBase {
    targetingOptionId?: string;
}
/**
 * Details for content duration assigned targeting option. This will be populated in the content_duration_details field when targeting_type is `TARGETING_TYPE_CONTENT_DURATION`. Explicitly targeting all options is not supported. Remove all content duration targeting options to achieve this effect.
**/
export declare class ContentDurationAssignedTargetingOptionDetails extends SpeakeasyBase {
    contentDuration?: ContentDurationAssignedTargetingOptionDetailsContentDurationEnum;
    targetingOptionId?: string;
}
