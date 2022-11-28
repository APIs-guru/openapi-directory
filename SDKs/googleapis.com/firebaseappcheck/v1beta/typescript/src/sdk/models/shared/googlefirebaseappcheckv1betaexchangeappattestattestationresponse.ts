import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1betaAppCheckToken } from "./googlefirebaseappcheckv1betaappchecktoken";
import { GoogleFirebaseAppcheckV1betaAttestationTokenResponse } from "./googlefirebaseappcheckv1betaattestationtokenresponse";



// GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationResponse
/** 
 * Response message for the ExchangeAppAttestAttestation method.
**/
export class GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appCheckToken" })
  appCheckToken?: GoogleFirebaseAppcheckV1betaAppCheckToken;

  @SpeakeasyMetadata({ data: "json, name=artifact" })
  artifact?: string;

  @SpeakeasyMetadata({ data: "json, name=attestationToken" })
  attestationToken?: GoogleFirebaseAppcheckV1betaAttestationTokenResponse;
}
