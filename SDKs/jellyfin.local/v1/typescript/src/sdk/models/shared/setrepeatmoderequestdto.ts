import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupRepeatModeEnum } from "./grouprepeatmodeenum";



// SetRepeatModeRequestDto
/** 
 * Class SetRepeatModeRequestDto.
**/
export class SetRepeatModeRequestDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Mode" })
  mode?: GroupRepeatModeEnum;
}
