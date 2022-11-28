package shared

// JobExecutionStageInfo
// Contains information about how a particular google.dataflow.v1beta3.Step will be executed.
type JobExecutionStageInfo struct {
	StepName []string `json:"stepName,omitempty"`
}
