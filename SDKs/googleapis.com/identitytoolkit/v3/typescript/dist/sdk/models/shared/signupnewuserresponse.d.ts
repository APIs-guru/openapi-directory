import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response of signing up new user, creating anonymous user or anonymous user reauth.
**/
export declare class SignupNewUserResponse extends SpeakeasyBase {
    displayName?: string;
    email?: string;
    expiresIn?: string;
    idToken?: string;
    kind?: string;
    localId?: string;
    refreshToken?: string;
}
