import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleFirebaseAppcheckV1betaRecaptchaV3Config } from "./googlefirebaseappcheckv1betarecaptchav3config";


// GoogleFirebaseAppcheckV1betaBatchGetRecaptchaV3ConfigsResponse
/** 
 * Response message for the BatchGetRecaptchaV3Configs method.
**/
export class GoogleFirebaseAppcheckV1betaBatchGetRecaptchaV3ConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=configs", elemType: shared.GoogleFirebaseAppcheckV1betaRecaptchaV3Config })
  configs?: GoogleFirebaseAppcheckV1betaRecaptchaV3Config[];
}
