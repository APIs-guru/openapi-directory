package shared

type ClusterStateReplicationStateEnum string

const (
	ClusterStateReplicationStateEnumStateNotKnown        ClusterStateReplicationStateEnum = "STATE_NOT_KNOWN"
	ClusterStateReplicationStateEnumInitializing         ClusterStateReplicationStateEnum = "INITIALIZING"
	ClusterStateReplicationStateEnumPlannedMaintenance   ClusterStateReplicationStateEnum = "PLANNED_MAINTENANCE"
	ClusterStateReplicationStateEnumUnplannedMaintenance ClusterStateReplicationStateEnum = "UNPLANNED_MAINTENANCE"
	ClusterStateReplicationStateEnumReady                ClusterStateReplicationStateEnum = "READY"
	ClusterStateReplicationStateEnumReadyOptimizing      ClusterStateReplicationStateEnum = "READY_OPTIMIZING"
)

// ClusterState
// The state of a table's data in a particular cluster.
type ClusterState struct {
	EncryptionInfo   []EncryptionInfo                  `json:"encryptionInfo,omitempty"`
	ReplicationState *ClusterStateReplicationStateEnum `json:"replicationState,omitempty"`
}
