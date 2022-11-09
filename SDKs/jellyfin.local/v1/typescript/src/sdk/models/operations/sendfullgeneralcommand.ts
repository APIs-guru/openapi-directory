import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SendFullGeneralCommandPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=sessionId" })
  sessionId: string;
}


export class SendFullGeneralCommandRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  generalCommand?: shared.GeneralCommand;

  @Metadata({ data: "request, media_type=application/json" })
  generalCommand1?: shared.GeneralCommand;

  @Metadata({ data: "request, media_type=text/json" })
  generalCommand2?: shared.GeneralCommand;
}


export class SendFullGeneralCommandSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SendFullGeneralCommandRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SendFullGeneralCommandPathParams;

  @Metadata()
  request: SendFullGeneralCommandRequests;

  @Metadata()
  security: SendFullGeneralCommandSecurity;
}


export class SendFullGeneralCommandResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
