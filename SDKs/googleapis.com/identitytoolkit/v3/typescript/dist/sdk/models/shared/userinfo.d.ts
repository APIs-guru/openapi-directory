import { SpeakeasyBase } from "../../../internal/utils";
export declare class UserInfoProviderUserInfo extends SpeakeasyBase {
    displayName?: string;
    email?: string;
    federatedId?: string;
    phoneNumber?: string;
    photoUrl?: string;
    providerId?: string;
    rawId?: string;
    screenName?: string;
}
/**
 * Template for an individual account info.
**/
export declare class UserInfo extends SpeakeasyBase {
    createdAt?: string;
    customAttributes?: string;
    customAuth?: boolean;
    disabled?: boolean;
    displayName?: string;
    email?: string;
    emailVerified?: boolean;
    lastLoginAt?: string;
    localId?: string;
    passwordHash?: string;
    passwordUpdatedAt?: number;
    phoneNumber?: string;
    photoUrl?: string;
    providerUserInfo?: UserInfoProviderUserInfo[];
    rawPassword?: string;
    salt?: string;
    screenName?: string;
    validSince?: string;
    version?: number;
}
