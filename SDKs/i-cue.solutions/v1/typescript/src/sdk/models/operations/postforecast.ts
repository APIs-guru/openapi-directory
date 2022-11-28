import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostForecastHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostForecastRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  planningLevelRequest?: shared.PlanningLevelRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  planningLevelRequest1?: shared.PlanningLevelRequest;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  planningLevelRequest2?: shared.PlanningLevelRequest;
}


export class PostForecastRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostForecastHeaders;

  @SpeakeasyMetadata()
  request?: PostForecastRequests;
}


export class PostForecastResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  forecastResponse?: shared.ForecastResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
