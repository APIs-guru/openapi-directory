import { SpeakeasyBase } from "../../../internal/utils";
import { UserRole } from "./userrole";
/**
 * User Role List Response
**/
export declare class UserRolesListResponse extends SpeakeasyBase {
    kind?: string;
    nextPageToken?: string;
    userRoles?: UserRole[];
}
