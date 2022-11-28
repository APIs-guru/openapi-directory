package shared

// ValidateResponse
// Response to the validation request.
type ValidateResponse struct {
	ErrorMessage *string    `json:"errorMessage,omitempty"`
	QueryInfo    *QueryInfo `json:"queryInfo,omitempty"`
}
