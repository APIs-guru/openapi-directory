import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1betaRecaptchaEnterpriseConfig } from "./googlefirebaseappcheckv1betarecaptchaenterpriseconfig";



// GoogleFirebaseAppcheckV1betaBatchGetRecaptchaEnterpriseConfigsResponse
/** 
 * Response message for the BatchGetRecaptchaEnterpriseConfigs method.
**/
export class GoogleFirebaseAppcheckV1betaBatchGetRecaptchaEnterpriseConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configs", elemType: GoogleFirebaseAppcheckV1betaRecaptchaEnterpriseConfig })
  configs?: GoogleFirebaseAppcheckV1betaRecaptchaEnterpriseConfig[];
}
