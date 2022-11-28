package shared

// TestDetails
// Additional details about the progress of the running test.
type TestDetails struct {
	ErrorMessage     *string  `json:"errorMessage,omitempty"`
	ProgressMessages []string `json:"progressMessages,omitempty"`
}
