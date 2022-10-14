package shared

type XSS struct {
	ErrorMessage *string  `json:"errorMessage,omitempty"`
	StackTraces  []string `json:"stackTraces,omitempty"`
}
