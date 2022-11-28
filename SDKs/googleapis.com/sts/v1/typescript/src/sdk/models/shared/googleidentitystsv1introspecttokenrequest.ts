import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleIdentityStsV1IntrospectTokenRequest
/** 
 * Request message for IntrospectToken.
**/
export class GoogleIdentityStsV1IntrospectTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;

  @SpeakeasyMetadata({ data: "json, name=tokenTypeHint" })
  tokenTypeHint?: string;
}
