import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSeriesTimerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=timerId" })
  timerId: string;
}


export class GetSeriesTimerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetSeriesTimerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSeriesTimerPathParams;

  @Metadata()
  security: GetSeriesTimerSecurity;
}


export class GetSeriesTimerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  seriesTimerInfoDto?: shared.SeriesTimerInfoDto;

  @Metadata()
  statusCode: number;
}
