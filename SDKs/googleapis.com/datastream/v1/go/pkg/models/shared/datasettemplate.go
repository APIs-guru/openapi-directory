package shared

// DatasetTemplate
// Dataset template used for dynamic dataset creation.
type DatasetTemplate struct {
	DatasetIDPrefix *string `json:"datasetIdPrefix,omitempty"`
	KmsKeyName      *string `json:"kmsKeyName,omitempty"`
	Location        *string `json:"location,omitempty"`
}
