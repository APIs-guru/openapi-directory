import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SendPlaystateCommandPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=command" })
  command: shared.PlaystateCommandEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sessionId" })
  sessionId: string;
}


export class SendPlaystateCommandQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=controllingUserId" })
  controllingUserId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=seekPositionTicks" })
  seekPositionTicks?: number;
}


export class SendPlaystateCommandSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SendPlaystateCommandRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SendPlaystateCommandPathParams;

  @SpeakeasyMetadata()
  queryParams: SendPlaystateCommandQueryParams;

  @SpeakeasyMetadata()
  security: SendPlaystateCommandSecurity;
}


export class SendPlaystateCommandResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
