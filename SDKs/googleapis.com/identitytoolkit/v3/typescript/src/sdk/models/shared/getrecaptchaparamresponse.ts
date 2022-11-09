import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetRecaptchaParamResponse
/** 
 * Response of getting recaptcha param.
**/
export class GetRecaptchaParamResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=recaptchaSiteKey" })
  recaptchaSiteKey?: string;

  @Metadata({ data: "json, name=recaptchaStoken" })
  recaptchaStoken?: string;
}
