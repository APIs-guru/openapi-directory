import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PlayRequestDto
/** 
 * Class PlayRequestDto.
**/
export class PlayRequestDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=PlayingItemPosition" })
  playingItemPosition?: number;

  @Metadata({ data: "json, name=PlayingQueue" })
  playingQueue?: string[];

  @Metadata({ data: "json, name=StartPositionTicks" })
  startPositionTicks?: number;
}
