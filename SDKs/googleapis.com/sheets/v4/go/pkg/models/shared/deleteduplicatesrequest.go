package shared



type DeleteDuplicatesRequest struct {
    ComparisonColumns []DimensionRange `json:"comparisonColumns,omitempty"`
    Range *GridRange `json:"range,omitempty"`
    
}

