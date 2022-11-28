import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostForecastAiHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostForecastAiRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  aiPlanningLevelRequest?: shared.AiPlanningLevelRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  aiPlanningLevelRequest1?: shared.AiPlanningLevelRequest;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  aiPlanningLevelRequest2?: shared.AiPlanningLevelRequest;
}


export class PostForecastAiRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostForecastAiHeaders;

  @SpeakeasyMetadata()
  request?: PostForecastAiRequests;
}


export class PostForecastAiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  forecastResponse?: shared.ForecastResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
