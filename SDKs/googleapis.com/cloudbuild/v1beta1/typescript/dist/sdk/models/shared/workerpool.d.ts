import { SpeakeasyBase } from "../../../internal/utils";
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
 * Configuration for a `WorkerPool` to run the builds. Workers provide a build environment where Cloud Build runs your builds. Cloud Build owns and maintains a pool of workers for general use. By default, when you submit a build, Cloud Build uses one of the workers from this pool. Builds that run in the default worker pool have access to the public internet. If your build needs access to resources on a private network, create and use a `WorkerPool` to run your builds. Custom `WorkerPool`s give your builds access to any single VPC network that you administer, including any on-prem resources connected to that VPC network. For an overview of custom worker pools, see [Custom workers overview](https://cloud.google.com/cloud-build/docs/custom-workers/custom-workers-overview).
**/
export declare class WorkerPool extends SpeakeasyBase {
    annotations?: Map<string, string>;
    createTime?: string;
    deleteTime?: string;
    displayName?: string;
    etag?: string;
    name?: string;
    networkConfig?: NetworkConfig;
    state?: WorkerPoolStateEnum;
    uid?: string;
    updateTime?: string;
    workerConfig?: WorkerConfig;
}
/**
 * Configuration for a `WorkerPool` to run the builds. Workers provide a build environment where Cloud Build runs your builds. Cloud Build owns and maintains a pool of workers for general use. By default, when you submit a build, Cloud Build uses one of the workers from this pool. Builds that run in the default worker pool have access to the public internet. If your build needs access to resources on a private network, create and use a `WorkerPool` to run your builds. Custom `WorkerPool`s give your builds access to any single VPC network that you administer, including any on-prem resources connected to that VPC network. For an overview of custom worker pools, see [Custom workers overview](https://cloud.google.com/cloud-build/docs/custom-workers/custom-workers-overview).
**/
export declare class WorkerPoolInput extends SpeakeasyBase {
    annotations?: Map<string, string>;
    displayName?: string;
    networkConfig?: NetworkConfig;
    workerConfig?: WorkerConfig;
}
