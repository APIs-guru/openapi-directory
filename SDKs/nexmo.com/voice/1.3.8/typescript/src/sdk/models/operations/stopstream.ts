import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StopStreamPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
  uuid: string;
}


export class StopStreamSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class StopStreamRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StopStreamPathParams;

  @Metadata()
  security: StopStreamSecurity;
}


export class StopStreamResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  stopStreamResponse?: shared.StopStreamResponse;
}
