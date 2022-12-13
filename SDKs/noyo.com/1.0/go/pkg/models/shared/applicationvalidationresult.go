package shared

type ApplicationValidationResult struct {
	ValidationErrors []ApplicationValidationError `json:"validation_errors"`
}
