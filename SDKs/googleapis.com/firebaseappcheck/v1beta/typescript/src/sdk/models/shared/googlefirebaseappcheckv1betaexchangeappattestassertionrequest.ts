import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleFirebaseAppcheckV1betaExchangeAppAttestAssertionRequest
/** 
 * Request message for the ExchangeAppAttestAssertion method.
**/
export class GoogleFirebaseAppcheckV1betaExchangeAppAttestAssertionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artifact" })
  artifact?: string;

  @SpeakeasyMetadata({ data: "json, name=assertion" })
  assertion?: string;

  @SpeakeasyMetadata({ data: "json, name=challenge" })
  challenge?: string;
}
