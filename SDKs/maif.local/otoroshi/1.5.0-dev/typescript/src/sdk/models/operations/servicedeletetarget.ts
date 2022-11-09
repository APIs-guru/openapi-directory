import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ServiceDeleteTargetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;
}


export class ServiceDeleteTargetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class ServiceDeleteTargetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ServiceDeleteTargetPathParams;

  @Metadata()
  security: ServiceDeleteTargetSecurity;
}


export class ServiceDeleteTargetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Target })
  targets?: shared.Target[];
}
