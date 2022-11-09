import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SearchTypeEnum {
    Episode = "episode"
,    Podcast = "podcast"
,    Curated = "curated"
}


export class SearchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=episode_count_max" })
  episodeCountMax?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=episode_count_min" })
  episodeCountMin?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=genre_ids" })
  genreIds?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=len_max" })
  lenMax?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=len_min" })
  lenMin?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ncid" })
  ncid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ocid" })
  ocid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=only_in" })
  onlyIn?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=published_after" })
  publishedAfter?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=published_before" })
  publishedBefore?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=region" })
  region?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=safe_mode" })
  safeMode?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_by_date" })
  sortByDate?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: SearchTypeEnum;
}


export class SearchHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" })
  xListenApiKey: string;
}


export class SearchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchQueryParams;

  @Metadata()
  headers: SearchHeaders;
}


export class SearchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  searchResponse?: shared.SearchResponse;

  @Metadata()
  statusCode: number;
}
