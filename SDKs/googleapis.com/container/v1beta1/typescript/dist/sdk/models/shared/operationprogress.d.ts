import { SpeakeasyBase } from "../../../internal/utils";
import { Metric } from "./metric";
export declare enum OperationProgressStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    Pending = "PENDING",
    Running = "RUNNING",
    Done = "DONE",
    Aborting = "ABORTING"
}
/**
 * Information about operation (or operation stage) progress.
**/
export declare class OperationProgress extends SpeakeasyBase {
    metrics?: Metric[];
    name?: string;
    stages?: OperationProgress[];
    status?: OperationProgressStatusEnum;
}
