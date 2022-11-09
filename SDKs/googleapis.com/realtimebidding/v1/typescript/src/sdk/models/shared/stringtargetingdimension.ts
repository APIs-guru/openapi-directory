import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum StringTargetingDimensionTargetingModeEnum {
    TargetingModeUnspecified = "TARGETING_MODE_UNSPECIFIED"
,    Inclusive = "INCLUSIVE"
,    Exclusive = "EXCLUSIVE"
}


// StringTargetingDimension
/** 
 * Generic targeting with string values used in app, website and publisher targeting.
**/
export class StringTargetingDimension extends SpeakeasyBase {
  @Metadata({ data: "json, name=targetingMode" })
  targetingMode?: StringTargetingDimensionTargetingModeEnum;

  @Metadata({ data: "json, name=values" })
  values?: string[];
}
