import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateServicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;
}


export class UpdateServiceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class UpdateServiceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateServicePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Service;

  @Metadata()
  security: UpdateServiceSecurity;
}


export class UpdateServiceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  service?: shared.Service;

  @Metadata()
  statusCode: number;
}
