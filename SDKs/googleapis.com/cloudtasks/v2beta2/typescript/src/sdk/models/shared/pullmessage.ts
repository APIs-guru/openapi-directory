import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PullMessage
/** 
 * The pull message contains data that can be used by the caller of LeaseTasks to process the task. This proto can only be used for tasks in a queue which has pull_target set.
**/
export class PullMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: string;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}
