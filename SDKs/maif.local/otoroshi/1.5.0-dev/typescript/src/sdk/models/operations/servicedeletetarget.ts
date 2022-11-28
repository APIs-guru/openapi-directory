import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ServiceDeleteTargetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;
}


export class ServiceDeleteTargetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class ServiceDeleteTargetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ServiceDeleteTargetPathParams;

  @SpeakeasyMetadata()
  security: ServiceDeleteTargetSecurity;
}


export class ServiceDeleteTargetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Target })
  targets?: shared.Target[];
}
