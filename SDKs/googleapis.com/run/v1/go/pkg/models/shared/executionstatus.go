package shared

type ExecutionStatus struct {
	CancelledCount     *int32                      `json:"cancelledCount"`
	CompletionTime     *string                     `json:"completionTime"`
	Conditions         []GoogleCloudRunV1Condition `json:"conditions"`
	FailedCount        *int32                      `json:"failedCount"`
	LogURI             *string                     `json:"logUri"`
	ObservedGeneration *int32                      `json:"observedGeneration"`
	RetriedCount       *int32                      `json:"retriedCount"`
	RunningCount       *int32                      `json:"runningCount"`
	StartTime          *string                     `json:"startTime"`
	SucceededCount     *int32                      `json:"succeededCount"`
}
