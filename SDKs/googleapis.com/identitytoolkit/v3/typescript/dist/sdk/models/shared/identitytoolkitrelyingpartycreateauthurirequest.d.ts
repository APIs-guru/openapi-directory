import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to get the IDP authentication URL.
**/
export declare class IdentitytoolkitRelyingpartyCreateAuthUriRequest extends SpeakeasyBase {
    appId?: string;
    authFlowType?: string;
    clientId?: string;
    context?: string;
    continueUri?: string;
    customParameter?: Map<string, string>;
    hostedDomain?: string;
    identifier?: string;
    oauthConsumerKey?: string;
    oauthScope?: string;
    openidRealm?: string;
    otaApp?: string;
    providerId?: string;
    sessionId?: string;
    tenantId?: string;
    tenantProjectNumber?: string;
}
