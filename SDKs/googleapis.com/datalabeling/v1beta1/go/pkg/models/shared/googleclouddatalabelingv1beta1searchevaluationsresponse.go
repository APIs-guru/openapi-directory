package shared

type GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse struct {
	Evaluations   []GoogleCloudDatalabelingV1beta1Evaluation `json:"evaluations,omitempty"`
	NextPageToken *string                                    `json:"nextPageToken,omitempty"`
}
