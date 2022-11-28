import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to signup new user, create anonymous user or anonymous user reauth.
**/
export declare class IdentitytoolkitRelyingpartySignupNewUserRequest extends SpeakeasyBase {
    captchaChallenge?: string;
    captchaResponse?: string;
    disabled?: boolean;
    displayName?: string;
    email?: string;
    emailVerified?: boolean;
    idToken?: string;
    instanceId?: string;
    localId?: string;
    password?: string;
    phoneNumber?: string;
    photoUrl?: string;
    tenantId?: string;
    tenantProjectNumber?: string;
}
