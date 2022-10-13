package shared

type SetDataValidationRequest struct {
	Range *GridRange          `json:"range"`
	Rule  *DataValidationRule `json:"rule"`
}
