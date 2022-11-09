import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SeekRequestDto
/** 
 * Class SeekRequestDto.
**/
export class SeekRequestDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=PositionTicks" })
  positionTicks?: number;
}
