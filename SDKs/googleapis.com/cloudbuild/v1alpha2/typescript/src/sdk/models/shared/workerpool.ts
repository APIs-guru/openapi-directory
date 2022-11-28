import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkConfig } from "./networkconfig";
import { WorkerConfig } from "./workerconfig";


export enum WorkerPoolStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Running = "RUNNING",
    Deleting = "DELETING",
    Deleted = "DELETED"
}


// WorkerPool
/** 
 * Configuration for a WorkerPool to run the builds. Workers are machines that Cloud Build uses to run your builds. By default, all workers run in a project owned by Cloud Build. To have full control over the workers that execute your builds -- such as enabling them to access private resources on your private network -- you can request Cloud Build to run the workers in your own project by creating a custom workers pool.
**/
export class WorkerPool extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=deleteTime" })
  deleteTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=networkConfig" })
  networkConfig?: NetworkConfig;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: WorkerPoolStateEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=workerConfig" })
  workerConfig?: WorkerConfig;
}


// WorkerPoolInput
/** 
 * Configuration for a WorkerPool to run the builds. Workers are machines that Cloud Build uses to run your builds. By default, all workers run in a project owned by Cloud Build. To have full control over the workers that execute your builds -- such as enabling them to access private resources on your private network -- you can request Cloud Build to run the workers in your own project by creating a custom workers pool.
**/
export class WorkerPoolInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=networkConfig" })
  networkConfig?: NetworkConfig;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=workerConfig" })
  workerConfig?: WorkerConfig;
}
