import { SpeakeasyBase } from "../../../internal/utils";
import { PrivatePoolV1Config } from "./privatepoolv1config";
export declare enum WorkerPoolStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Running = "RUNNING",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Updating = "UPDATING"
}
/**
 * Configuration for a `WorkerPool`. Cloud Build owns and maintains a pool of workers for general use and have no access to a project's private network. By default, builds submitted to Cloud Build will use a worker from this pool. If your build needs access to resources on a private network, create and use a `WorkerPool` to run your builds. Private `WorkerPool`s give your builds access to any single VPC network that you administer, including any on-prem resources connected to that VPC network. For an overview of private pools, see [Private pools overview](https://cloud.google.com/build/docs/private-pools/private-pools-overview).
**/
export declare class WorkerPoolInput extends SpeakeasyBase {
    annotations?: Map<string, string>;
    displayName?: string;
    privatePoolV1Config?: PrivatePoolV1Config;
}
/**
 * Configuration for a `WorkerPool`. Cloud Build owns and maintains a pool of workers for general use and have no access to a project's private network. By default, builds submitted to Cloud Build will use a worker from this pool. If your build needs access to resources on a private network, create and use a `WorkerPool` to run your builds. Private `WorkerPool`s give your builds access to any single VPC network that you administer, including any on-prem resources connected to that VPC network. For an overview of private pools, see [Private pools overview](https://cloud.google.com/build/docs/private-pools/private-pools-overview).
**/
export declare class WorkerPool extends SpeakeasyBase {
    annotations?: Map<string, string>;
    createTime?: string;
    deleteTime?: string;
    displayName?: string;
    etag?: string;
    name?: string;
    privatePoolV1Config?: PrivatePoolV1Config;
    state?: WorkerPoolStateEnum;
    uid?: string;
    updateTime?: string;
}
