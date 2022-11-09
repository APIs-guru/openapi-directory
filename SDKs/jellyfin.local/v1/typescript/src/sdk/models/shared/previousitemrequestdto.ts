import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PreviousItemRequestDto
/** 
 * Class PreviousItemRequestDto.
**/
export class PreviousItemRequestDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=PlaylistItemId" })
  playlistItemId?: string;
}
