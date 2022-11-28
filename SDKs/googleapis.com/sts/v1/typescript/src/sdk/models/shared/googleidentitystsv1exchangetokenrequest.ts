import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleIdentityStsV1ExchangeTokenRequest
/** 
 * Request message for ExchangeToken.
**/
export class GoogleIdentityStsV1ExchangeTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audience" })
  audience?: string;

  @SpeakeasyMetadata({ data: "json, name=grantType" })
  grantType?: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: string;

  @SpeakeasyMetadata({ data: "json, name=requestedTokenType" })
  requestedTokenType?: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: string;

  @SpeakeasyMetadata({ data: "json, name=subjectToken" })
  subjectToken?: string;

  @SpeakeasyMetadata({ data: "json, name=subjectTokenType" })
  subjectTokenType?: string;
}
