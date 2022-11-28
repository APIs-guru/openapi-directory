import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RetrieveApiSecretPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=secret_id" })
  secretId: string;
}


export class RetrieveApiSecretSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class RetrieveApiSecretRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RetrieveApiSecretPathParams;

  @SpeakeasyMetadata()
  security: RetrieveApiSecretSecurity;
}


export class RetrieveApiSecretResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  retrieveApiSecret401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  retrieveApiSecret404ApplicationJsonOneOf?: any;

  @SpeakeasyMetadata()
  secretInfo?: shared.SecretInfo;
}
