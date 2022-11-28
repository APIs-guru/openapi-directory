import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ApiKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;
}


export class ApiKeySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class ApiKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ApiKeyPathParams;

  @SpeakeasyMetadata()
  security: ApiKeySecurity;
}


export class ApiKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiKey?: shared.ApiKey;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
