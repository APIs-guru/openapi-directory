package shared

type GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse struct {
	ExampleComparisons []GoogleCloudDatalabelingV1beta1ExampleComparison `json:"exampleComparisons,omitempty"`
	NextPageToken      *string                                           `json:"nextPageToken,omitempty"`
}
