package shared



type JobExecutionInfo struct {
    Stages map[string]JobExecutionStageInfo `json:"stages,omitempty"`
    
}

