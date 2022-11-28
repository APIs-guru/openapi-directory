import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response of verifying the IDP assertion.
**/
export declare class VerifyAssertionResponse extends SpeakeasyBase {
    action?: string;
    appInstallationUrl?: string;
    appScheme?: string;
    context?: string;
    dateOfBirth?: string;
    displayName?: string;
    email?: string;
    emailRecycled?: boolean;
    emailVerified?: boolean;
    errorMessage?: string;
    expiresIn?: string;
    federatedId?: string;
    firstName?: string;
    fullName?: string;
    idToken?: string;
    inputEmail?: string;
    isNewUser?: boolean;
    kind?: string;
    language?: string;
    lastName?: string;
    localId?: string;
    needConfirmation?: boolean;
    needEmail?: boolean;
    nickName?: string;
    oauthAccessToken?: string;
    oauthAuthorizationCode?: string;
    oauthExpireIn?: number;
    oauthIdToken?: string;
    oauthRequestToken?: string;
    oauthScope?: string;
    oauthTokenSecret?: string;
    originalEmail?: string;
    photoUrl?: string;
    providerId?: string;
    rawUserInfo?: string;
    refreshToken?: string;
    screenName?: string;
    timeZone?: string;
    verifiedProvider?: string[];
}
