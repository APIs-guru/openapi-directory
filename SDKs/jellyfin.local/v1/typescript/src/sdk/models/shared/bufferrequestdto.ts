import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BufferRequestDto
/** 
 * Class BufferRequestDto.
**/
export class BufferRequestDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IsPlaying" })
  isPlaying?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PlaylistItemId" })
  playlistItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=PositionTicks" })
  positionTicks?: number;

  @SpeakeasyMetadata({ data: "json, name=When" })
  when?: Date;
}
