import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig } from "./googlefirebaseappcheckv1recaptchaenterpriseconfig";



// GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse
/** 
 * Response message for the BatchGetRecaptchaEnterpriseConfigs method.
**/
export class GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configs", elemType: GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig })
  configs?: GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig[];
}
