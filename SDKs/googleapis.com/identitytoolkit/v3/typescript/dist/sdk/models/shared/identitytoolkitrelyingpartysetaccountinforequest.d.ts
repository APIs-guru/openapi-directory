import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to set the account information.
**/
export declare class IdentitytoolkitRelyingpartySetAccountInfoRequest extends SpeakeasyBase {
    captchaChallenge?: string;
    captchaResponse?: string;
    createdAt?: string;
    customAttributes?: string;
    delegatedProjectNumber?: string;
    deleteAttribute?: string[];
    deleteProvider?: string[];
    disableUser?: boolean;
    displayName?: string;
    email?: string;
    emailVerified?: boolean;
    idToken?: string;
    instanceId?: string;
    lastLoginAt?: string;
    localId?: string;
    oobCode?: string;
    password?: string;
    phoneNumber?: string;
    photoUrl?: string;
    provider?: string[];
    returnSecureToken?: boolean;
    upgradeToFederatedLogin?: boolean;
    validSince?: string;
}
