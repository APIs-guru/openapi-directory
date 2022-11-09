import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleFirebaseAppcheckV1betaExchangeAppAttestAssertionRequest
/** 
 * Request message for the ExchangeAppAttestAssertion method.
**/
export class GoogleFirebaseAppcheckV1betaExchangeAppAttestAssertionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=artifact" })
  artifact?: string;

  @Metadata({ data: "json, name=assertion" })
  assertion?: string;

  @Metadata({ data: "json, name=challenge" })
  challenge?: string;
}
