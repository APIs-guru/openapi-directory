import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateSeriesTimerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=timerId" })
  timerId: string;
}


export class UpdateSeriesTimerRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  seriesTimerInfoDto?: shared.SeriesTimerInfoDto;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  seriesTimerInfoDto1?: shared.SeriesTimerInfoDto;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  seriesTimerInfoDto2?: shared.SeriesTimerInfoDto;
}


export class UpdateSeriesTimerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdateSeriesTimerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateSeriesTimerPathParams;

  @SpeakeasyMetadata()
  request?: UpdateSeriesTimerRequests;

  @SpeakeasyMetadata()
  security: UpdateSeriesTimerSecurity;
}


export class UpdateSeriesTimerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
