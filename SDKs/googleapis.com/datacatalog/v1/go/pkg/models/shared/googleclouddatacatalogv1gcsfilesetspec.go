package shared

// GoogleCloudDatacatalogV1GcsFilesetSpec
// Describes a Cloud Storage fileset entry.
type GoogleCloudDatacatalogV1GcsFilesetSpec struct {
	FilePatterns       []string                              `json:"filePatterns,omitempty"`
	SampleGcsFileSpecs []GoogleCloudDatacatalogV1GcsFileSpec `json:"sampleGcsFileSpecs,omitempty"`
}

// GoogleCloudDatacatalogV1GcsFilesetSpecInput
// Describes a Cloud Storage fileset entry.
type GoogleCloudDatacatalogV1GcsFilesetSpecInput struct {
	FilePatterns []string `json:"filePatterns,omitempty"`
}
