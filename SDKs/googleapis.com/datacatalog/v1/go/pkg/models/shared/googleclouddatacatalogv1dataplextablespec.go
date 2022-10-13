package shared

type GoogleCloudDatacatalogV1DataplexTableSpec struct {
	DataplexSpec   *GoogleCloudDatacatalogV1DataplexSpec           `json:"dataplexSpec"`
	ExternalTables []GoogleCloudDatacatalogV1DataplexExternalTable `json:"externalTables"`
	UserManaged    *bool                                           `json:"userManaged"`
}
