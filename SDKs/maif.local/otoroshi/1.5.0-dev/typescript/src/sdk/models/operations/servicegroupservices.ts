import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ServiceGroupServicesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceGroupId" })
  serviceGroupId: string;
}


export class ServiceGroupServicesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class ServiceGroupServicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ServiceGroupServicesPathParams;

  @SpeakeasyMetadata()
  security: ServiceGroupServicesSecurity;
}


export class ServiceGroupServicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.ApiKey })
  apiKeys?: shared.ApiKey[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
