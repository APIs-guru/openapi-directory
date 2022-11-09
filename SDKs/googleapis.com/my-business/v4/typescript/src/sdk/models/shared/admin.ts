import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AdminRoleEnum {
    AdminRoleUnspecified = "ADMIN_ROLE_UNSPECIFIED"
,    Owner = "OWNER"
,    CoOwner = "CO_OWNER"
,    Manager = "MANAGER"
,    CommunityManager = "COMMUNITY_MANAGER"
}


// Admin
/** 
 * An administrator of an Account or a Location.
**/
export class Admin extends SpeakeasyBase {
  @Metadata({ data: "json, name=adminName" })
  adminName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pendingInvitation" })
  pendingInvitation?: boolean;

  @Metadata({ data: "json, name=role" })
  role?: AdminRoleEnum;
}
