import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostForecastOptimalParameterHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostForecastOptimalParameterRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  planningLevelRequest?: shared.PlanningLevelRequest;

  @Metadata({ data: "request, media_type=application/json" })
  planningLevelRequest1?: shared.PlanningLevelRequest;

  @Metadata({ data: "request, media_type=text/json" })
  planningLevelRequest2?: shared.PlanningLevelRequest;
}


export class PostForecastOptimalParameterRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostForecastOptimalParameterHeaders;

  @Metadata()
  request?: PostForecastOptimalParameterRequests;
}


export class PostForecastOptimalParameterResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  optimalParameterResponse?: shared.OptimalParameterResponse;

  @Metadata()
  statusCode: number;
}
