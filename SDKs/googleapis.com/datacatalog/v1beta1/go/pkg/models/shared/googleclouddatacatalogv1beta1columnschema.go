package shared



type GoogleCloudDatacatalogV1beta1ColumnSchema struct {
    Column *string `json:"column,omitempty"`
    Description *string `json:"description,omitempty"`
    Mode *string `json:"mode,omitempty"`
    Subcolumns []GoogleCloudDatacatalogV1beta1ColumnSchema `json:"subcolumns,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

