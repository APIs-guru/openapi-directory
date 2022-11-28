import { SpeakeasyBase } from "../../../internal/utils";
import { UserPermission } from "./userpermission";
/**
 * List user permissions response.
**/
export declare class ListUserPermissionsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    userPermission?: UserPermission[];
}
