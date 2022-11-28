import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccountPermissionGroup
/** 
 * AccountPermissionGroups contains a mapping of permission group IDs to names. A permission group is a grouping of account permissions.
**/
export class AccountPermissionGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
