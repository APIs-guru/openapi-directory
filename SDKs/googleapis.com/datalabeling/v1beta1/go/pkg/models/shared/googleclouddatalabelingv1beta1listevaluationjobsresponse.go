package shared

type GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse struct {
	EvaluationJobs []GoogleCloudDatalabelingV1beta1EvaluationJob `json:"evaluationJobs"`
	NextPageToken  *string                                       `json:"nextPageToken"`
}
