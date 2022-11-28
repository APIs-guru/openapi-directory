import { SpeakeasyBase } from "../../../internal/utils";
import { Role } from "./role";
/**
 * The request to create a new role.
**/
export declare class CreateRoleRequest extends SpeakeasyBase {
    role?: Role;
    roleId?: string;
}
