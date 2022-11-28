import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBestPodcastsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=genre_id" })
  genreId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=publisher_region" })
  publisherRegion?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=safe_mode" })
  safeMode?: number;
}


export class GetBestPodcastsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" })
  xListenApiKey: string;
}


export class GetBestPodcastsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetBestPodcastsQueryParams;

  @SpeakeasyMetadata()
  headers: GetBestPodcastsHeaders;
}


export class GetBestPodcastsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bestPodcastsResponse?: shared.BestPodcastsResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
