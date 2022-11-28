package shared

// GoogleCloudDatacatalogV1beta1GcsFilesetSpec
// Describes a Cloud Storage fileset entry.
type GoogleCloudDatacatalogV1beta1GcsFilesetSpec struct {
	FilePatterns       []string                                   `json:"filePatterns,omitempty"`
	SampleGcsFileSpecs []GoogleCloudDatacatalogV1beta1GcsFileSpec `json:"sampleGcsFileSpecs,omitempty"`
}

// GoogleCloudDatacatalogV1beta1GcsFilesetSpecInput
// Describes a Cloud Storage fileset entry.
type GoogleCloudDatacatalogV1beta1GcsFilesetSpecInput struct {
	FilePatterns []string `json:"filePatterns,omitempty"`
}
