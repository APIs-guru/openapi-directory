import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserRolePermission } from "./userrolepermission";


// UserRole
/** 
 * Contains properties of auser role, which is used to manage user access.
**/
export class UserRole extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=defaultUserRole" })
  defaultUserRole?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parentUserRoleId" })
  parentUserRoleId?: string;

  @Metadata({ data: "json, name=permissions", elemType: shared.UserRolePermission })
  permissions?: UserRolePermission[];

  @Metadata({ data: "json, name=subaccountId" })
  subaccountId?: string;
}
