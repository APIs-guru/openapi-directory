import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostForecastAiHistoryAndForecastHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostForecastAiHistoryAndForecastRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  aiPlanningLevelRequest?: shared.AiPlanningLevelRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  aiPlanningLevelRequest1?: shared.AiPlanningLevelRequest;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  aiPlanningLevelRequest2?: shared.AiPlanningLevelRequest;
}


export class PostForecastAiHistoryAndForecastRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostForecastAiHistoryAndForecastHeaders;

  @SpeakeasyMetadata()
  request?: PostForecastAiHistoryAndForecastRequests;
}


export class PostForecastAiHistoryAndForecastResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  historyAndForecastResponse?: shared.HistoryAndForecastResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
