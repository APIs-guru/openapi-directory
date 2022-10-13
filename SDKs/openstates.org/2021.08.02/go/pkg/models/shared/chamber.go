package shared

type Chamber struct {
	Classification string `json:"classification"`
	Districts      []Post `json:"districts"`
	ID             string `json:"id"`
	Name           string `json:"name"`
}
