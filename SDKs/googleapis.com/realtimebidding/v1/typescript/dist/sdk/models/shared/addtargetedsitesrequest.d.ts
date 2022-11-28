import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AddTargetedSitesRequestTargetingModeEnum {
    TargetingModeUnspecified = "TARGETING_MODE_UNSPECIFIED",
    Inclusive = "INCLUSIVE",
    Exclusive = "EXCLUSIVE"
}
/**
 * A request to start targeting the provided sites in a specific pretargeting configuration. The pretargeting configuration itself specifies how these sites are targeted in PretargetingConfig.webTargeting.
**/
export declare class AddTargetedSitesRequest extends SpeakeasyBase {
    sites?: string[];
    targetingMode?: AddTargetedSitesRequestTargetingModeEnum;
}
