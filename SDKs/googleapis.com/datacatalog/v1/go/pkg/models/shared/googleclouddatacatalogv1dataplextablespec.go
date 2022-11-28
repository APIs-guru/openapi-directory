package shared

// GoogleCloudDatacatalogV1DataplexTableSpec
// Entry specification for a Dataplex table.
type GoogleCloudDatacatalogV1DataplexTableSpec struct {
	DataplexSpec   *GoogleCloudDatacatalogV1DataplexSpec           `json:"dataplexSpec,omitempty"`
	ExternalTables []GoogleCloudDatacatalogV1DataplexExternalTable `json:"externalTables,omitempty"`
	UserManaged    *bool                                           `json:"userManaged,omitempty"`
}
