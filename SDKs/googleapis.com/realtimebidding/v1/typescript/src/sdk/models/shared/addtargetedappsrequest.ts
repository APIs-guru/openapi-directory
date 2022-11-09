import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AddTargetedAppsRequestTargetingModeEnum {
    TargetingModeUnspecified = "TARGETING_MODE_UNSPECIFIED"
,    Inclusive = "INCLUSIVE"
,    Exclusive = "EXCLUSIVE"
}


// AddTargetedAppsRequest
/** 
 * A request to start targeting the provided app IDs in a specific pretargeting configuration. The pretargeting configuration itself specifies how these apps are targeted. in PretargetingConfig.appTargeting.mobileAppTargeting.
**/
export class AddTargetedAppsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=appIds" })
  appIds?: string[];

  @Metadata({ data: "json, name=targetingMode" })
  targetingMode?: AddTargetedAppsRequestTargetingModeEnum;
}
