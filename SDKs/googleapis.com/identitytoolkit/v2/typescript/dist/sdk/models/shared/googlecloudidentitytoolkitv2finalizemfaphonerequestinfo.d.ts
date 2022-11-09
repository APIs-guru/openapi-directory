import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Phone Verification info for a FinalizeMfa request.
**/
export declare class GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo extends SpeakeasyBase {
    androidVerificationProof?: string;
    code?: string;
    phoneNumber?: string;
    sessionInfo?: string;
}
