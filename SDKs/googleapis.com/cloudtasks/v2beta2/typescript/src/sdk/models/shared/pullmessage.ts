import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PullMessage
/** 
 * The pull message contains data that can be used by the caller of LeaseTasks to process the task. This proto can only be used for tasks in a queue which has pull_target set.
**/
export class PullMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=payload" })
  payload?: string;

  @Metadata({ data: "json, name=tag" })
  tag?: string;
}
