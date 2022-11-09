import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StartDtmfPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
  uuid: string;
}


export class StartDtmfSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class StartDtmfRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StartDtmfPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DtmfRequest;

  @Metadata()
  security: StartDtmfSecurity;
}


export class StartDtmfResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dtmfResponse?: shared.DtmfResponse;

  @Metadata()
  statusCode: number;
}
