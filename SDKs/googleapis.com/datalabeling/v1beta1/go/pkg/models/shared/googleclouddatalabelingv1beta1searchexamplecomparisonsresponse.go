package shared

// GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse
// Results of searching example comparisons.
type GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse struct {
	ExampleComparisons []GoogleCloudDatalabelingV1beta1ExampleComparison `json:"exampleComparisons,omitempty"`
	NextPageToken      *string                                           `json:"nextPageToken,omitempty"`
}
