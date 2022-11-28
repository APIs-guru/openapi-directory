import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserRolePermission } from "./userrolepermission";



// UserRole
/** 
 * Contains properties of auser role, which is used to manage user access.
**/
export class UserRole extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultUserRole" })
  defaultUserRole?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parentUserRoleId" })
  parentUserRoleId?: string;

  @SpeakeasyMetadata({ data: "json, name=permissions", elemType: UserRolePermission })
  permissions?: UserRolePermission[];

  @SpeakeasyMetadata({ data: "json, name=subaccountId" })
  subaccountId?: string;
}
