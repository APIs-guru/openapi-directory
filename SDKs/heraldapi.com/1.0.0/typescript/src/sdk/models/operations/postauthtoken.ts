import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAuthTokenRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api_key" })
  apiKey: string;
}


export class PostAuthToken200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=expires_at" })
  expiresAt: number;
}


export class PostAuthTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostAuthTokenRequestBody;
}


export class PostAuthTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postAuthToken200ApplicationJsonObject?: PostAuthToken200ApplicationJson;
}
