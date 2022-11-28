package shared

// GoogleCloudDatalabelingV1beta1ListDatasetsResponse
// Results of listing datasets within a project.
type GoogleCloudDatalabelingV1beta1ListDatasetsResponse struct {
	Datasets      []GoogleCloudDatalabelingV1beta1Dataset `json:"datasets,omitempty"`
	NextPageToken *string                                 `json:"nextPageToken,omitempty"`
}
