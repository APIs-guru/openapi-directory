import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostForecastFullDetailHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostForecastFullDetailRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  planningLevelRequest?: shared.PlanningLevelRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  planningLevelRequest1?: shared.PlanningLevelRequest;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  planningLevelRequest2?: shared.PlanningLevelRequest;
}


export class PostForecastFullDetailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostForecastFullDetailHeaders;

  @SpeakeasyMetadata()
  request?: PostForecastFullDetailRequests;
}


export class PostForecastFullDetailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fullDetailsForecastResponse?: shared.FullDetailsForecastResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
