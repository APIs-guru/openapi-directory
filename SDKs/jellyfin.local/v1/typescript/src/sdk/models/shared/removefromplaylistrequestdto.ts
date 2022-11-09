import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RemoveFromPlaylistRequestDto
/** 
 * Class RemoveFromPlaylistRequestDto.
**/
export class RemoveFromPlaylistRequestDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=PlaylistItemIds" })
  playlistItemIds?: string[];
}
