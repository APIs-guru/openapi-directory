import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AddressClaimSet } from "./addressclaimset";
import { AccessTokenAuthorization } from "./accesstokenauthorization";
import { AccessTokenCertConf } from "./accesstokencertconf";
import { AccessTokenAccess } from "./accesstokenaccess";

export enum AccessTokenCategoryEnum {
    Internal = "INTERNAL"
,    Access = "ACCESS"
,    Id = "ID"
,    Admin = "ADMIN"
,    Userinfo = "USERINFO"
}


export class AccessToken extends SpeakeasyBase {
  @Metadata({ data: "json, name=acr" })
  acr?: string;

  @Metadata({ data: "json, name=address" })
  address?: AddressClaimSet;

  @Metadata({ data: "json, name=allowed-origins" })
  allowedOrigins?: string[];

  @Metadata({ data: "json, name=at_hash" })
  atHash?: string;

  @Metadata({ data: "json, name=auth_time" })
  authTime?: number;

  @Metadata({ data: "json, name=authorization" })
  authorization?: AccessTokenAuthorization;

  @Metadata({ data: "json, name=azp" })
  azp?: string;

  @Metadata({ data: "json, name=birthdate" })
  birthdate?: string;

  @Metadata({ data: "json, name=c_hash" })
  cHash?: string;

  @Metadata({ data: "json, name=category" })
  category?: AccessTokenCategoryEnum;

  @Metadata({ data: "json, name=claims_locales" })
  claimsLocales?: string;

  @Metadata({ data: "json, name=cnf" })
  cnf?: AccessTokenCertConf;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=email_verified" })
  emailVerified?: boolean;

  @Metadata({ data: "json, name=exp" })
  exp?: number;

  @Metadata({ data: "json, name=family_name" })
  familyName?: string;

  @Metadata({ data: "json, name=gender" })
  gender?: string;

  @Metadata({ data: "json, name=given_name" })
  givenName?: string;

  @Metadata({ data: "json, name=iat" })
  iat?: number;

  @Metadata({ data: "json, name=iss" })
  iss?: string;

  @Metadata({ data: "json, name=jti" })
  jti?: string;

  @Metadata({ data: "json, name=locale" })
  locale?: string;

  @Metadata({ data: "json, name=middle_name" })
  middleName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nbf" })
  nbf?: number;

  @Metadata({ data: "json, name=nickname" })
  nickname?: string;

  @Metadata({ data: "json, name=nonce" })
  nonce?: string;

  @Metadata({ data: "json, name=otherClaims" })
  otherClaims?: Map<string, any>;

  @Metadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=phone_number_verified" })
  phoneNumberVerified?: boolean;

  @Metadata({ data: "json, name=picture" })
  picture?: string;

  @Metadata({ data: "json, name=preferred_username" })
  preferredUsername?: string;

  @Metadata({ data: "json, name=profile" })
  profile?: string;

  @Metadata({ data: "json, name=realm_access" })
  realmAccess?: AccessTokenAccess;

  @Metadata({ data: "json, name=s_hash" })
  sHash?: string;

  @Metadata({ data: "json, name=scope" })
  scope?: string;

  @Metadata({ data: "json, name=session_state" })
  sessionState?: string;

  @Metadata({ data: "json, name=sub" })
  sub?: string;

  @Metadata({ data: "json, name=trusted-certs" })
  trustedCerts?: string[];

  @Metadata({ data: "json, name=typ" })
  typ?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: number;

  @Metadata({ data: "json, name=website" })
  website?: string;

  @Metadata({ data: "json, name=zoneinfo" })
  zoneinfo?: string;
}
