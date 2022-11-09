import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IdentitytoolkitRelyingpartySendVerificationCodeRequest
/** 
 * Request for Identitytoolkit-SendVerificationCode
**/
export class IdentitytoolkitRelyingpartySendVerificationCodeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=iosReceipt" })
  iosReceipt?: string;

  @Metadata({ data: "json, name=iosSecret" })
  iosSecret?: string;

  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=recaptchaToken" })
  recaptchaToken?: string;
}
