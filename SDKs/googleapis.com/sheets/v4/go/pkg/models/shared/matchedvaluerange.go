package shared

type MatchedValueRange struct {
	DataFilters []DataFilter `json:"dataFilters"`
	ValueRange  *ValueRange  `json:"valueRange"`
}
