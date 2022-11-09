import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleFirebaseAppcheckV1betaAppCheckToken } from "./googlefirebaseappcheckv1betaappchecktoken";
import { GoogleFirebaseAppcheckV1betaAttestationTokenResponse } from "./googlefirebaseappcheckv1betaattestationtokenresponse";


// GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationResponse
/** 
 * Response message for the ExchangeAppAttestAttestation method.
**/
export class GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=appCheckToken" })
  appCheckToken?: GoogleFirebaseAppcheckV1betaAppCheckToken;

  @Metadata({ data: "json, name=artifact" })
  artifact?: string;

  @Metadata({ data: "json, name=attestationToken" })
  attestationToken?: GoogleFirebaseAppcheckV1betaAttestationTokenResponse;
}
