import { SpeakeasyBase } from "../../../internal/utils";
import { TaskCompletionStatusEnum } from "./taskcompletionstatusenum";
/**
 * Class TaskExecutionInfo.
**/
export declare class TaskResult extends SpeakeasyBase {
    endTimeUtc?: Date;
    errorMessage?: string;
    id?: string;
    key?: string;
    longErrorMessage?: string;
    name?: string;
    startTimeUtc?: Date;
    status?: TaskCompletionStatusEnum;
}
