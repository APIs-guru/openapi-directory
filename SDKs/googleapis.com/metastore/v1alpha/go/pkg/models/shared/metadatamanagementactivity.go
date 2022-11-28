package shared

// MetadataManagementActivity
// The metadata management activities of the metastore service.
type MetadataManagementActivity struct {
	MetadataExports []MetadataExport `json:"metadataExports,omitempty"`
	Restores        []Restore        `json:"restores,omitempty"`
}
