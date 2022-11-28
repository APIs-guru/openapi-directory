import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request of verifying the password.
**/
export declare class VerifyPasswordResponse extends SpeakeasyBase {
    displayName?: string;
    email?: string;
    expiresIn?: string;
    idToken?: string;
    kind?: string;
    localId?: string;
    oauthAccessToken?: string;
    oauthAuthorizationCode?: string;
    oauthExpireIn?: number;
    photoUrl?: string;
    refreshToken?: string;
    registered?: boolean;
}
