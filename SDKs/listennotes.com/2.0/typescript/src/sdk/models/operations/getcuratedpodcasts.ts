import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCuratedPodcastsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class GetCuratedPodcastsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" })
  xListenApiKey: string;
}


export class GetCuratedPodcastsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCuratedPodcastsQueryParams;

  @Metadata()
  headers: GetCuratedPodcastsHeaders;
}


export class GetCuratedPodcastsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getCuratedPodcastsResponse?: shared.GetCuratedPodcastsResponse;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
