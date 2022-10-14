package shared

type GoogleCloudDatacatalogV1GcsFilesetSpec struct {
	FilePatterns       []string                              `json:"filePatterns,omitempty"`
	SampleGcsFileSpecs []GoogleCloudDatacatalogV1GcsFileSpec `json:"sampleGcsFileSpecs,omitempty"`
}
