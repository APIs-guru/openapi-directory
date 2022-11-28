import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountPermissionGroup } from "./accountpermissiongroup";



// AccountPermissionGroupsListResponse
/** 
 * Account Permission Group List Response
**/
export class AccountPermissionGroupsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountPermissionGroups", elemType: AccountPermissionGroup })
  accountPermissionGroups?: AccountPermissionGroup[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
