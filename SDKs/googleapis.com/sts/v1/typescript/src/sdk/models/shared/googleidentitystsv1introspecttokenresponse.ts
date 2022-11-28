import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleIdentityStsV1IntrospectTokenResponse
/** 
 * Response message for IntrospectToken.
**/
export class GoogleIdentityStsV1IntrospectTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=exp" })
  exp?: string;

  @SpeakeasyMetadata({ data: "json, name=iat" })
  iat?: string;

  @SpeakeasyMetadata({ data: "json, name=iss" })
  iss?: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: string;

  @SpeakeasyMetadata({ data: "json, name=sub" })
  sub?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
