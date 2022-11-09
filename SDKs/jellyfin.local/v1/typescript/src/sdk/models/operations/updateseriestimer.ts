import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateSeriesTimerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=timerId" })
  timerId: string;
}


export class UpdateSeriesTimerRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  seriesTimerInfoDto?: shared.SeriesTimerInfoDto;

  @Metadata({ data: "request, media_type=application/json" })
  seriesTimerInfoDto1?: shared.SeriesTimerInfoDto;

  @Metadata({ data: "request, media_type=text/json" })
  seriesTimerInfoDto2?: shared.SeriesTimerInfoDto;
}


export class UpdateSeriesTimerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdateSeriesTimerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateSeriesTimerPathParams;

  @Metadata()
  request?: UpdateSeriesTimerRequests;

  @Metadata()
  security: UpdateSeriesTimerSecurity;
}


export class UpdateSeriesTimerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
