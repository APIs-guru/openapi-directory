import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
import { TargetLocation } from "./targetlocation";


export enum InvitationRoleEnum {
    AdminRoleUnspecified = "ADMIN_ROLE_UNSPECIFIED",
    Owner = "OWNER",
    CoOwner = "CO_OWNER",
    Manager = "MANAGER",
    CommunityManager = "COMMUNITY_MANAGER"
}


// Invitation
/** 
 * Output only. Represents a pending invitation.
**/
export class Invitation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: InvitationRoleEnum;

  @SpeakeasyMetadata({ data: "json, name=targetAccount" })
  targetAccount?: Account;

  @SpeakeasyMetadata({ data: "json, name=targetLocation" })
  targetLocation?: TargetLocation;
}
