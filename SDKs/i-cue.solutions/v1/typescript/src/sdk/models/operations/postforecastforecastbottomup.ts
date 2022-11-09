import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostForecastForecastBottomUpHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostForecastForecastBottomUpRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  planningLevelRequest?: shared.PlanningLevelRequest;

  @Metadata({ data: "request, media_type=application/json" })
  planningLevelRequest1?: shared.PlanningLevelRequest;

  @Metadata({ data: "request, media_type=text/json" })
  planningLevelRequest2?: shared.PlanningLevelRequest;
}


export class PostForecastForecastBottomUpRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostForecastForecastBottomUpHeaders;

  @Metadata()
  request?: PostForecastForecastBottomUpRequests;
}


export class PostForecastForecastBottomUpResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  forecastBottomUpResponse?: shared.ForecastBottomUpResponse;

  @Metadata()
  statusCode: number;
}
