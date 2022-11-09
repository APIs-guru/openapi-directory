import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostOauthLiveSessionTokenRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=diffie_hellman_challenge" })
  diffieHellmanChallenge?: string;

  @Metadata({ data: "json, name=oauth_consumer_key" })
  oauthConsumerKey?: string;

  @Metadata({ data: "json, name=oauth_nonce" })
  oauthNonce?: string;

  @Metadata({ data: "json, name=oauth_signature" })
  oauthSignature?: string;

  @Metadata({ data: "json, name=oauth_signature_method" })
  oauthSignatureMethod?: string;

  @Metadata({ data: "json, name=oauth_timestamp" })
  oauthTimestamp?: string;

  @Metadata({ data: "json, name=oauth_token" })
  oauthToken?: string;
}


export class PostOauthLiveSessionTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostOauthLiveSessionTokenRequestBody;
}


export class PostOauthLiveSessionToken200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=diffie_hellman_response" })
  diffieHellmanResponse?: string;

  @Metadata({ data: "json, name=live_session_token_signature" })
  liveSessionTokenSignature?: string;
}


export class PostOauthLiveSessionTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postOauthLiveSessionToken200ApplicationJsonObject?: PostOauthLiveSessionToken200ApplicationJson;

  @Metadata()
  statusCode: number;
}
