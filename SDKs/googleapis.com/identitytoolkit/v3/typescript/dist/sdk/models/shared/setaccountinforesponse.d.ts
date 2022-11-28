import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetAccountInfoResponseProviderUserInfo extends SpeakeasyBase {
    displayName?: string;
    federatedId?: string;
    photoUrl?: string;
    providerId?: string;
}
/**
 * Respone of setting the account information.
**/
export declare class SetAccountInfoResponse extends SpeakeasyBase {
    displayName?: string;
    email?: string;
    emailVerified?: boolean;
    expiresIn?: string;
    idToken?: string;
    kind?: string;
    localId?: string;
    newEmail?: string;
    passwordHash?: string;
    photoUrl?: string;
    providerUserInfo?: SetAccountInfoResponseProviderUserInfo[];
    refreshToken?: string;
}
