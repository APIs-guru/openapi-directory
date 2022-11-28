import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
import { TargetLocation } from "./targetlocation";
export declare enum InvitationRoleEnum {
    AdminRoleUnspecified = "ADMIN_ROLE_UNSPECIFIED",
    PrimaryOwner = "PRIMARY_OWNER",
    Owner = "OWNER",
    Manager = "MANAGER",
    SiteManager = "SITE_MANAGER"
}
export declare enum InvitationTargetTypeEnum {
    TargetTypeUnspecified = "TARGET_TYPE_UNSPECIFIED",
    AccountsOnly = "ACCOUNTS_ONLY",
    LocationsOnly = "LOCATIONS_ONLY"
}
/**
 * Represents a pending invitation.
**/
export declare class Invitation extends SpeakeasyBase {
    name?: string;
    role?: InvitationRoleEnum;
    targetAccount?: Account;
    targetLocation?: TargetLocation;
    targetType?: InvitationTargetTypeEnum;
}
