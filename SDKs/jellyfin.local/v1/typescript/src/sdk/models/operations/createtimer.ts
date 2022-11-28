import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateTimerRequestsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  timerInfoDto?: shared.TimerInfoDtoInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  timerInfoDto1?: shared.TimerInfoDtoInput;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  timerInfoDto2?: shared.TimerInfoDtoInput;
}


export class CreateTimerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class CreateTimerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: CreateTimerRequestsInput;

  @SpeakeasyMetadata()
  security: CreateTimerSecurity;
}


export class CreateTimerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
