import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MovePlaylistItemRequestDto
/** 
 * Class MovePlaylistItemRequestDto.
**/
export class MovePlaylistItemRequestDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=NewIndex" })
  newIndex?: number;

  @Metadata({ data: "json, name=PlaylistItemId" })
  playlistItemId?: string;
}
