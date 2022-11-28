package shared

// XSS
// Information reported for an XSS.
type XSS struct {
	ErrorMessage *string  `json:"errorMessage,omitempty"`
	StackTraces  []string `json:"stackTraces,omitempty"`
}
