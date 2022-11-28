import { SpeakeasyBase } from "../../../internal/utils";
import { TaskResult } from "./taskresult";
import { TaskStateEnum } from "./taskstateenum";
import { TaskTriggerInfo } from "./tasktriggerinfo";
/**
 * Class TaskInfo.
**/
export declare class TaskInfo extends SpeakeasyBase {
    category?: string;
    currentProgressPercentage?: number;
    description?: string;
    id?: string;
    isHidden?: boolean;
    key?: string;
    lastExecutionResult?: TaskResult;
    name?: string;
    state?: TaskStateEnum;
    triggers?: TaskTriggerInfo[];
}
