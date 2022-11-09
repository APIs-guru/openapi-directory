import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ServiceAddTargetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;
}


export class ServiceAddTargetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class ServiceAddTargetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ServiceAddTargetPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Target;

  @Metadata()
  security: ServiceAddTargetSecurity;
}


export class ServiceAddTargetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Target })
  targets?: shared.Target[];
}
