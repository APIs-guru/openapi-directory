import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RevokeApiSecretPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=secret_id" })
  secretId: string;
}


export class RevokeApiSecretSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class RevokeApiSecretRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RevokeApiSecretPathParams;

  @SpeakeasyMetadata()
  security: RevokeApiSecretSecurity;
}


export class RevokeApiSecretResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  revokeApiSecret401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  revokeApiSecret403ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  revokeApiSecret404ApplicationJsonOneOf?: any;
}
