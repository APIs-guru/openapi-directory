import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to verify the IDP assertion.
**/
export declare class IdentitytoolkitRelyingpartyVerifyAssertionRequest extends SpeakeasyBase {
    autoCreate?: boolean;
    delegatedProjectNumber?: string;
    idToken?: string;
    instanceId?: string;
    pendingIdToken?: string;
    postBody?: string;
    requestUri?: string;
    returnIdpCredential?: boolean;
    returnRefreshToken?: boolean;
    returnSecureToken?: boolean;
    sessionId?: string;
    tenantId?: string;
    tenantProjectNumber?: string;
}
