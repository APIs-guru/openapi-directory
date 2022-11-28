import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings to authenticate users using a generic OAuth2 provider
**/
export declare class GenericOauth2ModuleConfig extends SpeakeasyBase {
    accessTokenField: string;
    authorizeUrl: string;
    callbackUrl: string;
    claims?: string;
    clientId: string;
    clientSecret: string;
    desc: string;
    emailField: string;
    id: string;
    jwtVerifier?: any;
    loginUrl: string;
    logoutUrl: string;
    name: string;
    nameField: string;
    oidConfig?: string;
    otoroshiDataField: string;
    readProfileFromToken?: boolean;
    scope?: string;
    sessionMaxAge: number;
    tokenUrl: string;
    type: string;
    useCookies?: boolean;
    useJson?: boolean;
    userInfoUrl: string;
}
