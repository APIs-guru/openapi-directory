import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AdminRoleEnum {
    AdminRoleUnspecified = "ADMIN_ROLE_UNSPECIFIED",
    Owner = "OWNER",
    CoOwner = "CO_OWNER",
    Manager = "MANAGER",
    CommunityManager = "COMMUNITY_MANAGER"
}
/**
 * An administrator of an Account or a Location.
**/
export declare class Admin extends SpeakeasyBase {
    adminName?: string;
    name?: string;
    pendingInvitation?: boolean;
    role?: AdminRoleEnum;
}
