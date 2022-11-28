import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to verify the password.
**/
export declare class IdentitytoolkitRelyingpartyVerifyPasswordRequest extends SpeakeasyBase {
    captchaChallenge?: string;
    captchaResponse?: string;
    delegatedProjectNumber?: string;
    email?: string;
    idToken?: string;
    instanceId?: string;
    password?: string;
    pendingIdToken?: string;
    returnSecureToken?: boolean;
    tenantId?: string;
    tenantProjectNumber?: string;
}
