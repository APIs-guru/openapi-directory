import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IgnoreWaitRequestDto
/** 
 * Class IgnoreWaitRequestDto.
**/
export class IgnoreWaitRequestDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IgnoreWait" })
  ignoreWait?: boolean;
}
