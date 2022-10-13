package shared

type TestDetails struct {
	ErrorMessage     *string  `json:"errorMessage"`
	ProgressMessages []string `json:"progressMessages"`
}
