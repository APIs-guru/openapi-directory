import { SpeakeasyBase } from "../../../internal/utils";
import { OrganizationInfoInput } from "./organizationinfo";
import { OrganizationInfo } from "./organizationinfo";
export declare enum AccountPermissionLevelEnum {
    PermissionLevelUnspecified = "PERMISSION_LEVEL_UNSPECIFIED",
    OwnerLevel = "OWNER_LEVEL",
    MemberLevel = "MEMBER_LEVEL"
}
export declare enum AccountRoleEnum {
    AccountRoleUnspecified = "ACCOUNT_ROLE_UNSPECIFIED",
    PrimaryOwner = "PRIMARY_OWNER",
    Owner = "OWNER",
    Manager = "MANAGER",
    SiteManager = "SITE_MANAGER"
}
export declare enum AccountTypeEnum {
    AccountTypeUnspecified = "ACCOUNT_TYPE_UNSPECIFIED",
    Personal = "PERSONAL",
    LocationGroup = "LOCATION_GROUP",
    UserGroup = "USER_GROUP",
    Organization = "ORGANIZATION"
}
export declare enum AccountVerificationStateEnum {
    VerificationStateUnspecified = "VERIFICATION_STATE_UNSPECIFIED",
    Verified = "VERIFIED",
    Unverified = "UNVERIFIED",
    VerificationRequested = "VERIFICATION_REQUESTED"
}
export declare enum AccountVettedStateEnum {
    VettedStateUnspecified = "VETTED_STATE_UNSPECIFIED",
    NotVetted = "NOT_VETTED",
    Vetted = "VETTED",
    Invalid = "INVALID"
}
/**
 * An account is a container for your location. If you are the only user who manages locations for your business, you can use your personal Google Account. To share management of locations with multiple users, [create a business account] (https://support.google.com/business/answer/6085339?ref_topic=6085325).
**/
export declare class AccountInput extends SpeakeasyBase {
    accountName?: string;
    name?: string;
    organizationInfo?: OrganizationInfoInput;
    primaryOwner?: string;
    type?: AccountTypeEnum;
}
/**
 * An account is a container for your location. If you are the only user who manages locations for your business, you can use your personal Google Account. To share management of locations with multiple users, [create a business account] (https://support.google.com/business/answer/6085339?ref_topic=6085325).
**/
export declare class Account extends SpeakeasyBase {
    accountName?: string;
    accountNumber?: string;
    name?: string;
    organizationInfo?: OrganizationInfo;
    permissionLevel?: AccountPermissionLevelEnum;
    primaryOwner?: string;
    role?: AccountRoleEnum;
    type?: AccountTypeEnum;
    verificationState?: AccountVerificationStateEnum;
    vettedState?: AccountVettedStateEnum;
}
