package shared



type ErrorResponse struct {
    DeveloperMessage *string `json:"developerMessage,omitempty"`
    ErrorType *string `json:"errorType,omitempty"`
    Violations []ConstraintViolation `json:"violations,omitempty"`
    
}

