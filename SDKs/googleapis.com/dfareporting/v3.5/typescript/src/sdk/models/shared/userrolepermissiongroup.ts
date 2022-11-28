import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserRolePermissionGroup
/** 
 * Represents a grouping of related user role permissions.
**/
export class UserRolePermissionGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
