import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EncryptionInfo } from "./encryptioninfo";

export enum ClusterStateReplicationStateEnum {
    StateNotKnown = "STATE_NOT_KNOWN"
,    Initializing = "INITIALIZING"
,    PlannedMaintenance = "PLANNED_MAINTENANCE"
,    UnplannedMaintenance = "UNPLANNED_MAINTENANCE"
,    Ready = "READY"
,    ReadyOptimizing = "READY_OPTIMIZING"
}


// ClusterState
/** 
 * The state of a table's data in a particular cluster.
**/
export class ClusterState extends SpeakeasyBase {
  @Metadata({ data: "json, name=encryptionInfo", elemType: shared.EncryptionInfo })
  encryptionInfo?: EncryptionInfo[];

  @Metadata({ data: "json, name=replicationState" })
  replicationState?: ClusterStateReplicationStateEnum;
}
