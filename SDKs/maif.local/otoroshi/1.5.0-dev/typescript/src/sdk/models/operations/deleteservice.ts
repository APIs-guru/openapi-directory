import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteServicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;
}


export class DeleteServiceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class DeleteServiceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteServicePathParams;

  @Metadata()
  security: DeleteServiceSecurity;
}


export class DeleteServiceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleted?: shared.Deleted;

  @Metadata()
  statusCode: number;
}
