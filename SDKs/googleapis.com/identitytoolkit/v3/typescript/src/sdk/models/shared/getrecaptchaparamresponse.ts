import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetRecaptchaParamResponse
/** 
 * Response of getting recaptcha param.
**/
export class GetRecaptchaParamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=recaptchaSiteKey" })
  recaptchaSiteKey?: string;

  @SpeakeasyMetadata({ data: "json, name=recaptchaStoken" })
  recaptchaStoken?: string;
}
