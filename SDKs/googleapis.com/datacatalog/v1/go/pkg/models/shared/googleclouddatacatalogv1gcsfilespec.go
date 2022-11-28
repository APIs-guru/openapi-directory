package shared

// GoogleCloudDatacatalogV1GcsFileSpec
// Specification of a single file in Cloud Storage.
type GoogleCloudDatacatalogV1GcsFileSpec struct {
	FilePath      *string                                   `json:"filePath,omitempty"`
	GcsTimestamps *GoogleCloudDatacatalogV1SystemTimestamps `json:"gcsTimestamps,omitempty"`
	SizeBytes     *string                                   `json:"sizeBytes,omitempty"`
}
