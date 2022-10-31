package shared

type ClusterStatusStateEnum string

const (
	ClusterStatusStateEnumUnknown          ClusterStatusStateEnum = "UNKNOWN"
	ClusterStatusStateEnumCreating         ClusterStatusStateEnum = "CREATING"
	ClusterStatusStateEnumRunning          ClusterStatusStateEnum = "RUNNING"
	ClusterStatusStateEnumError            ClusterStatusStateEnum = "ERROR"
	ClusterStatusStateEnumErrorDueToUpdate ClusterStatusStateEnum = "ERROR_DUE_TO_UPDATE"
	ClusterStatusStateEnumDeleting         ClusterStatusStateEnum = "DELETING"
	ClusterStatusStateEnumUpdating         ClusterStatusStateEnum = "UPDATING"
	ClusterStatusStateEnumStopping         ClusterStatusStateEnum = "STOPPING"
	ClusterStatusStateEnumStopped          ClusterStatusStateEnum = "STOPPED"
	ClusterStatusStateEnumStarting         ClusterStatusStateEnum = "STARTING"
	ClusterStatusStateEnumRepairing        ClusterStatusStateEnum = "REPAIRING"
)

type ClusterStatusSubstateEnum string

const (
	ClusterStatusSubstateEnumUnspecified ClusterStatusSubstateEnum = "UNSPECIFIED"
	ClusterStatusSubstateEnumUnhealthy   ClusterStatusSubstateEnum = "UNHEALTHY"
	ClusterStatusSubstateEnumStaleStatus ClusterStatusSubstateEnum = "STALE_STATUS"
)

type ClusterStatus struct {
	Detail         *string                    `json:"detail,omitempty"`
	State          *ClusterStatusStateEnum    `json:"state,omitempty"`
	StateStartTime *string                    `json:"stateStartTime,omitempty"`
	Substate       *ClusterStatusSubstateEnum `json:"substate,omitempty"`
}
