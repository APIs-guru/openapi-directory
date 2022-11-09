import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccountPermission } from "./accountpermission";


// AccountPermissionsListResponse
/** 
 * Account Permission List Response
**/
export class AccountPermissionsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountPermissions", elemType: shared.AccountPermission })
  accountPermissions?: AccountPermission[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
