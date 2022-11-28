import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AdminRoleEnum {
    AdminRoleUnspecified = "ADMIN_ROLE_UNSPECIFIED",
    PrimaryOwner = "PRIMARY_OWNER",
    Owner = "OWNER",
    Manager = "MANAGER",
    SiteManager = "SITE_MANAGER"
}


// Admin
/** 
 * An administrator of an Account or a location.
**/
export class Admin extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: string;

  @SpeakeasyMetadata({ data: "json, name=admin" })
  admin?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pendingInvitation" })
  pendingInvitation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: AdminRoleEnum;
}


// AdminInput
/** 
 * An administrator of an Account or a location.
**/
export class AdminInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: string;

  @SpeakeasyMetadata({ data: "json, name=admin" })
  admin?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: AdminRoleEnum;
}
