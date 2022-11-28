package shared

// GoogleCloudDatacatalogV1EntryGroup
// Entry group metadata. An `EntryGroup` resource represents a logical grouping of zero or more Data Catalog Entry resources.
type GoogleCloudDatacatalogV1EntryGroup struct {
	DataCatalogTimestamps *GoogleCloudDatacatalogV1SystemTimestamps `json:"dataCatalogTimestamps,omitempty"`
	Description           *string                                   `json:"description,omitempty"`
	DisplayName           *string                                   `json:"displayName,omitempty"`
	Name                  *string                                   `json:"name,omitempty"`
}

// GoogleCloudDatacatalogV1EntryGroupInput
// Entry group metadata. An `EntryGroup` resource represents a logical grouping of zero or more Data Catalog Entry resources.
type GoogleCloudDatacatalogV1EntryGroupInput struct {
	DataCatalogTimestamps *GoogleCloudDatacatalogV1SystemTimestampsInput `json:"dataCatalogTimestamps,omitempty"`
	Description           *string                                        `json:"description,omitempty"`
	DisplayName           *string                                        `json:"displayName,omitempty"`
	Name                  *string                                        `json:"name,omitempty"`
}
