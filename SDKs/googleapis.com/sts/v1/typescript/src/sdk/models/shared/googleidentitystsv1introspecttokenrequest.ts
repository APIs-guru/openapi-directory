import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleIdentityStsV1IntrospectTokenRequest
/** 
 * Request message for IntrospectToken.
**/
export class GoogleIdentityStsV1IntrospectTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=token" })
  token?: string;

  @Metadata({ data: "json, name=tokenTypeHint" })
  tokenTypeHint?: string;
}
