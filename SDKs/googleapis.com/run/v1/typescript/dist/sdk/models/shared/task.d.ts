import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectMeta } from "./objectmeta";
import { TaskSpec } from "./taskspec";
import { TaskStatus } from "./taskstatus";
/**
 * Task represents a single run of a container to completion.
**/
export declare class Task extends SpeakeasyBase {
    apiVersion?: string;
    kind?: string;
    metadata?: ObjectMeta;
    spec?: TaskSpec;
    status?: TaskStatus;
}
