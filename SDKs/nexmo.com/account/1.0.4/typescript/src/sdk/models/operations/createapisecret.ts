import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateApiSecretPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=api_key" })
  apiKey: string;
}


export class CreateApiSecretSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class CreateApiSecretRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateApiSecretPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateSecretRequest;

  @Metadata()
  security: CreateApiSecretSecurity;
}


export class CreateApiSecretResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorApiKeyNotFound?: shared.ErrorApiKeyNotFound;

  @Metadata()
  statusCode: number;

  @Metadata()
  createApiSecret400ApplicationJsonAny?: any;

  @Metadata()
  createApiSecret401ApplicationJsonAny?: any;

  @Metadata()
  secretInfo?: shared.SecretInfo;
}
