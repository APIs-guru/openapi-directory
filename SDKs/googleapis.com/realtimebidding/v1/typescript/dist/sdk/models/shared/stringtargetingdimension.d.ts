import { SpeakeasyBase } from "../../../internal/utils";
export declare enum StringTargetingDimensionTargetingModeEnum {
    TargetingModeUnspecified = "TARGETING_MODE_UNSPECIFIED",
    Inclusive = "INCLUSIVE",
    Exclusive = "EXCLUSIVE"
}
/**
 * Generic targeting with string values used in app, website and publisher targeting.
**/
export declare class StringTargetingDimension extends SpeakeasyBase {
    targetingMode?: StringTargetingDimensionTargetingModeEnum;
    values?: string[];
}
