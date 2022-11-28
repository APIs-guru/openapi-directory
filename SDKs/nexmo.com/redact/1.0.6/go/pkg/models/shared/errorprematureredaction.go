package shared

// ErrorPrematureRedaction
// Premature Redaction
type ErrorPrematureRedaction struct {
	Detail   string `json:"detail"`
	Instance string `json:"instance"`
	Title    string `json:"title"`
	Type     string `json:"type"`
}
