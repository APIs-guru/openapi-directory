import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostForecastAiHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostForecastAiRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  aiPlanningLevelRequest?: shared.AiPlanningLevelRequest;

  @Metadata({ data: "request, media_type=application/json" })
  aiPlanningLevelRequest1?: shared.AiPlanningLevelRequest;

  @Metadata({ data: "request, media_type=text/json" })
  aiPlanningLevelRequest2?: shared.AiPlanningLevelRequest;
}


export class PostForecastAiRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostForecastAiHeaders;

  @Metadata()
  request?: PostForecastAiRequests;
}


export class PostForecastAiResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  forecastResponse?: shared.ForecastResponse;

  @Metadata()
  statusCode: number;
}
