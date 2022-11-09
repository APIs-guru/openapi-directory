import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum FolderLifecycleStateEnum {
    LifecycleStateUnspecified = "LIFECYCLE_STATE_UNSPECIFIED",
    Active = "ACTIVE",
    DeleteRequested = "DELETE_REQUESTED"
}
/**
 * A Folder in an Organization's resource hierarchy, used to organize that Organization's resources.
**/
export declare class Folder extends SpeakeasyBase {
    createTime?: string;
    displayName?: string;
    lifecycleState?: FolderLifecycleStateEnum;
    name?: string;
    parent?: string;
}
