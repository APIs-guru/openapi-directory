import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostOauthRequestTokenRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=oauth_callback" })
  oauthCallback?: string;

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
}


export class PostOauthRequestTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostOauthRequestTokenRequestBody;
}


export class PostOauthRequestToken200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=oauth_token" })
  oauthToken?: string;
}


export class PostOauthRequestTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postOauthRequestToken200ApplicationJsonObject?: PostOauthRequestToken200ApplicationJson;

  @Metadata()
  statusCode: number;
}
