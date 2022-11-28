import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostPortfolioForecastPerformanceRewindHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostPortfolioForecastPerformanceRewindRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  forecastPerformanceRequest?: shared.ForecastPerformanceRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  forecastPerformanceRequest1?: shared.ForecastPerformanceRequest;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  forecastPerformanceRequest2?: shared.ForecastPerformanceRequest;
}


export class PostPortfolioForecastPerformanceRewindRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostPortfolioForecastPerformanceRewindHeaders;

  @SpeakeasyMetadata()
  request?: PostPortfolioForecastPerformanceRewindRequests;
}


export class PostPortfolioForecastPerformanceRewindResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  rewindResponse?: shared.RewindResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
