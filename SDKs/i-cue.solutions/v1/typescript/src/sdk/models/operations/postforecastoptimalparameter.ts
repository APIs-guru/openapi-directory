import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostForecastOptimalParameterHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostForecastOptimalParameterRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  planningLevelRequest?: shared.PlanningLevelRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  planningLevelRequest1?: shared.PlanningLevelRequest;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  planningLevelRequest2?: shared.PlanningLevelRequest;
}


export class PostForecastOptimalParameterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostForecastOptimalParameterHeaders;

  @SpeakeasyMetadata()
  request?: PostForecastOptimalParameterRequests;
}


export class PostForecastOptimalParameterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  optimalParameterResponse?: shared.OptimalParameterResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
