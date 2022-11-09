import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleFirebaseAppcheckV1betaRecaptchaEnterpriseConfig } from "./googlefirebaseappcheckv1betarecaptchaenterpriseconfig";


// GoogleFirebaseAppcheckV1betaBatchGetRecaptchaEnterpriseConfigsResponse
/** 
 * Response message for the BatchGetRecaptchaEnterpriseConfigs method.
**/
export class GoogleFirebaseAppcheckV1betaBatchGetRecaptchaEnterpriseConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=configs", elemType: shared.GoogleFirebaseAppcheckV1betaRecaptchaEnterpriseConfig })
  configs?: GoogleFirebaseAppcheckV1betaRecaptchaEnterpriseConfig[];
}
