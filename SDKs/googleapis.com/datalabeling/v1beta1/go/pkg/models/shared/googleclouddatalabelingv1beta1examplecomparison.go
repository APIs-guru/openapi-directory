package shared

type GoogleCloudDatalabelingV1beta1ExampleComparison struct {
	GroundTruthExample   *GoogleCloudDatalabelingV1beta1Example  `json:"groundTruthExample"`
	ModelCreatedExamples []GoogleCloudDatalabelingV1beta1Example `json:"modelCreatedExamples"`
}
