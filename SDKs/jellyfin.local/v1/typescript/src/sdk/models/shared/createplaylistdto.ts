import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreatePlaylistDto
/** 
 * Create new playlist dto.
**/
export class CreatePlaylistDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=Ids" })
  ids?: string[];

  @Metadata({ data: "json, name=MediaType" })
  mediaType?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=UserId" })
  userId?: string;
}
