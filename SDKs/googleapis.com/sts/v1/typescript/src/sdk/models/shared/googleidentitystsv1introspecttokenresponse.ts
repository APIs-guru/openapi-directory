import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleIdentityStsV1IntrospectTokenResponse
/** 
 * Response message for IntrospectToken.
**/
export class GoogleIdentityStsV1IntrospectTokenResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=exp" })
  exp?: string;

  @Metadata({ data: "json, name=iat" })
  iat?: string;

  @Metadata({ data: "json, name=iss" })
  iss?: string;

  @Metadata({ data: "json, name=scope" })
  scope?: string;

  @Metadata({ data: "json, name=sub" })
  sub?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
