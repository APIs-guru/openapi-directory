import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SendGeneralCommandPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=command" })
  command: shared.GeneralCommandTypeEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=sessionId" })
  sessionId: string;
}


export class SendGeneralCommandSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SendGeneralCommandRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SendGeneralCommandPathParams;

  @Metadata()
  security: SendGeneralCommandSecurity;
}


export class SendGeneralCommandResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
