import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ServiceGroupServicesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serviceGroupId" })
  serviceGroupId: string;
}


export class ServiceGroupServicesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class ServiceGroupServicesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ServiceGroupServicesPathParams;

  @Metadata()
  security: ServiceGroupServicesSecurity;
}


export class ServiceGroupServicesResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.ApiKey })
  apiKeys?: shared.ApiKey[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
