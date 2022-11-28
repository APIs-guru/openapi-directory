import { SpeakeasyBase } from "../../../internal/utils";
import { JobInput } from "./job";
/**
 * A request to submit a job.
**/
export declare class SubmitJobRequestInput extends SpeakeasyBase {
    job?: JobInput;
    requestId?: string;
}
