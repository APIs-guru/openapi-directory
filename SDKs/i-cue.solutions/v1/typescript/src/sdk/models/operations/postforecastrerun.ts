import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostForecastRerunHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostForecastRerunRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  planningLevelReRunRequest?: shared.PlanningLevelReRunRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  planningLevelReRunRequest1?: shared.PlanningLevelReRunRequest;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  planningLevelReRunRequest2?: shared.PlanningLevelReRunRequest;
}


export class PostForecastRerunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostForecastRerunHeaders;

  @SpeakeasyMetadata()
  request?: PostForecastRerunRequests;
}


export class PostForecastRerunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  forecastResponse?: shared.ForecastResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
