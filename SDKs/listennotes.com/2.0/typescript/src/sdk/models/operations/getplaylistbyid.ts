import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPlaylistByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum GetPlaylistByIdSortEnum {
    RecentAddedFirst = "recent_added_first"
,    OldestAddedFirst = "oldest_added_first"
,    RecentPublishedFirst = "recent_published_first"
,    OldestPublishedFirst = "oldest_published_first"
}

export enum GetPlaylistByIdTypeEnum {
    EpisodeList = "episode_list"
,    PodcastList = "podcast_list"
}


export class GetPlaylistByIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=last_timestamp_ms" })
  lastTimestampMs?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetPlaylistByIdSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GetPlaylistByIdTypeEnum;
}


export class GetPlaylistByIdHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" })
  xListenApiKey: string;
}


export class GetPlaylistByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPlaylistByIdPathParams;

  @Metadata()
  queryParams: GetPlaylistByIdQueryParams;

  @Metadata()
  headers: GetPlaylistByIdHeaders;
}


export class GetPlaylistByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  playlistResponse?: shared.PlaylistResponse;

  @Metadata()
  statusCode: number;
}
