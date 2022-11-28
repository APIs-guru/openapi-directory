import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
import { TargetLocation } from "./targetlocation";
export declare enum InvitationRoleEnum {
    AdminRoleUnspecified = "ADMIN_ROLE_UNSPECIFIED",
    Owner = "OWNER",
    CoOwner = "CO_OWNER",
    Manager = "MANAGER",
    CommunityManager = "COMMUNITY_MANAGER"
}
/**
 * Output only. Represents a pending invitation.
**/
export declare class Invitation extends SpeakeasyBase {
    name?: string;
    role?: InvitationRoleEnum;
    targetAccount?: Account;
    targetLocation?: TargetLocation;
}
