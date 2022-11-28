import { SpeakeasyBase } from "../../../internal/utils";
import { Name } from "./name";
import { GlobalPermission } from "./globalpermission";
/**
 * Global information for a user.
**/
export declare class UserProfile extends SpeakeasyBase {
    emailAddress?: string;
    id?: string;
    name?: Name;
    permissions?: GlobalPermission[];
    photoUrl?: string;
    verifiedTeacher?: boolean;
}
