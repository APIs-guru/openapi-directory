import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SendFullGeneralCommandPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sessionId" })
  sessionId: string;
}


export class SendFullGeneralCommandRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  generalCommand?: shared.GeneralCommand;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  generalCommand1?: shared.GeneralCommand;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  generalCommand2?: shared.GeneralCommand;
}


export class SendFullGeneralCommandSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SendFullGeneralCommandRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SendFullGeneralCommandPathParams;

  @SpeakeasyMetadata()
  request: SendFullGeneralCommandRequests;

  @SpeakeasyMetadata()
  security: SendFullGeneralCommandSecurity;
}


export class SendFullGeneralCommandResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
