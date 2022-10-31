package shared

type TestDetails struct {
	ErrorMessage     *string  `json:"errorMessage,omitempty"`
	ProgressMessages []string `json:"progressMessages,omitempty"`
}
