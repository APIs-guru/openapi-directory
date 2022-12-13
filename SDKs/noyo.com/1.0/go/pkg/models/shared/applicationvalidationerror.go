package shared

type ApplicationValidationError struct {
	ErrorLocation *string `json:"error_location,omitempty"`
	ErrorMessage  *string `json:"error_message,omitempty"`
	ErrorType     *string `json:"error_type,omitempty"`
}
