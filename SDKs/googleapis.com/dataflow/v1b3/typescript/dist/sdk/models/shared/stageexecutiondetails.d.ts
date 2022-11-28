import { SpeakeasyBase } from "../../../internal/utils";
import { WorkerDetails } from "./workerdetails";
/**
 * Information about the workers and work items within a stage.
**/
export declare class StageExecutionDetails extends SpeakeasyBase {
    nextPageToken?: string;
    workers?: WorkerDetails[];
}
