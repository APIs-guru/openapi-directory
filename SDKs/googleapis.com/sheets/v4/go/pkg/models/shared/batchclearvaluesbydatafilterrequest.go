package shared

// BatchClearValuesByDataFilterRequest
// The request for clearing more than one range selected by a DataFilter in a spreadsheet.
type BatchClearValuesByDataFilterRequest struct {
	DataFilters []DataFilter `json:"dataFilters,omitempty"`
}
