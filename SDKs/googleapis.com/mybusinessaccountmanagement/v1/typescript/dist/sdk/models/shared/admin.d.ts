import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum AdminRoleEnum {
    AdminRoleUnspecified = "ADMIN_ROLE_UNSPECIFIED",
    PrimaryOwner = "PRIMARY_OWNER",
    Owner = "OWNER",
    Manager = "MANAGER",
    SiteManager = "SITE_MANAGER"
}
/**
 * An administrator of an Account or a location.
**/
export declare class Admin extends SpeakeasyBase {
    account?: string;
    admin?: string;
    name?: string;
    pendingInvitation?: boolean;
    role?: AdminRoleEnum;
}
