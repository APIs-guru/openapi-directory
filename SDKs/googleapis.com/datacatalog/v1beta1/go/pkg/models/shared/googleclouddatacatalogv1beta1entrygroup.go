package shared

type GoogleCloudDatacatalogV1beta1EntryGroup struct {
	DataCatalogTimestamps *GoogleCloudDatacatalogV1beta1SystemTimestamps `json:"dataCatalogTimestamps,omitempty"`
	Description           *string                                        `json:"description,omitempty"`
	DisplayName           *string                                        `json:"displayName,omitempty"`
	Name                  *string                                        `json:"name,omitempty"`
}
