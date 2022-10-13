package shared

type ErrorResponse struct {
	DeveloperMessage *string               `json:"developerMessage"`
	ErrorType        *string               `json:"errorType"`
	Violations       []ConstraintViolation `json:"violations"`
}
