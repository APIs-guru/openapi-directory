import { SpeakeasyBase } from "../../../internal/utils";
import { Permission } from "./permission";
/**
 * A change of the permission setting on an item.
**/
export declare class PermissionChange extends SpeakeasyBase {
    addedPermissions?: Permission[];
    removedPermissions?: Permission[];
}
