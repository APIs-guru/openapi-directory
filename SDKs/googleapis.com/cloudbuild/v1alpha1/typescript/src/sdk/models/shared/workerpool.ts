import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkerConfig } from "./workerconfig";


export enum WorkerPoolRegionsEnum {
    RegionUnspecified = "REGION_UNSPECIFIED",
    UsCentral1 = "us-central1",
    UsWest1 = "us-west1",
    UsEast1 = "us-east1",
    UsEast4 = "us-east4"
}

export enum WorkerPoolStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
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

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=regions" })
  regions?: WorkerPoolRegionsEnum[];

  @SpeakeasyMetadata({ data: "json, name=serviceAccountEmail" })
  serviceAccountEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: WorkerPoolStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=workerConfig" })
  workerConfig?: WorkerConfig;

  @SpeakeasyMetadata({ data: "json, name=workerCount" })
  workerCount?: string;
}
