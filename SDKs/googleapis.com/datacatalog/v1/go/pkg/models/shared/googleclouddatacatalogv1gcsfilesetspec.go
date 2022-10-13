package shared

type GoogleCloudDatacatalogV1GcsFilesetSpec struct {
	FilePatterns       []string                              `json:"filePatterns"`
	SampleGcsFileSpecs []GoogleCloudDatacatalogV1GcsFileSpec `json:"sampleGcsFileSpecs"`
}
