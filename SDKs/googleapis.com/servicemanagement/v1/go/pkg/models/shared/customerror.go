package shared

type CustomError struct {
	Rules []CustomErrorRule `json:"rules,omitempty"`
	Types []string          `json:"types,omitempty"`
}
