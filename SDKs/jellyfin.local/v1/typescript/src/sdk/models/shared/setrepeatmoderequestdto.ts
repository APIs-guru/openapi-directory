import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GroupRepeatModeEnum } from "./grouprepeatmodeenum";


// SetRepeatModeRequestDto
/** 
 * Class SetRepeatModeRequestDto.
**/
export class SetRepeatModeRequestDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=Mode" })
  mode?: GroupRepeatModeEnum;
}
