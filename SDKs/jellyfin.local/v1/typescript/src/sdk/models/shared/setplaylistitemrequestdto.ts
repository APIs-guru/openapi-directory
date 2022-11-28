import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SetPlaylistItemRequestDto
/** 
 * Class SetPlaylistItemRequestDto.
**/
export class SetPlaylistItemRequestDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PlaylistItemId" })
  playlistItemId?: string;
}
