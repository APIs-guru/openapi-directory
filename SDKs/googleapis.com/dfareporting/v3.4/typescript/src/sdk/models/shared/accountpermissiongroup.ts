import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AccountPermissionGroup
/** 
 * AccountPermissionGroups contains a mapping of permission group IDs to names. A permission group is a grouping of account permissions.
**/
export class AccountPermissionGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
