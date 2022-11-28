import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleFirebaseAppcheckV1ExchangePlayIntegrityTokenRequest
/** 
 * Request message for the ExchangePlayIntegrityToken method.
**/
export class GoogleFirebaseAppcheckV1ExchangePlayIntegrityTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=playIntegrityToken" })
  playIntegrityToken?: string;
}
