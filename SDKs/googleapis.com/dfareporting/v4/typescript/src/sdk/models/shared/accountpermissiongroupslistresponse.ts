import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccountPermissionGroup } from "./accountpermissiongroup";


// AccountPermissionGroupsListResponse
/** 
 * Account Permission Group List Response
**/
export class AccountPermissionGroupsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountPermissionGroups", elemType: shared.AccountPermissionGroup })
  accountPermissionGroups?: AccountPermissionGroup[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
