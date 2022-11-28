import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddressClaimSet } from "./addressclaimset";
import { AccessTokenAuthorization } from "./accesstokenauthorization";
import { AccessTokenCertConf } from "./accesstokencertconf";
import { AccessTokenAccess } from "./accesstokenaccess";


export enum AccessTokenCategoryEnum {
    Internal = "INTERNAL",
    Access = "ACCESS",
    Id = "ID",
    Admin = "ADMIN",
    Userinfo = "USERINFO"
}


export class AccessToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acr" })
  acr?: string;

  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: AddressClaimSet;

  @SpeakeasyMetadata({ data: "json, name=allowed-origins" })
  allowedOrigins?: string[];

  @SpeakeasyMetadata({ data: "json, name=at_hash" })
  atHash?: string;

  @SpeakeasyMetadata({ data: "json, name=auth_time" })
  authTime?: number;

  @SpeakeasyMetadata({ data: "json, name=authorization" })
  authorization?: AccessTokenAuthorization;

  @SpeakeasyMetadata({ data: "json, name=azp" })
  azp?: string;

  @SpeakeasyMetadata({ data: "json, name=birthdate" })
  birthdate?: string;

  @SpeakeasyMetadata({ data: "json, name=c_hash" })
  cHash?: string;

  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: AccessTokenCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=claims_locales" })
  claimsLocales?: string;

  @SpeakeasyMetadata({ data: "json, name=cnf" })
  cnf?: AccessTokenCertConf;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=email_verified" })
  emailVerified?: boolean;

  @SpeakeasyMetadata({ data: "json, name=exp" })
  exp?: number;

  @SpeakeasyMetadata({ data: "json, name=family_name" })
  familyName?: string;

  @SpeakeasyMetadata({ data: "json, name=gender" })
  gender?: string;

  @SpeakeasyMetadata({ data: "json, name=given_name" })
  givenName?: string;

  @SpeakeasyMetadata({ data: "json, name=iat" })
  iat?: number;

  @SpeakeasyMetadata({ data: "json, name=iss" })
  iss?: string;

  @SpeakeasyMetadata({ data: "json, name=jti" })
  jti?: string;

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "json, name=middle_name" })
  middleName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nbf" })
  nbf?: number;

  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname?: string;

  @SpeakeasyMetadata({ data: "json, name=nonce" })
  nonce?: string;

  @SpeakeasyMetadata({ data: "json, name=otherClaims" })
  otherClaims?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number_verified" })
  phoneNumberVerified?: boolean;

  @SpeakeasyMetadata({ data: "json, name=picture" })
  picture?: string;

  @SpeakeasyMetadata({ data: "json, name=preferred_username" })
  preferredUsername?: string;

  @SpeakeasyMetadata({ data: "json, name=profile" })
  profile?: string;

  @SpeakeasyMetadata({ data: "json, name=realm_access" })
  realmAccess?: AccessTokenAccess;

  @SpeakeasyMetadata({ data: "json, name=s_hash" })
  sHash?: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: string;

  @SpeakeasyMetadata({ data: "json, name=session_state" })
  sessionState?: string;

  @SpeakeasyMetadata({ data: "json, name=sub" })
  sub?: string;

  @SpeakeasyMetadata({ data: "json, name=trusted-certs" })
  trustedCerts?: string[];

  @SpeakeasyMetadata({ data: "json, name=typ" })
  typ?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: number;

  @SpeakeasyMetadata({ data: "json, name=website" })
  website?: string;

  @SpeakeasyMetadata({ data: "json, name=zoneinfo" })
  zoneinfo?: string;
}
