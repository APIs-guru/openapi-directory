import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to lease WorkItems.
**/
export declare class LeaseWorkItemRequest extends SpeakeasyBase {
    currentWorkerTime?: string;
    location?: string;
    requestedLeaseDuration?: string;
    unifiedWorkerRequest?: Map<string, any>;
    workItemTypes?: string[];
    workerCapabilities?: string[];
    workerId?: string;
}
