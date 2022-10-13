package shared

type GoogleCloudDatalabelingV1beta1ListExamplesResponse struct {
	Examples      []GoogleCloudDatalabelingV1beta1Example `json:"examples"`
	NextPageToken *string                                 `json:"nextPageToken"`
}
