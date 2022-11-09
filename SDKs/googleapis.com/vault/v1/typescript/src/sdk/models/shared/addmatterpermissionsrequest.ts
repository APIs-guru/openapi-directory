import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MatterPermission } from "./matterpermission";


// AddMatterPermissionsRequest
/** 
 * Add an account with the permission specified. The role cannot be owner. If an account already has a role in the matter, the existing role is overwritten.
**/
export class AddMatterPermissionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ccMe" })
  ccMe?: boolean;

  @Metadata({ data: "json, name=matterPermission" })
  matterPermission?: MatterPermission;

  @Metadata({ data: "json, name=sendEmails" })
  sendEmails?: boolean;
}
