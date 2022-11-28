import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RemoveFromPlaylistRequestDto
/** 
 * Class RemoveFromPlaylistRequestDto.
**/
export class RemoveFromPlaylistRequestDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PlaylistItemIds" })
  playlistItemIds?: string[];
}
