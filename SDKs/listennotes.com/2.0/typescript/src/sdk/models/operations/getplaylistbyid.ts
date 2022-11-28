import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPlaylistByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum GetPlaylistByIdSortEnum {
    RecentAddedFirst = "recent_added_first",
    OldestAddedFirst = "oldest_added_first",
    RecentPublishedFirst = "recent_published_first",
    OldestPublishedFirst = "oldest_published_first"
}

export enum GetPlaylistByIdTypeEnum {
    EpisodeList = "episode_list",
    PodcastList = "podcast_list"
}


export class GetPlaylistByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_timestamp_ms" })
  lastTimestampMs?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetPlaylistByIdSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GetPlaylistByIdTypeEnum;
}


export class GetPlaylistByIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" })
  xListenApiKey: string;
}


export class GetPlaylistByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPlaylistByIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetPlaylistByIdQueryParams;

  @SpeakeasyMetadata()
  headers: GetPlaylistByIdHeaders;
}


export class GetPlaylistByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  playlistResponse?: shared.PlaylistResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
