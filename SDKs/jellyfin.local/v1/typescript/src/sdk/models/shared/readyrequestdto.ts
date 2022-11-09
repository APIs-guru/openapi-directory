import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReadyRequestDto
/** 
 * Class ReadyRequest.
**/
export class ReadyRequestDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=IsPlaying" })
  isPlaying?: boolean;

  @Metadata({ data: "json, name=PlaylistItemId" })
  playlistItemId?: string;

  @Metadata({ data: "json, name=PositionTicks" })
  positionTicks?: number;

  @Metadata({ data: "json, name=When" })
  when?: Date;
}
