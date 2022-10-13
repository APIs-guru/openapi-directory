package shared

type ListMetadataImportsResponse struct {
	MetadataImports []MetadataImport `json:"metadataImports"`
	NextPageToken   *string          `json:"nextPageToken"`
	Unreachable     []string         `json:"unreachable"`
}
