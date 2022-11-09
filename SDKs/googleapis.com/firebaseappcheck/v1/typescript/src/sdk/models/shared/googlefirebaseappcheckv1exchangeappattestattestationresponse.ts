import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleFirebaseAppcheckV1AppCheckToken } from "./googlefirebaseappcheckv1appchecktoken";


// GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse
/** 
 * Response message for the ExchangeAppAttestAttestation method.
**/
export class GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=appCheckToken" })
  appCheckToken?: GoogleFirebaseAppcheckV1AppCheckToken;

  @Metadata({ data: "json, name=artifact" })
  artifact?: string;
}
