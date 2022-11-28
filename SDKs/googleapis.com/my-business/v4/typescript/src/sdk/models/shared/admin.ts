import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AdminRoleEnum {
    AdminRoleUnspecified = "ADMIN_ROLE_UNSPECIFIED",
    Owner = "OWNER",
    CoOwner = "CO_OWNER",
    Manager = "MANAGER",
    CommunityManager = "COMMUNITY_MANAGER"
}


// Admin
/** 
 * An administrator of an Account or a Location.
**/
export class Admin extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adminName" })
  adminName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pendingInvitation" })
  pendingInvitation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: AdminRoleEnum;
}
