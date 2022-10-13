package shared

type GoogleCloudDatacatalogV1beta1GcsFileSpec struct {
	FilePath      *string                                        `json:"filePath"`
	GcsTimestamps *GoogleCloudDatacatalogV1beta1SystemTimestamps `json:"gcsTimestamps"`
	SizeBytes     *string                                        `json:"sizeBytes"`
}
