import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum SearchTypeEnum {
    Episode = "episode",
    Podcast = "podcast",
    Curated = "curated"
}


export class SearchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=episode_count_max" })
  episodeCountMax?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=episode_count_min" })
  episodeCountMin?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=genre_ids" })
  genreIds?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=len_max" })
  lenMax?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=len_min" })
  lenMin?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ncid" })
  ncid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ocid" })
  ocid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=only_in" })
  onlyIn?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=published_after" })
  publishedAfter?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=published_before" })
  publishedBefore?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=safe_mode" })
  safeMode?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by_date" })
  sortByDate?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: SearchTypeEnum;
}


export class SearchHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" })
  xListenApiKey: string;
}


export class SearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchQueryParams;

  @SpeakeasyMetadata()
  headers: SearchHeaders;
}


export class SearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  searchResponse?: shared.SearchResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
