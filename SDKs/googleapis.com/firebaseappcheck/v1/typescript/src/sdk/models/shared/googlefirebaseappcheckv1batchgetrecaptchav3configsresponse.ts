import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1RecaptchaV3Config } from "./googlefirebaseappcheckv1recaptchav3config";



// GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse
/** 
 * Response message for the BatchGetRecaptchaV3Configs method.
**/
export class GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configs", elemType: GoogleFirebaseAppcheckV1RecaptchaV3Config })
  configs?: GoogleFirebaseAppcheckV1RecaptchaV3Config[];
}
