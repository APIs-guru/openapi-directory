import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProjectStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    DeleteRequested = "DELETE_REQUESTED"
}
/**
 * A project is a high-level Google Cloud entity. It is a container for ACLs, APIs, App Engine Apps, VMs, and other Google Cloud Platform resources.
**/
export declare class Project extends SpeakeasyBase {
    createTime?: string;
    deleteTime?: string;
    displayName?: string;
    etag?: string;
    labels?: Map<string, string>;
    name?: string;
    parent?: string;
    projectId?: string;
    state?: ProjectStateEnum;
    updateTime?: string;
}
/**
 * A project is a high-level Google Cloud entity. It is a container for ACLs, APIs, App Engine Apps, VMs, and other Google Cloud Platform resources.
**/
export declare class ProjectInput extends SpeakeasyBase {
    displayName?: string;
    labels?: Map<string, string>;
    parent?: string;
    projectId?: string;
}
