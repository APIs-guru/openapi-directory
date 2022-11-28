import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SeekRequestDto
/** 
 * Class SeekRequestDto.
**/
export class SeekRequestDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PositionTicks" })
  positionTicks?: number;
}
