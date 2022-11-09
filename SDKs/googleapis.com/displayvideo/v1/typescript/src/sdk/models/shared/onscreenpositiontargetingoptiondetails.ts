import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum OnScreenPositionTargetingOptionDetailsOnScreenPositionEnum {
    OnScreenPositionUnspecified = "ON_SCREEN_POSITION_UNSPECIFIED"
,    OnScreenPositionUnknown = "ON_SCREEN_POSITION_UNKNOWN"
,    OnScreenPositionAboveTheFold = "ON_SCREEN_POSITION_ABOVE_THE_FOLD"
,    OnScreenPositionBelowTheFold = "ON_SCREEN_POSITION_BELOW_THE_FOLD"
}


// OnScreenPositionTargetingOptionDetails
/** 
 * Represents a targetable on screen position, which could be used by display and video ads. This will be populated in the on_screen_position_details field when targeting_type is `TARGETING_TYPE_ON_SCREEN_POSITION`.
**/
export class OnScreenPositionTargetingOptionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=onScreenPosition" })
  onScreenPosition?: OnScreenPositionTargetingOptionDetailsOnScreenPositionEnum;
}
