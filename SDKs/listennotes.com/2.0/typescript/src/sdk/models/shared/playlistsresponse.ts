import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PlaylistsResponsePlaylists } from "./playlistsresponseplaylists";


export class PlaylistsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=has_next" })
  hasNext?: boolean;

  @Metadata({ data: "json, name=has_previous" })
  hasPrevious?: boolean;

  @Metadata({ data: "json, name=next_page_number" })
  nextPageNumber?: number;

  @Metadata({ data: "json, name=page_number" })
  pageNumber?: number;

  @Metadata({ data: "json, name=playlists", elemType: shared.PlaylistsResponsePlaylists })
  playlists?: PlaylistsResponsePlaylists[];

  @Metadata({ data: "json, name=previous_page_number" })
  previousPageNumber?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;
}
