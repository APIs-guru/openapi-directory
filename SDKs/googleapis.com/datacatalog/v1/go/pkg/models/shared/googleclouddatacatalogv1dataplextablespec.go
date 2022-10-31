package shared



type GoogleCloudDatacatalogV1DataplexTableSpec struct {
    DataplexSpec *GoogleCloudDatacatalogV1DataplexSpec `json:"dataplexSpec,omitempty"`
    ExternalTables []GoogleCloudDatacatalogV1DataplexExternalTable `json:"externalTables,omitempty"`
    UserManaged *bool `json:"userManaged,omitempty"`
    
}

