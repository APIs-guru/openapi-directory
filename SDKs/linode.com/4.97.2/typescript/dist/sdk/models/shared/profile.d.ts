import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProfileAuthenticationTypeEnum {
    Password = "password",
    Github = "github"
}
export declare enum ProfileLishAuthMethodEnum {
    PasswordKeys = "password_keys",
    KeysOnly = "keys_only",
    Disabled = "disabled"
}
/**
 * Information about your status in our referral program.
 *
 * This information becomes accessible after this Profile's Account has established at least $25.00 USD of total payments.
 *
**/
export declare class ProfileReferrals extends SpeakeasyBase {
    code?: string;
    completed?: number;
    credit?: number;
    pending?: number;
    total?: number;
    url?: string;
}
/**
 * A Profile represents your User in our system. This is where you can change information about your User. This information is available to any OAuth Client regardless of requested scopes, and can be used to populate User information in third-party applications.
 *
**/
export declare class ProfileInput extends SpeakeasyBase {
    authorizedKeys?: string[];
    email?: string;
    emailNotifications?: boolean;
    ipWhitelistEnabled?: boolean;
    lishAuthMethod?: ProfileLishAuthMethodEnum;
    restricted?: boolean;
    timezone?: string;
    twoFactorAuth?: boolean;
}
/**
 * A Profile represents your User in our system. This is where you can change information about your User. This information is available to any OAuth Client regardless of requested scopes, and can be used to populate User information in third-party applications.
 *
**/
export declare class Profile extends SpeakeasyBase {
    authenticationType?: ProfileAuthenticationTypeEnum;
    authorizedKeys?: string[];
    email?: string;
    emailNotifications?: boolean;
    ipWhitelistEnabled?: boolean;
    lishAuthMethod?: ProfileLishAuthMethodEnum;
    referrals?: ProfileReferrals;
    restricted?: boolean;
    timezone?: string;
    twoFactorAuth?: boolean;
    uid?: number;
    username?: string;
}
