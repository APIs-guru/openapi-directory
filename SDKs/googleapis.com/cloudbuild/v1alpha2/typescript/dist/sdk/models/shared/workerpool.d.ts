import { SpeakeasyBase } from "../../../internal/utils/utils";
import { NetworkConfig } from "./networkconfig";
import { WorkerConfig } from "./workerconfig";
export declare enum WorkerPoolStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Running = "RUNNING",
    Deleting = "DELETING",
    Deleted = "DELETED"
}
/**
 * Configuration for a WorkerPool to run the builds. Workers are machines that Cloud Build uses to run your builds. By default, all workers run in a project owned by Cloud Build. To have full control over the workers that execute your builds -- such as enabling them to access private resources on your private network -- you can request Cloud Build to run the workers in your own project by creating a custom workers pool.
**/
export declare class WorkerPool extends SpeakeasyBase {
    createTime?: string;
    deleteTime?: string;
    name?: string;
    networkConfig?: NetworkConfig;
    region?: string;
    state?: WorkerPoolStateEnum;
    updateTime?: string;
    workerConfig?: WorkerConfig;
}
