import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MovePlaylistItemRequestDto
/** 
 * Class MovePlaylistItemRequestDto.
**/
export class MovePlaylistItemRequestDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NewIndex" })
  newIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=PlaylistItemId" })
  playlistItemId?: string;
}
