import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceId } from "./resourceid";
export declare enum ProjectLifecycleStateEnum {
    LifecycleStateUnspecified = "LIFECYCLE_STATE_UNSPECIFIED",
    Active = "ACTIVE",
    DeleteRequested = "DELETE_REQUESTED",
    DeleteInProgress = "DELETE_IN_PROGRESS"
}
/**
 * A Project is a high-level Google Cloud Platform entity. It is a container for ACLs, APIs, App Engine Apps, VMs, and other Google Cloud Platform resources.
**/
export declare class Project extends SpeakeasyBase {
    createTime?: string;
    labels?: Map<string, string>;
    lifecycleState?: ProjectLifecycleStateEnum;
    name?: string;
    parent?: ResourceId;
    projectId?: string;
    projectNumber?: string;
}
