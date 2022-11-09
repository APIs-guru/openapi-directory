import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleIdentityStsV1betaExchangeTokenRequest
/** 
 * Request message for ExchangeToken.
**/
export class GoogleIdentityStsV1betaExchangeTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=audience" })
  audience?: string;

  @Metadata({ data: "json, name=grantType" })
  grantType?: string;

  @Metadata({ data: "json, name=options" })
  options?: string;

  @Metadata({ data: "json, name=requestedTokenType" })
  requestedTokenType?: string;

  @Metadata({ data: "json, name=scope" })
  scope?: string;

  @Metadata({ data: "json, name=subjectToken" })
  subjectToken?: string;

  @Metadata({ data: "json, name=subjectTokenType" })
  subjectTokenType?: string;
}
