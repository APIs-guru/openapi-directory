import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo } from "./googlecloudidentitytoolkitv2startmfaphonerequestinfo";
/**
 * Sends MFA enrollment verification SMS for a user.
**/
export declare class GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest extends SpeakeasyBase {
    idToken?: string;
    phoneEnrollmentInfo?: GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo;
    tenantId?: string;
}
