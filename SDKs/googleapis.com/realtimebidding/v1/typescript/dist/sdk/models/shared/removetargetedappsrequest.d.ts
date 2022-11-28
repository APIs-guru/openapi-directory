import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A request to stop targeting the provided apps in a specific pretargeting configuration. The pretargeting configuration itself specifies how these apps are targeted. in PretargetingConfig.appTargeting.mobileAppTargeting.
**/
export declare class RemoveTargetedAppsRequest extends SpeakeasyBase {
    appIds?: string[];
}
