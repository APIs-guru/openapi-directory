package shared

type TaskStatus struct {
	CompletionTime     *string                     `json:"completionTime"`
	Conditions         []GoogleCloudRunV1Condition `json:"conditions"`
	Index              *int32                      `json:"index"`
	LastAttemptResult  *TaskAttemptResult          `json:"lastAttemptResult"`
	LogURI             *string                     `json:"logUri"`
	ObservedGeneration *int32                      `json:"observedGeneration"`
	Retried            *int32                      `json:"retried"`
	StartTime          *string                     `json:"startTime"`
}
