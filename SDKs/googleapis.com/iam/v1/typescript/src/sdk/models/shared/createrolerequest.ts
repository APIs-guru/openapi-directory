import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Role } from "./role";


// CreateRoleRequest
/** 
 * The request to create a new role.
**/
export class CreateRoleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=role" })
  role?: Role;

  @Metadata({ data: "json, name=roleId" })
  roleId?: string;
}
