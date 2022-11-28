import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SnapshotStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    Deleting = "DELETING"
}
/**
 * A Filestore snapshot.
**/
export declare class Snapshot extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    filesystemUsedBytes?: string;
    labels?: Map<string, string>;
    name?: string;
    state?: SnapshotStateEnum;
}
/**
 * A Filestore snapshot.
**/
export declare class SnapshotInput extends SpeakeasyBase {
    description?: string;
    labels?: Map<string, string>;
}
