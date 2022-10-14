package shared

type SetDataValidationRequest struct {
	Range *GridRange          `json:"range,omitempty"`
	Rule  *DataValidationRule `json:"rule,omitempty"`
}
