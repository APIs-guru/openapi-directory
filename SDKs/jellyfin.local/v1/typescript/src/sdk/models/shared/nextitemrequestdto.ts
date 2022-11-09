import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NextItemRequestDto
/** 
 * Class NextItemRequestDto.
**/
export class NextItemRequestDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=PlaylistItemId" })
  playlistItemId?: string;
}
