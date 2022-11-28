import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectMeta } from "./objectmeta";
import { JobSpec } from "./jobspec";
import { JobStatus } from "./jobstatus";
/**
 * Job represents the configuration of a single job. A job an immutable resource that references a container image which is run to completion.
**/
export declare class Job extends SpeakeasyBase {
    apiVersion?: string;
    kind?: string;
    metadata?: ObjectMeta;
    spec?: JobSpec;
    status?: JobStatus;
}
