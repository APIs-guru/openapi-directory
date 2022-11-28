import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Permission } from "./permission";



// PermissionChange
/** 
 * A change of the permission setting on an item.
**/
export class PermissionChange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addedPermissions", elemType: Permission })
  addedPermissions?: Permission[];

  @SpeakeasyMetadata({ data: "json, name=removedPermissions", elemType: Permission })
  removedPermissions?: Permission[];
}
