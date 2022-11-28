import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPodcastByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum GetPodcastByIdSortEnum {
    RecentFirst = "recent_first",
    OldestFirst = "oldest_first"
}


export class GetPodcastByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_episode_pub_date" })
  nextEpisodePubDate?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetPodcastByIdSortEnum;
}


export class GetPodcastByIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" })
  xListenApiKey: string;
}


export class GetPodcastByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPodcastByIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetPodcastByIdQueryParams;

  @SpeakeasyMetadata()
  headers: GetPodcastByIdHeaders;
}


export class GetPodcastByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  podcastFull?: shared.PodcastFull;

  @SpeakeasyMetadata()
  statusCode: number;
}
