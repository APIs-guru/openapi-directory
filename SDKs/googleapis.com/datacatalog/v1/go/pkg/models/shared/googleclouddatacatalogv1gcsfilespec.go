package shared

type GoogleCloudDatacatalogV1GcsFileSpec struct {
	FilePath      *string                                   `json:"filePath"`
	GcsTimestamps *GoogleCloudDatacatalogV1SystemTimestamps `json:"gcsTimestamps"`
	SizeBytes     *string                                   `json:"sizeBytes"`
}
