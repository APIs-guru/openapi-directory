import { SpeakeasyBase } from "../../../internal/utils";
import { WorkItem } from "./workitem";
/**
 * Response to a request to lease WorkItems.
**/
export declare class LeaseWorkItemResponse extends SpeakeasyBase {
    unifiedWorkerResponse?: Map<string, any>;
    workItems?: WorkItem[];
}
