import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StartTalkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
  uuid: string;
}


export class StartTalkSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class StartTalkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StartTalkPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.StartTalkRequest;

  @Metadata()
  security: StartTalkSecurity;
}


export class StartTalkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  startTalkResponse?: shared.StartTalkResponse;

  @Metadata()
  statusCode: number;
}
