import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveApiSecretsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=api_key" })
  apiKey: string;
}


export class RetrieveApiSecretsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class RetrieveApiSecretsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveApiSecretsPathParams;

  @Metadata()
  security: RetrieveApiSecretsSecurity;
}


export class RetrieveApiSecretsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorApiKeyNotFound?: shared.ErrorApiKeyNotFound;

  @Metadata()
  statusCode: number;

  @Metadata()
  retrieveApiSecrets200ApplicationJsonAny?: any;

  @Metadata()
  retrieveApiSecrets401ApplicationJsonAny?: any;
}
