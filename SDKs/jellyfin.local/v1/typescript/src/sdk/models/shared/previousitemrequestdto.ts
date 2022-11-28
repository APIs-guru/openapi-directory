import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PreviousItemRequestDto
/** 
 * Class PreviousItemRequestDto.
**/
export class PreviousItemRequestDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PlaylistItemId" })
  playlistItemId?: string;
}
