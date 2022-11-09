import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SetPlaylistItemRequestDto
/** 
 * Class SetPlaylistItemRequestDto.
**/
export class SetPlaylistItemRequestDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=PlaylistItemId" })
  playlistItemId?: string;
}
