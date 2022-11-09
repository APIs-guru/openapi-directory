import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleIdentityStsV1ExchangeTokenResponse
/** 
 * Response message for ExchangeToken.
**/
export class GoogleIdentityStsV1ExchangeTokenResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken?: string;

  @Metadata({ data: "json, name=expires_in" })
  expiresIn?: number;

  @Metadata({ data: "json, name=issued_token_type" })
  issuedTokenType?: string;

  @Metadata({ data: "json, name=token_type" })
  tokenType?: string;
}
