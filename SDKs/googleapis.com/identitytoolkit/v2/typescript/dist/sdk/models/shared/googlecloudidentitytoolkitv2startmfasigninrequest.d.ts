import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo } from "./googlecloudidentitytoolkitv2startmfaphonerequestinfo";
/**
 * Starts multi-factor sign-in by sending the multi-factor auth challenge.
**/
export declare class GoogleCloudIdentitytoolkitV2StartMfaSignInRequest extends SpeakeasyBase {
    mfaEnrollmentId?: string;
    mfaPendingCredential?: string;
    phoneSignInInfo?: GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo;
    tenantId?: string;
}
