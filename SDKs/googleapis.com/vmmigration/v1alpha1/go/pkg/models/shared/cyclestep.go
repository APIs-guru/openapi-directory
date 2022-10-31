package shared



type CycleStep struct {
    EndTime *string `json:"endTime,omitempty"`
    InitializingReplication map[string]interface{} `json:"initializingReplication,omitempty"`
    PostProcessing map[string]interface{} `json:"postProcessing,omitempty"`
    Replicating *ReplicatingStep `json:"replicating,omitempty"`
    StartTime *string `json:"startTime,omitempty"`
    
}

