package shared

type MetadataManagementActivity struct {
	MetadataExports []MetadataExport `json:"metadataExports"`
	Restores        []Restore        `json:"restores"`
}
