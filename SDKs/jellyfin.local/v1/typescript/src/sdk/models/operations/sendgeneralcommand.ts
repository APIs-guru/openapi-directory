import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SendGeneralCommandPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=command" })
  command: shared.GeneralCommandTypeEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sessionId" })
  sessionId: string;
}


export class SendGeneralCommandSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SendGeneralCommandRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SendGeneralCommandPathParams;

  @SpeakeasyMetadata()
  security: SendGeneralCommandSecurity;
}


export class SendGeneralCommandResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
