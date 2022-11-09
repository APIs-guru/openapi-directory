import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo } from "./googlecloudidentitytoolkitv2finalizemfaphonerequestinfo";
/**
 * Finishes enrolling a second factor for the user.
**/
export declare class GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest extends SpeakeasyBase {
    displayName?: string;
    idToken?: string;
    phoneVerificationInfo?: GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo;
    tenantId?: string;
}
