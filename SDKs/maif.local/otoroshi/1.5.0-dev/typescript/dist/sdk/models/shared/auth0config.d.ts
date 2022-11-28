import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for Auth0 domain
**/
export declare class Auth0Config extends SpeakeasyBase {
    callbackUrl: string;
    clientId: string;
    clientSecret: string;
    domain: string;
}
