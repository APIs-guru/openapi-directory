package shared

// GoogleCloudDocumentaiV1beta3ListEvaluationsResponse
// The response from ListEvaluations.
type GoogleCloudDocumentaiV1beta3ListEvaluationsResponse struct {
	Evaluations   []GoogleCloudDocumentaiV1beta3Evaluation `json:"evaluations,omitempty"`
	NextPageToken *string                                  `json:"nextPageToken,omitempty"`
}
