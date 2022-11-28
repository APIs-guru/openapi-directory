import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEpisodeRecommendationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetEpisodeRecommendationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=safe_mode" })
  safeMode?: number;
}


export class GetEpisodeRecommendationsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" })
  xListenApiKey: string;
}


export class GetEpisodeRecommendationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEpisodeRecommendationsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetEpisodeRecommendationsQueryParams;

  @SpeakeasyMetadata()
  headers: GetEpisodeRecommendationsHeaders;
}


export class GetEpisodeRecommendationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getEpisodeRecommendationsResponse?: shared.GetEpisodeRecommendationsResponse;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
