import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1betaRecaptchaConfig } from "./googlefirebaseappcheckv1betarecaptchaconfig";



// GoogleFirebaseAppcheckV1betaBatchGetRecaptchaConfigsResponse
/** 
 * Response message for the BatchGetRecaptchaConfigs method.
**/
export class GoogleFirebaseAppcheckV1betaBatchGetRecaptchaConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configs", elemType: GoogleFirebaseAppcheckV1betaRecaptchaConfig })
  configs?: GoogleFirebaseAppcheckV1betaRecaptchaConfig[];
}
