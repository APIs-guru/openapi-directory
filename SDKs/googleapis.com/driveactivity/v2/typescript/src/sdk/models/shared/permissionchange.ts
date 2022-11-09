import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Permission } from "./permission";
import { Permission } from "./permission";


// PermissionChange
/** 
 * A change of the permission setting on an item.
**/
export class PermissionChange extends SpeakeasyBase {
  @Metadata({ data: "json, name=addedPermissions", elemType: shared.Permission })
  addedPermissions?: Permission[];

  @Metadata({ data: "json, name=removedPermissions", elemType: shared.Permission })
  removedPermissions?: Permission[];
}
