import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleIdentityStsV1ExchangeTokenResponse
/** 
 * Response message for ExchangeToken.
**/
export class GoogleIdentityStsV1ExchangeTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=expires_in" })
  expiresIn?: number;

  @SpeakeasyMetadata({ data: "json, name=issued_token_type" })
  issuedTokenType?: string;

  @SpeakeasyMetadata({ data: "json, name=token_type" })
  tokenType?: string;
}
