import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Role } from "./role";



// CreateRoleRequest
/** 
 * The request to create a new role.
**/
export class CreateRoleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: Role;

  @SpeakeasyMetadata({ data: "json, name=roleId" })
  roleId?: string;
}
