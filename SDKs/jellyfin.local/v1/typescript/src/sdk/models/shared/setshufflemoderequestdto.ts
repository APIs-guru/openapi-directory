import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GroupShuffleModeEnum } from "./groupshufflemodeenum";


// SetShuffleModeRequestDto
/** 
 * Class SetShuffleModeRequestDto.
**/
export class SetShuffleModeRequestDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=Mode" })
  mode?: GroupShuffleModeEnum;
}
