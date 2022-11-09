import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest
/** 
 * Request message for the ExchangeAppAttestAttestation method.
**/
export class GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=attestationStatement" })
  attestationStatement?: string;

  @Metadata({ data: "json, name=challenge" })
  challenge?: string;

  @Metadata({ data: "json, name=keyId" })
  keyId?: string;
}
