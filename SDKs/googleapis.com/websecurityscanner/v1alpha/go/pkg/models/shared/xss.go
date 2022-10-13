package shared

type XSS struct {
	ErrorMessage *string  `json:"errorMessage"`
	StackTraces  []string `json:"stackTraces"`
}
