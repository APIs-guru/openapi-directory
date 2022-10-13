package shared

type GoogleCloudDatacatalogV1beta1ColumnSchema struct {
	Column      *string                                     `json:"column"`
	Description *string                                     `json:"description"`
	Mode        *string                                     `json:"mode"`
	Subcolumns  []GoogleCloudDatacatalogV1beta1ColumnSchema `json:"subcolumns"`
	Type        *string                                     `json:"type"`
}
