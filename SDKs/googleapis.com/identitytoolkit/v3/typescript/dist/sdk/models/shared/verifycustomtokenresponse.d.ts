import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response from verifying a custom token
**/
export declare class VerifyCustomTokenResponse extends SpeakeasyBase {
    expiresIn?: string;
    idToken?: string;
    isNewUser?: boolean;
    kind?: string;
    refreshToken?: string;
}
