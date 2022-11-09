import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig } from "./googlefirebaseappcheckv1recaptchaenterpriseconfig";


// GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse
/** 
 * Response message for the BatchGetRecaptchaEnterpriseConfigs method.
**/
export class GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=configs", elemType: shared.GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig })
  configs?: GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig[];
}
