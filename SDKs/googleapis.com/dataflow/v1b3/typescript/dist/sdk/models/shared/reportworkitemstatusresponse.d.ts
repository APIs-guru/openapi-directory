import { SpeakeasyBase } from "../../../internal/utils";
import { WorkItemServiceState } from "./workitemservicestate";
/**
 * Response from a request to report the status of WorkItems.
**/
export declare class ReportWorkItemStatusResponse extends SpeakeasyBase {
    unifiedWorkerResponse?: Map<string, any>;
    workItemServiceStates?: WorkItemServiceState[];
}
