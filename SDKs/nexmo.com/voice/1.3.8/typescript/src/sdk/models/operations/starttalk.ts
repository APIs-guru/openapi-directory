import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StartTalkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
  uuid: string;
}


export class StartTalkSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class StartTalkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StartTalkPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.StartTalkRequest;

  @SpeakeasyMetadata()
  security: StartTalkSecurity;
}


export class StartTalkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  startTalkResponse?: shared.StartTalkResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
