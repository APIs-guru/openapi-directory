import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleIdentityStsV1betaExchangeTokenResponse
/** 
 * Response message for ExchangeToken.
**/
export class GoogleIdentityStsV1betaExchangeTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=expires_in" })
  expiresIn?: number;

  @SpeakeasyMetadata({ data: "json, name=issued_token_type" })
  issuedTokenType?: string;

  @SpeakeasyMetadata({ data: "json, name=token_type" })
  tokenType?: string;
}
