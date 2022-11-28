import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ServiceAddTargetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;
}


export class ServiceAddTargetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class ServiceAddTargetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ServiceAddTargetPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.Target;

  @SpeakeasyMetadata()
  security: ServiceAddTargetSecurity;
}


export class ServiceAddTargetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Target })
  targets?: shared.Target[];
}
