import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionInfo } from "./encryptioninfo";
export declare enum ClusterStateReplicationStateEnum {
    StateNotKnown = "STATE_NOT_KNOWN",
    Initializing = "INITIALIZING",
    PlannedMaintenance = "PLANNED_MAINTENANCE",
    UnplannedMaintenance = "UNPLANNED_MAINTENANCE",
    Ready = "READY",
    ReadyOptimizing = "READY_OPTIMIZING"
}
/**
 * The state of a table's data in a particular cluster.
**/
export declare class ClusterState extends SpeakeasyBase {
    encryptionInfo?: EncryptionInfo[];
    replicationState?: ClusterStateReplicationStateEnum;
}
