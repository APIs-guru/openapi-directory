import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NextItemRequestDto
/** 
 * Class NextItemRequestDto.
**/
export class NextItemRequestDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PlaylistItemId" })
  playlistItemId?: string;
}
