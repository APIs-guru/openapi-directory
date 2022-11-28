import { SpeakeasyBase } from "../../../internal/utils";
import { WorkerConfig } from "./workerconfig";
export declare enum WorkerPoolRegionsEnum {
    RegionUnspecified = "REGION_UNSPECIFIED",
    UsCentral1 = "us-central1",
    UsWest1 = "us-west1",
    UsEast1 = "us-east1",
    UsEast4 = "us-east4"
}
export declare enum WorkerPoolStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
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
    projectId?: string;
    regions?: WorkerPoolRegionsEnum[];
    serviceAccountEmail?: string;
    status?: WorkerPoolStatusEnum;
    updateTime?: string;
    workerConfig?: WorkerConfig;
    workerCount?: string;
}
