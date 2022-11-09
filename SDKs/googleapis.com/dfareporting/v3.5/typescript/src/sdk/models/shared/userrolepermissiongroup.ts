import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UserRolePermissionGroup
/** 
 * Represents a grouping of related user role permissions.
**/
export class UserRolePermissionGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
