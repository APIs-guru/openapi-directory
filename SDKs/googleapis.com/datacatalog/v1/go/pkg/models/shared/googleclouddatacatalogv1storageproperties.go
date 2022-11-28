package shared

// GoogleCloudDatacatalogV1StorageProperties
// Details the properties of the underlying storage.
type GoogleCloudDatacatalogV1StorageProperties struct {
	FilePattern []string `json:"filePattern,omitempty"`
	FileType    *string  `json:"fileType,omitempty"`
}
