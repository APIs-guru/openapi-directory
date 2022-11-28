package shared

// GoogleCloudDatacatalogV1beta1EntryGroup
// EntryGroup Metadata. An EntryGroup resource represents a logical grouping of zero or more Data Catalog Entry resources.
type GoogleCloudDatacatalogV1beta1EntryGroup struct {
	DataCatalogTimestamps *GoogleCloudDatacatalogV1beta1SystemTimestamps `json:"dataCatalogTimestamps,omitempty"`
	Description           *string                                        `json:"description,omitempty"`
	DisplayName           *string                                        `json:"displayName,omitempty"`
	Name                  *string                                        `json:"name,omitempty"`
}

// GoogleCloudDatacatalogV1beta1EntryGroupInput
// EntryGroup Metadata. An EntryGroup resource represents a logical grouping of zero or more Data Catalog Entry resources.
type GoogleCloudDatacatalogV1beta1EntryGroupInput struct {
	DataCatalogTimestamps *GoogleCloudDatacatalogV1beta1SystemTimestampsInput `json:"dataCatalogTimestamps,omitempty"`
	Description           *string                                             `json:"description,omitempty"`
	DisplayName           *string                                             `json:"displayName,omitempty"`
	Name                  *string                                             `json:"name,omitempty"`
}
