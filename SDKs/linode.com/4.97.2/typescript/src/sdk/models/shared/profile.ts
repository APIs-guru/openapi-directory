import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProfileAuthenticationTypeEnum {
    Password = "password",
    Github = "github"
}

export enum ProfileLishAuthMethodEnum {
    PasswordKeys = "password_keys",
    KeysOnly = "keys_only",
    Disabled = "disabled"
}


// ProfileReferrals
/** 
 * Information about your status in our referral program.
 * 
 * This information becomes accessible after this Profile's Account has established at least $25.00 USD of total payments.
 * 
**/
export class ProfileReferrals extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=completed" })
  completed?: number;

  @SpeakeasyMetadata({ data: "json, name=credit" })
  credit?: number;

  @SpeakeasyMetadata({ data: "json, name=pending" })
  pending?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


// ProfileInput
/** 
 * A Profile represents your User in our system. This is where you can change information about your User. This information is available to any OAuth Client regardless of requested scopes, and can be used to populate User information in third-party applications.
 * 
**/
export class ProfileInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorized_keys" })
  authorizedKeys?: string[];

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=email_notifications" })
  emailNotifications?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ip_whitelist_enabled" })
  ipWhitelistEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lish_auth_method" })
  lishAuthMethod?: ProfileLishAuthMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=restricted" })
  restricted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;

  @SpeakeasyMetadata({ data: "json, name=two_factor_auth" })
  twoFactorAuth?: boolean;
}


// Profile
/** 
 * A Profile represents your User in our system. This is where you can change information about your User. This information is available to any OAuth Client regardless of requested scopes, and can be used to populate User information in third-party applications.
 * 
**/
export class Profile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authentication_type" })
  authenticationType?: ProfileAuthenticationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=authorized_keys" })
  authorizedKeys?: string[];

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=email_notifications" })
  emailNotifications?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ip_whitelist_enabled" })
  ipWhitelistEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lish_auth_method" })
  lishAuthMethod?: ProfileLishAuthMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=referrals" })
  referrals?: ProfileReferrals;

  @SpeakeasyMetadata({ data: "json, name=restricted" })
  restricted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;

  @SpeakeasyMetadata({ data: "json, name=two_factor_auth" })
  twoFactorAuth?: boolean;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: number;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
