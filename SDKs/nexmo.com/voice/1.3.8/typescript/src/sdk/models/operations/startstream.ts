import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StartStreamPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
  uuid: string;
}


export class StartStreamSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class StartStreamRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StartStreamPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StartStreamRequest;

  @Metadata()
  security: StartStreamSecurity;
}


export class StartStreamResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  startStreamResponse?: shared.StartStreamResponse;

  @Metadata()
  statusCode: number;
}
