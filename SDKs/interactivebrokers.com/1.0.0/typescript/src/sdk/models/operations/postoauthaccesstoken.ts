import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostOauthAccessTokenRequestBody extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=oauth_verifier" })
  oauthVerifier?: string;
}


export class PostOauthAccessToken200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "json, name=oauth_token_secret" })
  oauthTokenSecret?: string;
}


export class PostOauthAccessTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostOauthAccessTokenRequestBody;
}


export class PostOauthAccessTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postOauthAccessToken200ApplicationJsonObject?: PostOauthAccessToken200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
