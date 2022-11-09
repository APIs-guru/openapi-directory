import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostPortfolioForecastPerformanceRewindHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostPortfolioForecastPerformanceRewindRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  forecastPerformanceRequest?: shared.ForecastPerformanceRequest;

  @Metadata({ data: "request, media_type=application/json" })
  forecastPerformanceRequest1?: shared.ForecastPerformanceRequest;

  @Metadata({ data: "request, media_type=text/json" })
  forecastPerformanceRequest2?: shared.ForecastPerformanceRequest;
}


export class PostPortfolioForecastPerformanceRewindRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostPortfolioForecastPerformanceRewindHeaders;

  @Metadata()
  request?: PostPortfolioForecastPerformanceRewindRequests;
}


export class PostPortfolioForecastPerformanceRewindResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  rewindResponse?: shared.RewindResponse;

  @Metadata()
  statusCode: number;
}
