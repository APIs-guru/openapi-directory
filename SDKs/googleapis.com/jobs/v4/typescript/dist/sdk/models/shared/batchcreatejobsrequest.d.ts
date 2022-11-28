import { SpeakeasyBase } from "../../../internal/utils";
import { JobInput } from "./job";
/**
 * Request to create a batch of jobs.
**/
export declare class BatchCreateJobsRequestInput extends SpeakeasyBase {
    jobs?: JobInput[];
}
