package shared

type GoogleCloudDatacatalogV1EntryGroup struct {
	DataCatalogTimestamps *GoogleCloudDatacatalogV1SystemTimestamps `json:"dataCatalogTimestamps"`
	Description           *string                                   `json:"description"`
	DisplayName           *string                                   `json:"displayName"`
	Name                  *string                                   `json:"name"`
}
