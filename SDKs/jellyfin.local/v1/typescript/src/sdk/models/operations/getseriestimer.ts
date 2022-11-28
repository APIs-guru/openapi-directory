import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSeriesTimerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=timerId" })
  timerId: string;
}


export class GetSeriesTimerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetSeriesTimerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSeriesTimerPathParams;

  @SpeakeasyMetadata()
  security: GetSeriesTimerSecurity;
}


export class GetSeriesTimerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  seriesTimerInfoDto?: shared.SeriesTimerInfoDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
