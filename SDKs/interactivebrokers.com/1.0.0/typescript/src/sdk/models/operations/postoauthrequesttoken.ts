import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostOauthRequestTokenRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=oauth_callback" })
  oauthCallback?: string;

  @SpeakeasyMetadata({ data: "json, name=oauth_consumer_key" })
  oauthConsumerKey?: string;

  @SpeakeasyMetadata({ data: "json, name=oauth_nonce" })
  oauthNonce?: string;

  @SpeakeasyMetadata({ data: "json, name=oauth_signature" })
  oauthSignature?: string;

  @SpeakeasyMetadata({ data: "json, name=oauth_signature_method" })
  oauthSignatureMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=oauth_timestamp" })
  oauthTimestamp?: string;
}


export class PostOauthRequestToken200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=oauth_token" })
  oauthToken?: string;
}


export class PostOauthRequestTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostOauthRequestTokenRequestBody;
}


export class PostOauthRequestTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postOauthRequestToken200ApplicationJsonObject?: PostOauthRequestToken200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
