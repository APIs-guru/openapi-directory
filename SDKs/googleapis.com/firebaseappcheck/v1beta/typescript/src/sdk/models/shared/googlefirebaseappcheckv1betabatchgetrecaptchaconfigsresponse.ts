import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleFirebaseAppcheckV1betaRecaptchaConfig } from "./googlefirebaseappcheckv1betarecaptchaconfig";


// GoogleFirebaseAppcheckV1betaBatchGetRecaptchaConfigsResponse
/** 
 * Response message for the BatchGetRecaptchaConfigs method.
**/
export class GoogleFirebaseAppcheckV1betaBatchGetRecaptchaConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=configs", elemType: shared.GoogleFirebaseAppcheckV1betaRecaptchaConfig })
  configs?: GoogleFirebaseAppcheckV1betaRecaptchaConfig[];
}
