package shared

// BatchClearValuesRequest
// The request for clearing more than one range of values in a spreadsheet.
type BatchClearValuesRequest struct {
	Ranges []string `json:"ranges,omitempty"`
}
