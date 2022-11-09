import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostForecastRerunHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostForecastRerunRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  planningLevelReRunRequest?: shared.PlanningLevelReRunRequest;

  @Metadata({ data: "request, media_type=application/json" })
  planningLevelReRunRequest1?: shared.PlanningLevelReRunRequest;

  @Metadata({ data: "request, media_type=text/json" })
  planningLevelReRunRequest2?: shared.PlanningLevelReRunRequest;
}


export class PostForecastRerunRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostForecastRerunHeaders;

  @Metadata()
  request?: PostForecastRerunRequests;
}


export class PostForecastRerunResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  forecastResponse?: shared.ForecastResponse;

  @Metadata()
  statusCode: number;
}
