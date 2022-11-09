import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ProfileAuthenticationTypeEnum {
    Password = "password"
,    Github = "github"
}

export enum ProfileLishAuthMethodEnum {
    PasswordKeys = "password_keys"
,    KeysOnly = "keys_only"
,    Disabled = "disabled"
}


// ProfileReferrals
/** 
 * Information about your status in our referral program.
 * 
 * This information becomes accessible after this Profile's Account has established at least $25.00 USD of total payments.
 * 
**/
export class ProfileReferrals extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=completed" })
  completed?: number;

  @Metadata({ data: "json, name=credit" })
  credit?: number;

  @Metadata({ data: "json, name=pending" })
  pending?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


// Profile
/** 
 * A Profile represents your User in our system. This is where you can change information about your User. This information is available to any OAuth Client regardless of requested scopes, and can be used to populate User information in third-party applications.
 * 
**/
export class Profile extends SpeakeasyBase {
  @Metadata({ data: "json, name=authentication_type" })
  authenticationType?: ProfileAuthenticationTypeEnum;

  @Metadata({ data: "json, name=authorized_keys" })
  authorizedKeys?: string[];

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=email_notifications" })
  emailNotifications?: boolean;

  @Metadata({ data: "json, name=ip_whitelist_enabled" })
  ipWhitelistEnabled?: boolean;

  @Metadata({ data: "json, name=lish_auth_method" })
  lishAuthMethod?: ProfileLishAuthMethodEnum;

  @Metadata({ data: "json, name=referrals" })
  referrals?: ProfileReferrals;

  @Metadata({ data: "json, name=restricted" })
  restricted?: boolean;

  @Metadata({ data: "json, name=timezone" })
  timezone?: string;

  @Metadata({ data: "json, name=two_factor_auth" })
  twoFactorAuth?: boolean;

  @Metadata({ data: "json, name=uid" })
  uid?: number;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
