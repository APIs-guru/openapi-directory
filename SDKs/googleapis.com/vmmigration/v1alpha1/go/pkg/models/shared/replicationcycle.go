package shared

type ReplicationCycleStateEnum string

const (
	ReplicationCycleStateEnumStateUnspecified ReplicationCycleStateEnum = "STATE_UNSPECIFIED"
	ReplicationCycleStateEnumRunning          ReplicationCycleStateEnum = "RUNNING"
	ReplicationCycleStateEnumPaused           ReplicationCycleStateEnum = "PAUSED"
	ReplicationCycleStateEnumFailed           ReplicationCycleStateEnum = "FAILED"
	ReplicationCycleStateEnumSucceeded        ReplicationCycleStateEnum = "SUCCEEDED"
)

// ReplicationCycle
// ReplicationCycle contains information about the current replication cycle status.
type ReplicationCycle struct {
	CycleNumber        *int32                     `json:"cycleNumber,omitempty"`
	EndTime            *string                    `json:"endTime,omitempty"`
	Error              *Status                    `json:"error,omitempty"`
	Name               *string                    `json:"name,omitempty"`
	Progress           *int32                     `json:"progress,omitempty"`
	ProgressPercent    *int32                     `json:"progressPercent,omitempty"`
	StartTime          *string                    `json:"startTime,omitempty"`
	State              *ReplicationCycleStateEnum `json:"state,omitempty"`
	Steps              []CycleStep                `json:"steps,omitempty"`
	TotalPauseDuration *string                    `json:"totalPauseDuration,omitempty"`
}
