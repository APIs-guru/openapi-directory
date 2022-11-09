import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateTimerRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  timerInfoDto?: shared.TimerInfoDto;

  @Metadata({ data: "request, media_type=application/json" })
  timerInfoDto1?: shared.TimerInfoDto;

  @Metadata({ data: "request, media_type=text/json" })
  timerInfoDto2?: shared.TimerInfoDto;
}


export class CreateTimerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class CreateTimerRequest extends SpeakeasyBase {
  @Metadata()
  request?: CreateTimerRequests;

  @Metadata()
  security: CreateTimerSecurity;
}


export class CreateTimerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
