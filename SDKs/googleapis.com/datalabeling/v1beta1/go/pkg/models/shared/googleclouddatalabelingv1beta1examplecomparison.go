package shared

// GoogleCloudDatalabelingV1beta1ExampleComparison
// Example comparisons comparing ground truth output and predictions for a specific input.
type GoogleCloudDatalabelingV1beta1ExampleComparison struct {
	GroundTruthExample   *GoogleCloudDatalabelingV1beta1Example  `json:"groundTruthExample,omitempty"`
	ModelCreatedExamples []GoogleCloudDatalabelingV1beta1Example `json:"modelCreatedExamples,omitempty"`
}
