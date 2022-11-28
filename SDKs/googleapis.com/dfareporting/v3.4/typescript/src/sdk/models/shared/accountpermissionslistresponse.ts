import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountPermission } from "./accountpermission";



// AccountPermissionsListResponse
/** 
 * Account Permission List Response
**/
export class AccountPermissionsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountPermissions", elemType: AccountPermission })
  accountPermissions?: AccountPermission[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
