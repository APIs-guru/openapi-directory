import { SpeakeasyBase } from "../../../internal/utils";
import { AddressClaimSet } from "./addressclaimset";
import { AccessTokenAuthorization } from "./accesstokenauthorization";
import { AccessTokenCertConf } from "./accesstokencertconf";
import { AccessTokenAccess } from "./accesstokenaccess";
export declare enum AccessTokenCategoryEnum {
    Internal = "INTERNAL",
    Access = "ACCESS",
    Id = "ID",
    Admin = "ADMIN",
    Userinfo = "USERINFO"
}
export declare class AccessToken extends SpeakeasyBase {
    acr?: string;
    address?: AddressClaimSet;
    allowedOrigins?: string[];
    atHash?: string;
    authTime?: number;
    authorization?: AccessTokenAuthorization;
    azp?: string;
    birthdate?: string;
    cHash?: string;
    category?: AccessTokenCategoryEnum;
    claimsLocales?: string;
    cnf?: AccessTokenCertConf;
    email?: string;
    emailVerified?: boolean;
    exp?: number;
    familyName?: string;
    gender?: string;
    givenName?: string;
    iat?: number;
    iss?: string;
    jti?: string;
    locale?: string;
    middleName?: string;
    name?: string;
    nbf?: number;
    nickname?: string;
    nonce?: string;
    otherClaims?: Map<string, any>;
    phoneNumber?: string;
    phoneNumberVerified?: boolean;
    picture?: string;
    preferredUsername?: string;
    profile?: string;
    realmAccess?: AccessTokenAccess;
    sHash?: string;
    scope?: string;
    sessionState?: string;
    sub?: string;
    trustedCerts?: string[];
    typ?: string;
    updatedAt?: number;
    website?: string;
    zoneinfo?: string;
}
