package shared

type GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse struct {
	AnnotatedDatasets []GoogleCloudDatalabelingV1beta1AnnotatedDataset `json:"annotatedDatasets"`
	NextPageToken     *string                                          `json:"nextPageToken"`
}
