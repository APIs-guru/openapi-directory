package shared

type MetadataManagementActivity struct {
	MetadataExports []MetadataExport `json:"metadataExports,omitempty"`
	Restores        []Restore        `json:"restores,omitempty"`
}
