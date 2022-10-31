package shared

type IntegratorObjectResult struct {
	Actions []interface{} `json:"actions"`
	ID      string        `json:"id"`
	LinkURL *string       `json:"linkUrl,omitempty"`
	Title   string        `json:"title"`
	Tokens  []ObjectToken `json:"tokens"`
}
