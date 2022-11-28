import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostForecastHistoryAndForecastHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostForecastHistoryAndForecastRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  planningLevelRequest?: shared.PlanningLevelRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  planningLevelRequest1?: shared.PlanningLevelRequest;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  planningLevelRequest2?: shared.PlanningLevelRequest;
}


export class PostForecastHistoryAndForecastRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostForecastHistoryAndForecastHeaders;

  @SpeakeasyMetadata()
  request?: PostForecastHistoryAndForecastRequests;
}


export class PostForecastHistoryAndForecastResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  historyAndForecastResponse?: shared.HistoryAndForecastResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
