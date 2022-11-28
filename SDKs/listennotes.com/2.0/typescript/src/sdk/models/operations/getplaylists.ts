import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetPlaylistsSortEnum {
    RecentAddedFirst = "recent_added_first",
    OldestAddedFirst = "oldest_added_first",
    NameAToZ = "name_a_to_z",
    NameZToA = "name_z_to_a"
}


export class GetPlaylistsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetPlaylistsSortEnum;
}


export class GetPlaylistsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" })
  xListenApiKey: string;
}


export class GetPlaylistsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPlaylistsQueryParams;

  @SpeakeasyMetadata()
  headers: GetPlaylistsHeaders;
}


export class GetPlaylistsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  playlistsResponse?: shared.PlaylistsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
