import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RevokeApiSecretPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=api_key" })
  apiKey: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=secret_id" })
  secretId: string;
}


export class RevokeApiSecretSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class RevokeApiSecretRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RevokeApiSecretPathParams;

  @Metadata()
  security: RevokeApiSecretSecurity;
}


export class RevokeApiSecretResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  revokeApiSecret401ApplicationJsonAny?: any;

  @Metadata()
  revokeApiSecret403ApplicationJsonAny?: any;

  @Metadata()
  revokeApiSecret404ApplicationJsonOneOf?: any;
}
