import { SpeakeasyBase } from "../../../internal/utils";
export declare enum OnScreenPositionAssignedTargetingOptionDetailsAdTypeEnum {
    AdTypeUnspecified = "AD_TYPE_UNSPECIFIED",
    AdTypeDisplay = "AD_TYPE_DISPLAY",
    AdTypeVideo = "AD_TYPE_VIDEO",
    AdTypeAudio = "AD_TYPE_AUDIO"
}
export declare enum OnScreenPositionAssignedTargetingOptionDetailsOnScreenPositionEnum {
    OnScreenPositionUnspecified = "ON_SCREEN_POSITION_UNSPECIFIED",
    OnScreenPositionUnknown = "ON_SCREEN_POSITION_UNKNOWN",
    OnScreenPositionAboveTheFold = "ON_SCREEN_POSITION_ABOVE_THE_FOLD",
    OnScreenPositionBelowTheFold = "ON_SCREEN_POSITION_BELOW_THE_FOLD"
}
/**
 * On screen position targeting option details. This will be populated in the on_screen_position_details field when targeting_type is `TARGETING_TYPE_ON_SCREEN_POSITION`.
**/
export declare class OnScreenPositionAssignedTargetingOptionDetails extends SpeakeasyBase {
    adType?: OnScreenPositionAssignedTargetingOptionDetailsAdTypeEnum;
    onScreenPosition?: OnScreenPositionAssignedTargetingOptionDetailsOnScreenPositionEnum;
    targetingOptionId?: string;
}
/**
 * On screen position targeting option details. This will be populated in the on_screen_position_details field when targeting_type is `TARGETING_TYPE_ON_SCREEN_POSITION`.
**/
export declare class OnScreenPositionAssignedTargetingOptionDetailsInput extends SpeakeasyBase {
    targetingOptionId?: string;
}
