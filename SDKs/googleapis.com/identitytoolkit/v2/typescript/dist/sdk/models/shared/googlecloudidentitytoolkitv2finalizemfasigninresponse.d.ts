import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo } from "./googlecloudidentitytoolkitv2finalizemfaphoneresponseinfo";
/**
 * FinalizeMfaSignIn response.
**/
export declare class GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse extends SpeakeasyBase {
    idToken?: string;
    phoneAuthInfo?: GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo;
    refreshToken?: string;
}
