package shared

type GoogleCloudDatacatalogV1beta1GcsFilesetSpec struct {
	FilePatterns       []string                                   `json:"filePatterns"`
	SampleGcsFileSpecs []GoogleCloudDatacatalogV1beta1GcsFileSpec `json:"sampleGcsFileSpecs"`
}
