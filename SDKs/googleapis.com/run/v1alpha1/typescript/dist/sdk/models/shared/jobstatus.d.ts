import { SpeakeasyBase } from "../../../internal/utils";
import { JobCondition } from "./jobcondition";
import { InstanceStatus } from "./instancestatus";
/**
 * JobStatus represents the current state of a Job.
**/
export declare class JobStatus extends SpeakeasyBase {
    active?: number;
    completionTime?: string;
    conditions?: JobCondition[];
    failed?: number;
    imageDigest?: string;
    instances?: InstanceStatus[];
    observedGeneration?: number;
    startTime?: string;
    succeeded?: number;
}
