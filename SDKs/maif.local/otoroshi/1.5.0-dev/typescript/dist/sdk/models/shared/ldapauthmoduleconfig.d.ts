import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings to authenticate users using a generic OAuth2 provider
**/
export declare class LdapAuthModuleConfig extends SpeakeasyBase {
    adminPassword: string;
    adminUsername: string;
    desc: string;
    emailField: string;
    groupFilter: string;
    id: string;
    name: string;
    nameField: string;
    otoroshiDataField?: string;
    searchBase: string;
    searchFilter: string;
    serverUrl: string;
    sessionMaxAge: number;
    type: string;
    userBase: string;
}
