import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetPlaylistsSortEnum {
    RecentAddedFirst = "recent_added_first"
,    OldestAddedFirst = "oldest_added_first"
,    NameAToZ = "name_a_to_z"
,    NameZToA = "name_z_to_a"
}


export class GetPlaylistsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetPlaylistsSortEnum;
}


export class GetPlaylistsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" })
  xListenApiKey: string;
}


export class GetPlaylistsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPlaylistsQueryParams;

  @Metadata()
  headers: GetPlaylistsHeaders;
}


export class GetPlaylistsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  playlistsResponse?: shared.PlaylistsResponse;

  @Metadata()
  statusCode: number;
}
