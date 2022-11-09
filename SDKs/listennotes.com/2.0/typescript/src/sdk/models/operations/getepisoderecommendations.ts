import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEpisodeRecommendationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetEpisodeRecommendationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=safe_mode" })
  safeMode?: number;
}


export class GetEpisodeRecommendationsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" })
  xListenApiKey: string;
}


export class GetEpisodeRecommendationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEpisodeRecommendationsPathParams;

  @Metadata()
  queryParams: GetEpisodeRecommendationsQueryParams;

  @Metadata()
  headers: GetEpisodeRecommendationsHeaders;
}


export class GetEpisodeRecommendationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getEpisodeRecommendationsResponse?: shared.GetEpisodeRecommendationsResponse;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
