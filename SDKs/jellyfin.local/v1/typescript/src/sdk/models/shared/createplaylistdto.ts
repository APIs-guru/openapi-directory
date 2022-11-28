import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreatePlaylistDto
/** 
 * Create new playlist dto.
**/
export class CreatePlaylistDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Ids" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "json, name=MediaType" })
  mediaType?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=UserId" })
  userId?: string;
}
