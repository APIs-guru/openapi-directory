import { SpeakeasyBase } from "../../../internal/utils";
import { OrganizationInfo } from "./organizationinfo";
import { AccountState } from "./accountstate";
export declare enum AccountPermissionLevelEnum {
    PermissionLevelUnspecified = "PERMISSION_LEVEL_UNSPECIFIED",
    OwnerLevel = "OWNER_LEVEL",
    MemberLevel = "MEMBER_LEVEL"
}
export declare enum AccountRoleEnum {
    AccountRoleUnspecified = "ACCOUNT_ROLE_UNSPECIFIED",
    Owner = "OWNER",
    CoOwner = "CO_OWNER",
    Manager = "MANAGER",
    CommunityManager = "COMMUNITY_MANAGER"
}
export declare enum AccountTypeEnum {
    AccountTypeUnspecified = "ACCOUNT_TYPE_UNSPECIFIED",
    Personal = "PERSONAL",
    LocationGroup = "LOCATION_GROUP",
    UserGroup = "USER_GROUP",
    Organization = "ORGANIZATION"
}
/**
 * An account is a container for your business's locations. If you are the only user who manages locations for your business, you can use your personal Google Account. To share management of locations with multiple users, [create a business account] (https://support.google.com/business/answer/6085339?ref_topic=6085325).
**/
export declare class Account extends SpeakeasyBase {
    accountName?: string;
    accountNumber?: string;
    name?: string;
    organizationInfo?: OrganizationInfo;
    permissionLevel?: AccountPermissionLevelEnum;
    role?: AccountRoleEnum;
    state?: AccountState;
    type?: AccountTypeEnum;
}
