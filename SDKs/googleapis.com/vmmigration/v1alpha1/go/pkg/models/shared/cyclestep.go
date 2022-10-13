package shared

type CycleStep struct {
	EndTime                 *string                `json:"endTime"`
	InitializingReplication map[string]interface{} `json:"initializingReplication"`
	PostProcessing          map[string]interface{} `json:"postProcessing"`
	Replicating             *ReplicatingStep       `json:"replicating"`
	StartTime               *string                `json:"startTime"`
}
