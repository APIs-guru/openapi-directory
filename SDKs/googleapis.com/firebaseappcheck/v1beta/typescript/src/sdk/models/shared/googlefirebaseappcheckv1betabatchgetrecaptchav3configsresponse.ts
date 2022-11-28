import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1betaRecaptchaV3Config } from "./googlefirebaseappcheckv1betarecaptchav3config";



// GoogleFirebaseAppcheckV1betaBatchGetRecaptchaV3ConfigsResponse
/** 
 * Response message for the BatchGetRecaptchaV3Configs method.
**/
export class GoogleFirebaseAppcheckV1betaBatchGetRecaptchaV3ConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configs", elemType: GoogleFirebaseAppcheckV1betaRecaptchaV3Config })
  configs?: GoogleFirebaseAppcheckV1betaRecaptchaV3Config[];
}
