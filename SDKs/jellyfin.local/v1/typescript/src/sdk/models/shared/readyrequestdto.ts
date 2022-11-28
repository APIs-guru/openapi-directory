import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReadyRequestDto
/** 
 * Class ReadyRequest.
**/
export class ReadyRequestDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IsPlaying" })
  isPlaying?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PlaylistItemId" })
  playlistItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=PositionTicks" })
  positionTicks?: number;

  @SpeakeasyMetadata({ data: "json, name=When" })
  when?: Date;
}
