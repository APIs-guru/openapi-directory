import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ApiKeysPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;
}


export class ApiKeysSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class ApiKeysRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ApiKeysPathParams;

  @Metadata()
  security: ApiKeysSecurity;
}


export class ApiKeysResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.ApiKey })
  apiKeys?: shared.ApiKey[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
