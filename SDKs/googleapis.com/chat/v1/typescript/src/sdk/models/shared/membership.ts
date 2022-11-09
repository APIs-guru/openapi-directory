import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { User } from "./user";

export enum MembershipRoleEnum {
    MembershipRoleUnspecified = "MEMBERSHIP_ROLE_UNSPECIFIED"
,    RoleMember = "ROLE_MEMBER"
,    RoleManager = "ROLE_MANAGER"
}

export enum MembershipStateEnum {
    MembershipStateUnspecified = "MEMBERSHIP_STATE_UNSPECIFIED"
,    Joined = "JOINED"
,    Invited = "INVITED"
,    NotAMember = "NOT_A_MEMBER"
}


// Membership
/** 
 * Represents a membership relation in Google Chat, such as whether a user or Chat app is invited to, part of, or absent from a space.
**/
export class Membership extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=member" })
  member?: User;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=role" })
  role?: MembershipRoleEnum;

  @Metadata({ data: "json, name=state" })
  state?: MembershipStateEnum;
}
