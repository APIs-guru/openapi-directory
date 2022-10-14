package shared

type GoogleCloudDatacatalogV1StorageProperties struct {
	FilePattern []string `json:"filePattern,omitempty"`
	FileType    *string  `json:"fileType,omitempty"`
}
