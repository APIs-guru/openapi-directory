import { SpeakeasyBase } from "../../../internal/utils";
import { WorkItemDetails } from "./workitemdetails";
/**
 * Information about a worker
**/
export declare class WorkerDetails extends SpeakeasyBase {
    workItems?: WorkItemDetails[];
    workerName?: string;
}
