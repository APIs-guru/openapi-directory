import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPodcastRecommendationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetPodcastRecommendationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=safe_mode" })
  safeMode?: number;
}


export class GetPodcastRecommendationsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" })
  xListenApiKey: string;
}


export class GetPodcastRecommendationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPodcastRecommendationsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetPodcastRecommendationsQueryParams;

  @SpeakeasyMetadata()
  headers: GetPodcastRecommendationsHeaders;
}


export class GetPodcastRecommendationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getPodcastRecommendationsResponse?: shared.GetPodcastRecommendationsResponse;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
