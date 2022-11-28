import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";


export enum MembershipRoleEnum {
    MembershipRoleUnspecified = "MEMBERSHIP_ROLE_UNSPECIFIED",
    RoleMember = "ROLE_MEMBER",
    RoleManager = "ROLE_MANAGER"
}

export enum MembershipStateEnum {
    MembershipStateUnspecified = "MEMBERSHIP_STATE_UNSPECIFIED",
    Joined = "JOINED",
    Invited = "INVITED",
    NotAMember = "NOT_A_MEMBER"
}


// Membership
/** 
 * Represents a membership relation in Google Chat, such as whether a user or Chat app is invited to, part of, or absent from a space.
**/
export class Membership extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=member" })
  member?: User;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: MembershipRoleEnum;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: MembershipStateEnum;
}
