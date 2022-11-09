import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleFirebaseAppcheckV1RecaptchaV3Config } from "./googlefirebaseappcheckv1recaptchav3config";


// GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse
/** 
 * Response message for the BatchGetRecaptchaV3Configs method.
**/
export class GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=configs", elemType: shared.GoogleFirebaseAppcheckV1RecaptchaV3Config })
  configs?: GoogleFirebaseAppcheckV1RecaptchaV3Config[];
}
