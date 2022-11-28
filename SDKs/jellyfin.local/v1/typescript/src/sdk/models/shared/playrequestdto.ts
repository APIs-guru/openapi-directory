import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PlayRequestDto
/** 
 * Class PlayRequestDto.
**/
export class PlayRequestDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PlayingItemPosition" })
  playingItemPosition?: number;

  @SpeakeasyMetadata({ data: "json, name=PlayingQueue" })
  playingQueue?: string[];

  @SpeakeasyMetadata({ data: "json, name=StartPositionTicks" })
  startPositionTicks?: number;
}
