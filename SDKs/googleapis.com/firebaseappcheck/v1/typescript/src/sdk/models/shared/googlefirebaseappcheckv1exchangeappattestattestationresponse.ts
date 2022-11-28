import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1AppCheckToken } from "./googlefirebaseappcheckv1appchecktoken";



// GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse
/** 
 * Response message for the ExchangeAppAttestAttestation method.
**/
export class GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appCheckToken" })
  appCheckToken?: GoogleFirebaseAppcheckV1AppCheckToken;

  @SpeakeasyMetadata({ data: "json, name=artifact" })
  artifact?: string;
}
