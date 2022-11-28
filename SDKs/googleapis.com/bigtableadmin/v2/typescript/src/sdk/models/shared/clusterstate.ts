import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionInfo } from "./encryptioninfo";


export enum ClusterStateReplicationStateEnum {
    StateNotKnown = "STATE_NOT_KNOWN",
    Initializing = "INITIALIZING",
    PlannedMaintenance = "PLANNED_MAINTENANCE",
    UnplannedMaintenance = "UNPLANNED_MAINTENANCE",
    Ready = "READY",
    ReadyOptimizing = "READY_OPTIMIZING"
}


// ClusterState
/** 
 * The state of a table's data in a particular cluster.
**/
export class ClusterState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encryptionInfo", elemType: EncryptionInfo })
  encryptionInfo?: EncryptionInfo[];

  @SpeakeasyMetadata({ data: "json, name=replicationState" })
  replicationState?: ClusterStateReplicationStateEnum;
}
