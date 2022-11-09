import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateApiKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;
}


export class CreateApiKeySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class CreateApiKeyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateApiKeyPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.ApiKey;

  @Metadata()
  security: CreateApiKeySecurity;
}


export class CreateApiKeyResponse extends SpeakeasyBase {
  @Metadata()
  apiKey?: shared.ApiKey;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
