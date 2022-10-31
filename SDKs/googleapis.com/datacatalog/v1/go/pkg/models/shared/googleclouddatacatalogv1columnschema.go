package shared

type GoogleCloudDatacatalogV1ColumnSchema struct {
	Column           *string                                               `json:"column,omitempty"`
	Description      *string                                               `json:"description,omitempty"`
	LookerColumnSpec *GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpec `json:"lookerColumnSpec,omitempty"`
	Mode             *string                                               `json:"mode,omitempty"`
	Subcolumns       []GoogleCloudDatacatalogV1ColumnSchema                `json:"subcolumns,omitempty"`
	Type             *string                                               `json:"type,omitempty"`
}
