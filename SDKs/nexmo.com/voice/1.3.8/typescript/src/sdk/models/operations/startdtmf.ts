import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StartDtmfPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
  uuid: string;
}


export class StartDtmfSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class StartDtmfRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StartDtmfPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DtmfRequest;

  @SpeakeasyMetadata()
  security: StartDtmfSecurity;
}


export class StartDtmfResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dtmfResponse?: shared.DtmfResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
