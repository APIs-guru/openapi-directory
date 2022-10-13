package shared

type GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse struct {
	Evaluations   []GoogleCloudDatalabelingV1beta1Evaluation `json:"evaluations"`
	NextPageToken *string                                    `json:"nextPageToken"`
}
