import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SendMessageCommandPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=sessionId" })
  sessionId: string;
}


export class SendMessageCommandQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=header" })
  header?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeoutMs" })
  timeoutMs?: number;
}


export class SendMessageCommandSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SendMessageCommandRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SendMessageCommandPathParams;

  @Metadata()
  queryParams: SendMessageCommandQueryParams;

  @Metadata()
  security: SendMessageCommandSecurity;
}


export class SendMessageCommandResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
