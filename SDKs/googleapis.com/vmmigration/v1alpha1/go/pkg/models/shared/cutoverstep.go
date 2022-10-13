package shared

type CutoverStep struct {
	EndTime                  *string                `json:"endTime"`
	FinalSync                *ReplicationCycle      `json:"finalSync"`
	InstantiatingMigratedVM  map[string]interface{} `json:"instantiatingMigratedVm"`
	PreparingVMDisks         map[string]interface{} `json:"preparingVmDisks"`
	PreviousReplicationCycle *ReplicationCycle      `json:"previousReplicationCycle"`
	ShuttingDownSourceVM     map[string]interface{} `json:"shuttingDownSourceVm"`
	StartTime                *string                `json:"startTime"`
}
