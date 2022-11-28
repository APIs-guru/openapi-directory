import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupQueueModeEnum } from "./groupqueuemodeenum";



// QueueRequestDto
/** 
 * Class QueueRequestDto.
**/
export class QueueRequestDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ItemIds" })
  itemIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=Mode" })
  mode?: GroupQueueModeEnum;
}
