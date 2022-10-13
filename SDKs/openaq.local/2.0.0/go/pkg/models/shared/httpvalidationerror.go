package shared

type HTTPValidationError struct {
	Detail []ValidationError `json:"detail"`
}
