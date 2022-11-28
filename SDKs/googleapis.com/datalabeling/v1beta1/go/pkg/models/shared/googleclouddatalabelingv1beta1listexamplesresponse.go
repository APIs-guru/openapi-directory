package shared

// GoogleCloudDatalabelingV1beta1ListExamplesResponse
// Results of listing Examples in and annotated dataset.
type GoogleCloudDatalabelingV1beta1ListExamplesResponse struct {
	Examples      []GoogleCloudDatalabelingV1beta1Example `json:"examples,omitempty"`
	NextPageToken *string                                 `json:"nextPageToken,omitempty"`
}
