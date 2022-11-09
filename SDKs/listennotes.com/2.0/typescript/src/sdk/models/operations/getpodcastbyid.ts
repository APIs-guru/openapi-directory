import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPodcastByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum GetPodcastByIdSortEnum {
    RecentFirst = "recent_first"
,    OldestFirst = "oldest_first"
}


export class GetPodcastByIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=next_episode_pub_date" })
  nextEpisodePubDate?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetPodcastByIdSortEnum;
}


export class GetPodcastByIdHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" })
  xListenApiKey: string;
}


export class GetPodcastByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPodcastByIdPathParams;

  @Metadata()
  queryParams: GetPodcastByIdQueryParams;

  @Metadata()
  headers: GetPodcastByIdHeaders;
}


export class GetPodcastByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  podcastFull?: shared.PodcastFull;

  @Metadata()
  statusCode: number;
}
