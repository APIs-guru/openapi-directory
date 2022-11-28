import { SpeakeasyBase } from "../../../internal/utils";
export declare enum OnScreenPositionTargetingOptionDetailsOnScreenPositionEnum {
    OnScreenPositionUnspecified = "ON_SCREEN_POSITION_UNSPECIFIED",
    OnScreenPositionUnknown = "ON_SCREEN_POSITION_UNKNOWN",
    OnScreenPositionAboveTheFold = "ON_SCREEN_POSITION_ABOVE_THE_FOLD",
    OnScreenPositionBelowTheFold = "ON_SCREEN_POSITION_BELOW_THE_FOLD"
}
/**
 * Represents a targetable on screen position, which could be used by display and video ads. This will be populated in the on_screen_position_details field when targeting_type is `TARGETING_TYPE_ON_SCREEN_POSITION`.
**/
export declare class OnScreenPositionTargetingOptionDetails extends SpeakeasyBase {
    onScreenPosition?: OnScreenPositionTargetingOptionDetailsOnScreenPositionEnum;
}
