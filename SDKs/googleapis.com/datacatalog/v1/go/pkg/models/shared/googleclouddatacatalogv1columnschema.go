package shared

type GoogleCloudDatacatalogV1ColumnSchema struct {
	Column           *string                                               `json:"column"`
	Description      *string                                               `json:"description"`
	LookerColumnSpec *GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpec `json:"lookerColumnSpec"`
	Mode             *string                                               `json:"mode"`
	Subcolumns       []GoogleCloudDatacatalogV1ColumnSchema                `json:"subcolumns"`
	Type             *string                                               `json:"type"`
}
