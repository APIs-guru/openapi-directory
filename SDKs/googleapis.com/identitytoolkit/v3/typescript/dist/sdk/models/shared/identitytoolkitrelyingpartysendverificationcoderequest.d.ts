import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for Identitytoolkit-SendVerificationCode
**/
export declare class IdentitytoolkitRelyingpartySendVerificationCodeRequest extends SpeakeasyBase {
    iosReceipt?: string;
    iosSecret?: string;
    phoneNumber?: string;
    recaptchaToken?: string;
}
