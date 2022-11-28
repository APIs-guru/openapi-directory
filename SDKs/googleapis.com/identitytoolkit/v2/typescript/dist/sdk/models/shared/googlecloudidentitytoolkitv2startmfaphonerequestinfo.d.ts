import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitV2AutoRetrievalInfo } from "./googlecloudidentitytoolkitv2autoretrievalinfo";
/**
 * App Verification info for a StartMfa request.
**/
export declare class GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo extends SpeakeasyBase {
    autoRetrievalInfo?: GoogleCloudIdentitytoolkitV2AutoRetrievalInfo;
    iosReceipt?: string;
    iosSecret?: string;
    phoneNumber?: string;
    recaptchaToken?: string;
    safetyNetToken?: string;
}
