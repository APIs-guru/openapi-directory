import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IdentitytoolkitRelyingpartySendVerificationCodeResponse
/** 
 * Response for Identitytoolkit-SendVerificationCode
**/
export class IdentitytoolkitRelyingpartySendVerificationCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sessionInfo" })
  sessionInfo?: string;
}
