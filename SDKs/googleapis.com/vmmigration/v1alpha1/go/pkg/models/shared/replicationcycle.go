package shared

type ReplicationCycleStateEnum string

const (
	ReplicationCycleStateEnumStateUnspecified ReplicationCycleStateEnum = "STATE_UNSPECIFIED"
	ReplicationCycleStateEnumRunning          ReplicationCycleStateEnum = "RUNNING"
	ReplicationCycleStateEnumPaused           ReplicationCycleStateEnum = "PAUSED"
	ReplicationCycleStateEnumFailed           ReplicationCycleStateEnum = "FAILED"
	ReplicationCycleStateEnumSucceeded        ReplicationCycleStateEnum = "SUCCEEDED"
)

type ReplicationCycle struct {
	CycleNumber        *int32                     `json:"cycleNumber"`
	EndTime            *string                    `json:"endTime"`
	Error              *Status                    `json:"error"`
	Name               *string                    `json:"name"`
	Progress           *int32                     `json:"progress"`
	ProgressPercent    *int32                     `json:"progressPercent"`
	StartTime          *string                    `json:"startTime"`
	State              *ReplicationCycleStateEnum `json:"state"`
	Steps              []CycleStep                `json:"steps"`
	TotalPauseDuration *string                    `json:"totalPauseDuration"`
}
