import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IdentitytoolkitRelyingpartySendVerificationCodeRequest
/** 
 * Request for Identitytoolkit-SendVerificationCode
**/
export class IdentitytoolkitRelyingpartySendVerificationCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=iosReceipt" })
  iosReceipt?: string;

  @SpeakeasyMetadata({ data: "json, name=iosSecret" })
  iosSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=recaptchaToken" })
  recaptchaToken?: string;
}
