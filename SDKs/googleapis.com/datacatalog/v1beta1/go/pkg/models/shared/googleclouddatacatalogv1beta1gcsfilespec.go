package shared

// GoogleCloudDatacatalogV1beta1GcsFileSpec
// Specifications of a single file in Cloud Storage.
type GoogleCloudDatacatalogV1beta1GcsFileSpec struct {
	FilePath      *string                                        `json:"filePath,omitempty"`
	GcsTimestamps *GoogleCloudDatacatalogV1beta1SystemTimestamps `json:"gcsTimestamps,omitempty"`
	SizeBytes     *string                                        `json:"sizeBytes,omitempty"`
}
