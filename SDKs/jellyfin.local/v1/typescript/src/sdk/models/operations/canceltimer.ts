import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CancelTimerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=timerId" })
  timerId: string;
}


export class CancelTimerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class CancelTimerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CancelTimerPathParams;

  @Metadata()
  security: CancelTimerSecurity;
}


export class CancelTimerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
