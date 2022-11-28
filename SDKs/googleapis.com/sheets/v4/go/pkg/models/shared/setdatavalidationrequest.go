package shared

// SetDataValidationRequest
// Sets a data validation rule to every cell in the range. To clear validation in a range, call this with no rule specified.
type SetDataValidationRequest struct {
	Range *GridRange          `json:"range,omitempty"`
	Rule  *DataValidationRule `json:"rule,omitempty"`
}
