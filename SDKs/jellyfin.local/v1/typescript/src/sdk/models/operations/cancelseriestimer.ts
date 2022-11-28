import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CancelSeriesTimerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=timerId" })
  timerId: string;
}


export class CancelSeriesTimerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class CancelSeriesTimerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CancelSeriesTimerPathParams;

  @SpeakeasyMetadata()
  security: CancelSeriesTimerSecurity;
}


export class CancelSeriesTimerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
