import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveApiSecretPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=api_key" })
  apiKey: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=secret_id" })
  secretId: string;
}


export class RetrieveApiSecretSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class RetrieveApiSecretRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveApiSecretPathParams;

  @Metadata()
  security: RetrieveApiSecretSecurity;
}


export class RetrieveApiSecretResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  retrieveApiSecret401ApplicationJsonAny?: any;

  @Metadata()
  retrieveApiSecret404ApplicationJsonOneOf?: any;

  @Metadata()
  secretInfo?: shared.SecretInfo;
}
