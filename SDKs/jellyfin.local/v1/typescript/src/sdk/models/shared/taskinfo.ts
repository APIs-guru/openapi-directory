import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaskResult } from "./taskresult";
import { TaskStateEnum } from "./taskstateenum";
import { TaskTriggerInfo } from "./tasktriggerinfo";



// TaskInfo
/** 
 * Class TaskInfo.
**/
export class TaskInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=CurrentProgressPercentage" })
  currentProgressPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=IsHidden" })
  isHidden?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=LastExecutionResult" })
  lastExecutionResult?: TaskResult;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: TaskStateEnum;

  @SpeakeasyMetadata({ data: "json, name=Triggers", elemType: TaskTriggerInfo })
  triggers?: TaskTriggerInfo[];
}
