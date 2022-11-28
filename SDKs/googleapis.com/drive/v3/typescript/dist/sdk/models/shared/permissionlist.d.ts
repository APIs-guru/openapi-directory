import { SpeakeasyBase } from "../../../internal/utils";
import { Permission } from "./permission";
/**
 * A list of permissions for a file.
**/
export declare class PermissionList extends SpeakeasyBase {
    kind?: string;
    nextPageToken?: string;
    permissions?: Permission[];
}
