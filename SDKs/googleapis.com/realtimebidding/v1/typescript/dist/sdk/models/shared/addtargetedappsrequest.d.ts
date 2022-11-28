import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AddTargetedAppsRequestTargetingModeEnum {
    TargetingModeUnspecified = "TARGETING_MODE_UNSPECIFIED",
    Inclusive = "INCLUSIVE",
    Exclusive = "EXCLUSIVE"
}
/**
 * A request to start targeting the provided app IDs in a specific pretargeting configuration. The pretargeting configuration itself specifies how these apps are targeted. in PretargetingConfig.appTargeting.mobileAppTargeting.
**/
export declare class AddTargetedAppsRequest extends SpeakeasyBase {
    appIds?: string[];
    targetingMode?: AddTargetedAppsRequestTargetingModeEnum;
}
