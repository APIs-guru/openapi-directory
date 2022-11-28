import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
export declare enum MembershipRoleEnum {
    MembershipRoleUnspecified = "MEMBERSHIP_ROLE_UNSPECIFIED",
    RoleMember = "ROLE_MEMBER",
    RoleManager = "ROLE_MANAGER"
}
export declare enum MembershipStateEnum {
    MembershipStateUnspecified = "MEMBERSHIP_STATE_UNSPECIFIED",
    Joined = "JOINED",
    Invited = "INVITED",
    NotAMember = "NOT_A_MEMBER"
}
/**
 * Represents a membership relation in Google Chat, such as whether a user or Chat app is invited to, part of, or absent from a space.
**/
export declare class Membership extends SpeakeasyBase {
    createTime?: string;
    member?: User;
    name?: string;
    role?: MembershipRoleEnum;
    state?: MembershipStateEnum;
}
