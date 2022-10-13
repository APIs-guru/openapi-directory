package shared

type CustomError struct {
	Rules []CustomErrorRule `json:"rules"`
	Types []string          `json:"types"`
}
