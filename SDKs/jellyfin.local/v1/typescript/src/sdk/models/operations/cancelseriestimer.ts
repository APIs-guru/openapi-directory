import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CancelSeriesTimerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=timerId" })
  timerId: string;
}


export class CancelSeriesTimerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class CancelSeriesTimerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CancelSeriesTimerPathParams;

  @Metadata()
  security: CancelSeriesTimerSecurity;
}


export class CancelSeriesTimerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
