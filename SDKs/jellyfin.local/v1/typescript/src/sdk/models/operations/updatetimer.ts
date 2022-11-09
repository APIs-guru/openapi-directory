import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateTimerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=timerId" })
  timerId: string;
}


export class UpdateTimerRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  timerInfoDto?: shared.TimerInfoDto;

  @Metadata({ data: "request, media_type=application/json" })
  timerInfoDto1?: shared.TimerInfoDto;

  @Metadata({ data: "request, media_type=text/json" })
  timerInfoDto2?: shared.TimerInfoDto;
}


export class UpdateTimerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdateTimerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateTimerPathParams;

  @Metadata()
  request?: UpdateTimerRequests;

  @Metadata()
  security: UpdateTimerSecurity;
}


export class UpdateTimerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
