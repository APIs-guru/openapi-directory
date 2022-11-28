import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StartStreamPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
  uuid: string;
}


export class StartStreamSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class StartStreamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StartStreamPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.StartStreamRequest;

  @SpeakeasyMetadata()
  security: StartStreamSecurity;
}


export class StartStreamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  startStreamResponse?: shared.StartStreamResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
