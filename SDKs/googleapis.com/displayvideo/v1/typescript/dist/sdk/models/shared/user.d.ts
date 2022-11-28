import { SpeakeasyBase } from "../../../internal/utils";
import { AssignedUserRoleInput } from "./assigneduserrole";
import { AssignedUserRole } from "./assigneduserrole";
/**
 * A single user in Display & Video 360.
**/
export declare class UserInput extends SpeakeasyBase {
    assignedUserRoles?: AssignedUserRoleInput[];
    displayName?: string;
    email?: string;
}
/**
 * A single user in Display & Video 360.
**/
export declare class User extends SpeakeasyBase {
    assignedUserRoles?: AssignedUserRole[];
    displayName?: string;
    email?: string;
    name?: string;
    userId?: string;
}
