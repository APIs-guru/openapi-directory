import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum StringTargetingDimensionTargetingModeEnum {
    TargetingModeUnspecified = "TARGETING_MODE_UNSPECIFIED",
    Inclusive = "INCLUSIVE",
    Exclusive = "EXCLUSIVE"
}


// StringTargetingDimension
/** 
 * Generic targeting with string values used in app, website and publisher targeting.
**/
export class StringTargetingDimension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=targetingMode" })
  targetingMode?: StringTargetingDimensionTargetingModeEnum;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
