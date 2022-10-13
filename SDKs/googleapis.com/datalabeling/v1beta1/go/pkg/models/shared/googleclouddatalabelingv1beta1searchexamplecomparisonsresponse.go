package shared

type GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse struct {
	ExampleComparisons []GoogleCloudDatalabelingV1beta1ExampleComparison `json:"exampleComparisons"`
	NextPageToken      *string                                           `json:"nextPageToken"`
}
