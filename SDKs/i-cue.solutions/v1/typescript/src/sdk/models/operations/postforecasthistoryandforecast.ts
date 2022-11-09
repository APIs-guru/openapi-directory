import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostForecastHistoryAndForecastHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostForecastHistoryAndForecastRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  planningLevelRequest?: shared.PlanningLevelRequest;

  @Metadata({ data: "request, media_type=application/json" })
  planningLevelRequest1?: shared.PlanningLevelRequest;

  @Metadata({ data: "request, media_type=text/json" })
  planningLevelRequest2?: shared.PlanningLevelRequest;
}


export class PostForecastHistoryAndForecastRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostForecastHistoryAndForecastHeaders;

  @Metadata()
  request?: PostForecastHistoryAndForecastRequests;
}


export class PostForecastHistoryAndForecastResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  historyAndForecastResponse?: shared.HistoryAndForecastResponse;

  @Metadata()
  statusCode: number;
}
