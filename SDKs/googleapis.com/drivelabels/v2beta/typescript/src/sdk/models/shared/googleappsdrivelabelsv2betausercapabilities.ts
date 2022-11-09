import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAppsDriveLabelsV2betaUserCapabilities
/** 
 * The capabilities of a user.
**/
export class GoogleAppsDriveLabelsV2betaUserCapabilities extends SpeakeasyBase {
  @Metadata({ data: "json, name=canAccessLabelManager" })
  canAccessLabelManager?: boolean;

  @Metadata({ data: "json, name=canAdministrateLabels" })
  canAdministrateLabels?: boolean;

  @Metadata({ data: "json, name=canCreateAdminLabels" })
  canCreateAdminLabels?: boolean;

  @Metadata({ data: "json, name=canCreateSharedLabels" })
  canCreateSharedLabels?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
