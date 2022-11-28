import { SpeakeasyBase } from "../../../internal/utils";
import { WorkItemStatus } from "./workitemstatus";
/**
 * Request to report the status of WorkItems.
**/
export declare class ReportWorkItemStatusRequest extends SpeakeasyBase {
    currentWorkerTime?: string;
    location?: string;
    unifiedWorkerRequest?: Map<string, any>;
    workItemStatuses?: WorkItemStatus[];
    workerId?: string;
}
