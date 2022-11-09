import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationRequest
/** 
 * Request message for the ExchangeAppAttestAttestation method.
**/
export class GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=attestationStatement" })
  attestationStatement?: string;

  @Metadata({ data: "json, name=challenge" })
  challenge?: string;

  @Metadata({ data: "json, name=keyId" })
  keyId?: string;
}
