import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostForecastAiHistoryAndForecastHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostForecastAiHistoryAndForecastRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  aiPlanningLevelRequest?: shared.AiPlanningLevelRequest;

  @Metadata({ data: "request, media_type=application/json" })
  aiPlanningLevelRequest1?: shared.AiPlanningLevelRequest;

  @Metadata({ data: "request, media_type=text/json" })
  aiPlanningLevelRequest2?: shared.AiPlanningLevelRequest;
}


export class PostForecastAiHistoryAndForecastRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostForecastAiHistoryAndForecastHeaders;

  @Metadata()
  request?: PostForecastAiHistoryAndForecastRequests;
}


export class PostForecastAiHistoryAndForecastResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  historyAndForecastResponse?: shared.HistoryAndForecastResponse;

  @Metadata()
  statusCode: number;
}
