package shared

// GoogleCloudDatalabelingV1beta1Attempt
// Records a failed evaluation job run.
type GoogleCloudDatalabelingV1beta1Attempt struct {
	AttemptTime     *string           `json:"attemptTime,omitempty"`
	PartialFailures []GoogleRPCStatus `json:"partialFailures,omitempty"`
}
