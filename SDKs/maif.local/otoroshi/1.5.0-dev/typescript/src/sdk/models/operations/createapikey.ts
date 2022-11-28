import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateApiKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;
}


export class CreateApiKeySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class CreateApiKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateApiKeyPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.ApiKey;

  @SpeakeasyMetadata()
  security: CreateApiKeySecurity;
}


export class CreateApiKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiKey?: shared.ApiKey;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
