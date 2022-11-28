import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MatterPermission } from "./matterpermission";



// AddMatterPermissionsRequest
/** 
 * Add an account with the permission specified. The role cannot be owner. If an account already has a role in the matter, the existing role is overwritten.
**/
export class AddMatterPermissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ccMe" })
  ccMe?: boolean;

  @SpeakeasyMetadata({ data: "json, name=matterPermission" })
  matterPermission?: MatterPermission;

  @SpeakeasyMetadata({ data: "json, name=sendEmails" })
  sendEmails?: boolean;
}
