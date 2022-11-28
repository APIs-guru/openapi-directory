import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateTimerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=timerId" })
  timerId: string;
}


export class UpdateTimerRequestsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  timerInfoDto?: shared.TimerInfoDtoInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  timerInfoDto1?: shared.TimerInfoDtoInput;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  timerInfoDto2?: shared.TimerInfoDtoInput;
}


export class UpdateTimerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdateTimerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateTimerPathParams;

  @SpeakeasyMetadata()
  request?: UpdateTimerRequestsInput;

  @SpeakeasyMetadata()
  security: UpdateTimerSecurity;
}


export class UpdateTimerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
