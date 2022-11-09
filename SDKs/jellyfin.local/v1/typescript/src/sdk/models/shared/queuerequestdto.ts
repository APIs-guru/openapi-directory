import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GroupQueueModeEnum } from "./groupqueuemodeenum";


// QueueRequestDto
/** 
 * Class QueueRequestDto.
**/
export class QueueRequestDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=ItemIds" })
  itemIds?: string[];

  @Metadata({ data: "json, name=Mode" })
  mode?: GroupQueueModeEnum;
}
