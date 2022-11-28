import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupShuffleModeEnum } from "./groupshufflemodeenum";



// SetShuffleModeRequestDto
/** 
 * Class SetShuffleModeRequestDto.
**/
export class SetShuffleModeRequestDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Mode" })
  mode?: GroupShuffleModeEnum;
}
