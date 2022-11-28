import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateSeriesTimerRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  seriesTimerInfoDto?: shared.SeriesTimerInfoDto;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  seriesTimerInfoDto1?: shared.SeriesTimerInfoDto;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  seriesTimerInfoDto2?: shared.SeriesTimerInfoDto;
}


export class CreateSeriesTimerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class CreateSeriesTimerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: CreateSeriesTimerRequests;

  @SpeakeasyMetadata()
  security: CreateSeriesTimerSecurity;
}


export class CreateSeriesTimerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
