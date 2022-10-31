package shared



type GoogleCloudDatacatalogV1beta1GcsFilesetSpec struct {
    FilePatterns []string `json:"filePatterns,omitempty"`
    SampleGcsFileSpecs []GoogleCloudDatacatalogV1beta1GcsFileSpec `json:"sampleGcsFileSpecs,omitempty"`
    
}

