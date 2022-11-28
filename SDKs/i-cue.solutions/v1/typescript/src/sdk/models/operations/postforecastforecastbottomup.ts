import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostForecastForecastBottomUpHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostForecastForecastBottomUpRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  planningLevelRequest?: shared.PlanningLevelRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  planningLevelRequest1?: shared.PlanningLevelRequest;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  planningLevelRequest2?: shared.PlanningLevelRequest;
}


export class PostForecastForecastBottomUpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostForecastForecastBottomUpHeaders;

  @SpeakeasyMetadata()
  request?: PostForecastForecastBottomUpRequests;
}


export class PostForecastForecastBottomUpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  forecastBottomUpResponse?: shared.ForecastBottomUpResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
