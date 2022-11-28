import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ApiKeysPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;
}


export class ApiKeysSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class ApiKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ApiKeysPathParams;

  @SpeakeasyMetadata()
  security: ApiKeysSecurity;
}


export class ApiKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.ApiKey })
  apiKeys?: shared.ApiKey[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
