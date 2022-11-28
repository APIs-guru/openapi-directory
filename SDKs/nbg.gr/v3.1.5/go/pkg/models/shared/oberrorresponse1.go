package shared

// ObErrorResponse1
// An array of detail error codes, and messages, and URLs to documentation to help remediation.
type ObErrorResponse1 struct {
	Code    string     `json:"Code"`
	Errors  []ObError1 `json:"Errors"`
	ID      *string    `json:"Id,omitempty"`
	Message string     `json:"Message"`
}
