package shared

type GhErrorHints struct {
	Message *string `json:"message"`
}

type GhError struct {
	Hints   []GhErrorHints `json:"hints"`
	Message *string        `json:"message"`
}
