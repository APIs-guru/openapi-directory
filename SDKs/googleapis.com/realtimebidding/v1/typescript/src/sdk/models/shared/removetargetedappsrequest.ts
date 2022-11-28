import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RemoveTargetedAppsRequest
/** 
 * A request to stop targeting the provided apps in a specific pretargeting configuration. The pretargeting configuration itself specifies how these apps are targeted. in PretargetingConfig.appTargeting.mobileAppTargeting.
**/
export class RemoveTargetedAppsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appIds" })
  appIds?: string[];
}
