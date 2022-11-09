import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBestPodcastsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=genre_id" })
  genreId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=publisher_region" })
  publisherRegion?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=region" })
  region?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=safe_mode" })
  safeMode?: number;
}


export class GetBestPodcastsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" })
  xListenApiKey: string;
}


export class GetBestPodcastsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetBestPodcastsQueryParams;

  @Metadata()
  headers: GetBestPodcastsHeaders;
}


export class GetBestPodcastsResponse extends SpeakeasyBase {
  @Metadata()
  bestPodcastsResponse?: shared.BestPodcastsResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
