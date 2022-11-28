import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceId } from "./resourceid";


export enum ProjectLifecycleStateEnum {
    LifecycleStateUnspecified = "LIFECYCLE_STATE_UNSPECIFIED",
    Active = "ACTIVE",
    DeleteRequested = "DELETE_REQUESTED",
    DeleteInProgress = "DELETE_IN_PROGRESS"
}


// Project
/** 
 * A Project is a high-level Google Cloud Platform entity. It is a container for ACLs, APIs, App Engine Apps, VMs, and other Google Cloud Platform resources.
**/
export class Project extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=lifecycleState" })
  lifecycleState?: ProjectLifecycleStateEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: ResourceId;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=projectNumber" })
  projectNumber?: string;
}
