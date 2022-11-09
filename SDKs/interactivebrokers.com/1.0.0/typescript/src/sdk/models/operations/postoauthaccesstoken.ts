import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostOauthAccessTokenRequestBody extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=oauth_verifier" })
  oauthVerifier?: string;
}


export class PostOauthAccessTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostOauthAccessTokenRequestBody;
}


export class PostOauthAccessToken200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "json, name=oauth_token_secret" })
  oauthTokenSecret?: string;
}


export class PostOauthAccessTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postOauthAccessToken200ApplicationJsonObject?: PostOauthAccessToken200ApplicationJson;

  @Metadata()
  statusCode: number;
}
