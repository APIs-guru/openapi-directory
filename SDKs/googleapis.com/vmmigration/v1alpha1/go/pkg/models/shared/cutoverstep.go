package shared

type CutoverStep struct {
	EndTime                  *string                `json:"endTime,omitempty"`
	FinalSync                *ReplicationCycle      `json:"finalSync,omitempty"`
	InstantiatingMigratedVM  map[string]interface{} `json:"instantiatingMigratedVm,omitempty"`
	PreparingVMDisks         map[string]interface{} `json:"preparingVmDisks,omitempty"`
	PreviousReplicationCycle *ReplicationCycle      `json:"previousReplicationCycle,omitempty"`
	ShuttingDownSourceVM     map[string]interface{} `json:"shuttingDownSourceVm,omitempty"`
	StartTime                *string                `json:"startTime,omitempty"`
}
