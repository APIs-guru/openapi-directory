import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAppsDriveLabelsV2betaUserCapabilities
/** 
 * The capabilities of a user.
**/
export class GoogleAppsDriveLabelsV2betaUserCapabilities extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canAccessLabelManager" })
  canAccessLabelManager?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canAdministrateLabels" })
  canAdministrateLabels?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canCreateAdminLabels" })
  canCreateAdminLabels?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canCreateSharedLabels" })
  canCreateSharedLabels?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
