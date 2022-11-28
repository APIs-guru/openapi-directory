import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo } from "./googlecloudidentitytoolkitv2finalizemfaphonerequestinfo";
/**
 * Finalizes sign-in by verifying MFA challenge.
**/
export declare class GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest extends SpeakeasyBase {
    mfaPendingCredential?: string;
    phoneVerificationInfo?: GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo;
    tenantId?: string;
}
