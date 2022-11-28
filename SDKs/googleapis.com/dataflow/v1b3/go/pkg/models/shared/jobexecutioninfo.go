package shared

// JobExecutionInfo
// Additional information about how a Cloud Dataflow job will be executed that isn't contained in the submitted job.
type JobExecutionInfo struct {
	Stages map[string]JobExecutionStageInfo `json:"stages,omitempty"`
}
