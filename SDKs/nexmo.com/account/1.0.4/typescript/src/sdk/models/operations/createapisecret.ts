import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateApiSecretPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api_key" })
  apiKey: string;
}


export class CreateApiSecretSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class CreateApiSecretRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateApiSecretPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateSecretRequest;

  @SpeakeasyMetadata()
  security: CreateApiSecretSecurity;
}


export class CreateApiSecretResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorApiKeyNotFound?: shared.ErrorApiKeyNotFound;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createApiSecret400ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  createApiSecret401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  secretInfo?: shared.SecretInfo;
}
