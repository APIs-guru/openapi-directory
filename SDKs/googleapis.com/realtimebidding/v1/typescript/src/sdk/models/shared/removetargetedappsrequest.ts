import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RemoveTargetedAppsRequest
/** 
 * A request to stop targeting the provided apps in a specific pretargeting configuration. The pretargeting configuration itself specifies how these apps are targeted. in PretargetingConfig.appTargeting.mobileAppTargeting.
**/
export class RemoveTargetedAppsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=appIds" })
  appIds?: string[];
}
