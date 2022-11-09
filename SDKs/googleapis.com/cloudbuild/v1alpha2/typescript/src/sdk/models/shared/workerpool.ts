import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NetworkConfig } from "./networkconfig";
import { WorkerConfig } from "./workerconfig";

export enum WorkerPoolStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Running = "RUNNING"
,    Deleting = "DELETING"
,    Deleted = "DELETED"
}


// WorkerPool
/** 
 * Configuration for a WorkerPool to run the builds. Workers are machines that Cloud Build uses to run your builds. By default, all workers run in a project owned by Cloud Build. To have full control over the workers that execute your builds -- such as enabling them to access private resources on your private network -- you can request Cloud Build to run the workers in your own project by creating a custom workers pool.
**/
export class WorkerPool extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=deleteTime" })
  deleteTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=networkConfig" })
  networkConfig?: NetworkConfig;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=state" })
  state?: WorkerPoolStateEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=workerConfig" })
  workerConfig?: WorkerConfig;
}
