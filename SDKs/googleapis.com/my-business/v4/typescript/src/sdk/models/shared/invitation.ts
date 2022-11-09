import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Account } from "./account";
import { TargetLocation } from "./targetlocation";

export enum InvitationRoleEnum {
    AdminRoleUnspecified = "ADMIN_ROLE_UNSPECIFIED"
,    Owner = "OWNER"
,    CoOwner = "CO_OWNER"
,    Manager = "MANAGER"
,    CommunityManager = "COMMUNITY_MANAGER"
}


// Invitation
/** 
 * Output only. Represents a pending invitation.
**/
export class Invitation extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=role" })
  role?: InvitationRoleEnum;

  @Metadata({ data: "json, name=targetAccount" })
  targetAccount?: Account;

  @Metadata({ data: "json, name=targetLocation" })
  targetLocation?: TargetLocation;
}
