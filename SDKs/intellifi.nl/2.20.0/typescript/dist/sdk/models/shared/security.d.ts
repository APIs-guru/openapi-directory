import { SpeakeasyBase } from "../../../internal/utils";
export declare class SchemeCookieSid extends SpeakeasyBase {
    apiKey: string;
}
export declare class SchemeHeaderApiKey extends SpeakeasyBase {
    apiKey: string;
}
export declare class SchemeQueryApiKey extends SpeakeasyBase {
    apiKey: string;
}
export declare class Security extends SpeakeasyBase {
    cookieSid?: SchemeCookieSid;
    headerApiKey?: SchemeHeaderApiKey;
    queryApiKey?: SchemeQueryApiKey;
}
