import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTimerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=timerId" })
  timerId: string;
}


export class GetTimerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetTimerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTimerPathParams;

  @SpeakeasyMetadata()
  security: GetTimerSecurity;
}


export class GetTimerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  timerInfoDto?: shared.TimerInfoDto;
}
