import { SpeakeasyBase } from "../../../internal/utils";
import { PubsubSnapshotMetadata } from "./pubsubsnapshotmetadata";
export declare enum SnapshotStateEnum {
    UnknownSnapshotState = "UNKNOWN_SNAPSHOT_STATE",
    Pending = "PENDING",
    Running = "RUNNING",
    Ready = "READY",
    Failed = "FAILED",
    Deleted = "DELETED"
}
/**
 * Represents a snapshot of a job.
**/
export declare class Snapshot extends SpeakeasyBase {
    creationTime?: string;
    description?: string;
    diskSizeBytes?: string;
    id?: string;
    projectId?: string;
    pubsubMetadata?: PubsubSnapshotMetadata[];
    region?: string;
    sourceJobId?: string;
    state?: SnapshotStateEnum;
    ttl?: string;
}
