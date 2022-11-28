import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response of email signIn.
**/
export declare class EmailLinkSigninResponse extends SpeakeasyBase {
    email?: string;
    expiresIn?: string;
    idToken?: string;
    isNewUser?: boolean;
    kind?: string;
    localId?: string;
    refreshToken?: string;
}
