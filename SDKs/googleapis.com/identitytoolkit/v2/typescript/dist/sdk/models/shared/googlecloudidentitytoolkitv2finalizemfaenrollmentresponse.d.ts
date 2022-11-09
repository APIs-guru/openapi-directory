import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo } from "./googlecloudidentitytoolkitv2finalizemfaphoneresponseinfo";
/**
 * FinalizeMfaEnrollment response.
**/
export declare class GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse extends SpeakeasyBase {
    idToken?: string;
    phoneAuthInfo?: GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo;
    refreshToken?: string;
}
