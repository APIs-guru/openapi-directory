import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostOauthLiveSessionTokenRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=diffie_hellman_challenge" })
  diffieHellmanChallenge?: string;

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

  @SpeakeasyMetadata({ data: "json, name=oauth_token" })
  oauthToken?: string;
}


export class PostOauthLiveSessionToken200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=diffie_hellman_response" })
  diffieHellmanResponse?: string;

  @SpeakeasyMetadata({ data: "json, name=live_session_token_signature" })
  liveSessionTokenSignature?: string;
}


export class PostOauthLiveSessionTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostOauthLiveSessionTokenRequestBody;
}


export class PostOauthLiveSessionTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postOauthLiveSessionToken200ApplicationJsonObject?: PostOauthLiveSessionToken200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
