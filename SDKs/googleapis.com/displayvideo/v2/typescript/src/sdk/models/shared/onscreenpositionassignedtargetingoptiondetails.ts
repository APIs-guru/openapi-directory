import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum OnScreenPositionAssignedTargetingOptionDetailsAdTypeEnum {
    AdTypeUnspecified = "AD_TYPE_UNSPECIFIED",
    AdTypeDisplay = "AD_TYPE_DISPLAY",
    AdTypeVideo = "AD_TYPE_VIDEO",
    AdTypeAudio = "AD_TYPE_AUDIO"
}

export enum OnScreenPositionAssignedTargetingOptionDetailsOnScreenPositionEnum {
    OnScreenPositionUnspecified = "ON_SCREEN_POSITION_UNSPECIFIED",
    OnScreenPositionUnknown = "ON_SCREEN_POSITION_UNKNOWN",
    OnScreenPositionAboveTheFold = "ON_SCREEN_POSITION_ABOVE_THE_FOLD",
    OnScreenPositionBelowTheFold = "ON_SCREEN_POSITION_BELOW_THE_FOLD"
}


// OnScreenPositionAssignedTargetingOptionDetails
/** 
 * On screen position targeting option details. This will be populated in the on_screen_position_details field when targeting_type is `TARGETING_TYPE_ON_SCREEN_POSITION`.
**/
export class OnScreenPositionAssignedTargetingOptionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adType" })
  adType?: OnScreenPositionAssignedTargetingOptionDetailsAdTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=onScreenPosition" })
  onScreenPosition?: OnScreenPositionAssignedTargetingOptionDetailsOnScreenPositionEnum;

  @SpeakeasyMetadata({ data: "json, name=targetingOptionId" })
  targetingOptionId?: string;
}


// OnScreenPositionAssignedTargetingOptionDetailsInput
/** 
 * On screen position targeting option details. This will be populated in the on_screen_position_details field when targeting_type is `TARGETING_TYPE_ON_SCREEN_POSITION`.
**/
export class OnScreenPositionAssignedTargetingOptionDetailsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=targetingOptionId" })
  targetingOptionId?: string;
}
