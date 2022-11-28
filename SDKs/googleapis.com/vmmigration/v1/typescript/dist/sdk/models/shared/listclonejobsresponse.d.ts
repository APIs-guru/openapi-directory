import { SpeakeasyBase } from "../../../internal/utils";
import { CloneJob } from "./clonejob";
/**
 * Response message for 'ListCloneJobs' request.
**/
export declare class ListCloneJobsResponse extends SpeakeasyBase {
    cloneJobs?: CloneJob[];
    nextPageToken?: string;
    unreachable?: string[];
}
