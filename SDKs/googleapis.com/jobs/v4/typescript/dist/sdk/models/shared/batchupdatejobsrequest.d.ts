import { SpeakeasyBase } from "../../../internal/utils";
import { JobInput } from "./job";
/**
 * Request to update a batch of jobs.
**/
export declare class BatchUpdateJobsRequestInput extends SpeakeasyBase {
    jobs?: JobInput[];
    updateMask?: string;
}
