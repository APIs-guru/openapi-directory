package shared

type ExecutionStatus struct {
	CancelledCount     *int32                      `json:"cancelledCount,omitempty"`
	CompletionTime     *string                     `json:"completionTime,omitempty"`
	Conditions         []GoogleCloudRunV1Condition `json:"conditions,omitempty"`
	FailedCount        *int32                      `json:"failedCount,omitempty"`
	LogURI             *string                     `json:"logUri,omitempty"`
	ObservedGeneration *int32                      `json:"observedGeneration,omitempty"`
	RetriedCount       *int32                      `json:"retriedCount,omitempty"`
	RunningCount       *int32                      `json:"runningCount,omitempty"`
	StartTime          *string                     `json:"startTime,omitempty"`
	SucceededCount     *int32                      `json:"succeededCount,omitempty"`
}
