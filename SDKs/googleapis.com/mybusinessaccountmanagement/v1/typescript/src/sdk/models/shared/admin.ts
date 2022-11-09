import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AdminRoleEnum {
    AdminRoleUnspecified = "ADMIN_ROLE_UNSPECIFIED"
,    PrimaryOwner = "PRIMARY_OWNER"
,    Owner = "OWNER"
,    Manager = "MANAGER"
,    SiteManager = "SITE_MANAGER"
}


// Admin
/** 
 * An administrator of an Account or a location.
**/
export class Admin extends SpeakeasyBase {
  @Metadata({ data: "json, name=account" })
  account?: string;

  @Metadata({ data: "json, name=admin" })
  admin?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pendingInvitation" })
  pendingInvitation?: boolean;

  @Metadata({ data: "json, name=role" })
  role?: AdminRoleEnum;
}
