import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPodcastRecommendationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetPodcastRecommendationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=safe_mode" })
  safeMode?: number;
}


export class GetPodcastRecommendationsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" })
  xListenApiKey: string;
}


export class GetPodcastRecommendationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPodcastRecommendationsPathParams;

  @Metadata()
  queryParams: GetPodcastRecommendationsQueryParams;

  @Metadata()
  headers: GetPodcastRecommendationsHeaders;
}


export class GetPodcastRecommendationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getPodcastRecommendationsResponse?: shared.GetPodcastRecommendationsResponse;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
