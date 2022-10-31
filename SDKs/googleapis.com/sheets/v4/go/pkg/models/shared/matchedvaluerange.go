package shared



type MatchedValueRange struct {
    DataFilters []DataFilter `json:"dataFilters,omitempty"`
    ValueRange *ValueRange `json:"valueRange,omitempty"`
    
}

