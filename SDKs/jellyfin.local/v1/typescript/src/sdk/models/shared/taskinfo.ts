import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TaskResult } from "./taskresult";
import { TaskStateEnum } from "./taskstateenum";
import { TaskTriggerInfo } from "./tasktriggerinfo";


// TaskInfo
/** 
 * Class TaskInfo.
**/
export class TaskInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=Category" })
  category?: string;

  @Metadata({ data: "json, name=CurrentProgressPercentage" })
  currentProgressPercentage?: number;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=IsHidden" })
  isHidden?: boolean;

  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=LastExecutionResult" })
  lastExecutionResult?: TaskResult;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=State" })
  state?: TaskStateEnum;

  @Metadata({ data: "json, name=Triggers", elemType: shared.TaskTriggerInfo })
  triggers?: TaskTriggerInfo[];
}
