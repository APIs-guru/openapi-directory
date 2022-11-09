import { SpeakeasyBase } from "../../../internal/utils/utils";
import { MatterPermission } from "./matterpermission";
/**
 * Add an account with the permission specified. The role cannot be owner. If an account already has a role in the matter, the existing role is overwritten.
**/
export declare class AddMatterPermissionsRequest extends SpeakeasyBase {
    ccMe?: boolean;
    matterPermission?: MatterPermission;
    sendEmails?: boolean;
}
