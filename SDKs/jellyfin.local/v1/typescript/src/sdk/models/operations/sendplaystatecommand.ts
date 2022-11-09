import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SendPlaystateCommandPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=command" })
  command: shared.PlaystateCommandEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=sessionId" })
  sessionId: string;
}


export class SendPlaystateCommandQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=controllingUserId" })
  controllingUserId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=seekPositionTicks" })
  seekPositionTicks?: number;
}


export class SendPlaystateCommandSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SendPlaystateCommandRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SendPlaystateCommandPathParams;

  @Metadata()
  queryParams: SendPlaystateCommandQueryParams;

  @Metadata()
  security: SendPlaystateCommandSecurity;
}


export class SendPlaystateCommandResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
