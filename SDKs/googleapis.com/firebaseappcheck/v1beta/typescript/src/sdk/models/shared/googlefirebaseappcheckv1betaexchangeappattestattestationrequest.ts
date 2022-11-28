import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationRequest
/** 
 * Request message for the ExchangeAppAttestAttestation method.
**/
export class GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attestationStatement" })
  attestationStatement?: string;

  @SpeakeasyMetadata({ data: "json, name=challenge" })
  challenge?: string;

  @SpeakeasyMetadata({ data: "json, name=keyId" })
  keyId?: string;
}
