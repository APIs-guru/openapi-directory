import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum FolderStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    DeleteRequested = "DELETE_REQUESTED"
}
/**
 * A folder in an organization's resource hierarchy, used to organize that organization's resources.
**/
export declare class Folder extends SpeakeasyBase {
    createTime?: string;
    deleteTime?: string;
    displayName?: string;
    etag?: string;
    name?: string;
    parent?: string;
    state?: FolderStateEnum;
    updateTime?: string;
}
