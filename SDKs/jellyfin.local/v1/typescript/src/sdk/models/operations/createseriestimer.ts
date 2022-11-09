import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateSeriesTimerRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  seriesTimerInfoDto?: shared.SeriesTimerInfoDto;

  @Metadata({ data: "request, media_type=application/json" })
  seriesTimerInfoDto1?: shared.SeriesTimerInfoDto;

  @Metadata({ data: "request, media_type=text/json" })
  seriesTimerInfoDto2?: shared.SeriesTimerInfoDto;
}


export class CreateSeriesTimerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class CreateSeriesTimerRequest extends SpeakeasyBase {
  @Metadata()
  request?: CreateSeriesTimerRequests;

  @Metadata()
  security: CreateSeriesTimerSecurity;
}


export class CreateSeriesTimerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
