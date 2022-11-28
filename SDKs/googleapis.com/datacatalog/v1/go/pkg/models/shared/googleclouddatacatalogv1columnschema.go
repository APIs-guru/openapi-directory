package shared

// GoogleCloudDatacatalogV1ColumnSchema
// A column within a schema. Columns can be nested inside other columns.
type GoogleCloudDatacatalogV1ColumnSchema struct {
	Column      *string                                `json:"column,omitempty"`
	Description *string                                `json:"description,omitempty"`
	GcRule      *string                                `json:"gcRule,omitempty"`
	Mode        *string                                `json:"mode,omitempty"`
	Subcolumns  []GoogleCloudDatacatalogV1ColumnSchema `json:"subcolumns,omitempty"`
	Type        *string                                `json:"type,omitempty"`
}
