package shared

type GoogleCloudDatalabelingV1beta1Attempt struct {
	AttemptTime     *string           `json:"attemptTime"`
	PartialFailures []GoogleRPCStatus `json:"partialFailures"`
}
